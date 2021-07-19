(async () =>
{
    class TodoApi
    {
        static #apiUrl = "http://localhost:3004/todos"
        static #headers = { "Content-Type" : "application/json" }

        getAll = async () => await(await fetch(TodoApi.#apiUrl)).json()

        create = todo => fetch(TodoApi.#apiUrl,
        {
            method : 'POST',
            headers : TodoApi.#headers,
            body : JSON.stringify(todo)
        })

        patchCompleted = (id, completed) => fetch(`${TodoApi.#apiUrl}/${id}`,
        {
            method : 'PATCH',
            headers : TodoApi.#headers,
            body : JSON.stringify({ completed : !completed })
        })

        delete = id => fetch(`${TodoApi.#apiUrl}/${id}`,{ method : 'DELETE' })
    }

    class TodoDom
    {
        static #undoneTodoList = document.querySelector('.undone-todo-list')
        static #doneTodoList = document.querySelector('.done-todo-list')
        static #getTodoList = (completed) => completed ? TodoDom.#doneTodoList : TodoDom.#undoneTodoList

        toggle = (toggle, completed, todo) =>
        {
            toggle.classList.toggle('todo-checked')
            toggle.classList.toggle('todo-unchecked')

            TodoDom.#getTodoList(!completed).appendChild(todo)
        }

        delete = todo => todo.parentElement.removeChild(todo)

        add = ({ id, completed, content }) =>
        {
            const newTodo = document.createElement('div')
            const toggleClass = completed ? 'todo-checked' : 'todo-unchecked'

            newTodo.innerHTML = 
            `<div class="done-todo-list">
            <div class="todo" data-todo-id="${id}">
                <div class="${toggleClass}">
                    <div class="todo-checked-image"></div>
                </div>
                <input class="todo-content" value="${content}">
                <div class="todo-delete"></div>
            </div>`

            newTodo.querySelector('.todo-delete').addEventListener('click', todoEventHandler.delete)
            newTodo.querySelector('.todo-checked, .todo-unchecked').addEventListener('click', todoEventHandler.toggle)

            TodoDom.#getTodoList(completed).appendChild(newTodo)

            const addTodoContent = document.querySelector('.add-todo-content')
            addTodoContent.value = addTodoContent.placeholder = ''
        }

        expandOrCollapse = () =>
        {
            const expandOrCollapseImage = document.querySelector('.arrow-down-image')

            TodoDom.#doneTodoList.classList.toggle('hidden')

            expandOrCollapseImage.classList.toggle('arrow-right-image')
        }

        isTodo = element => element.classList.contains('todo')
    }

    class TodoEventHandler 
    {
        toggle = event =>
        {
            const toggle = todoDom.isTodo(event.target.parentElement) ? event.target : event.target.parentElement
            const todo = toggle.parentElement
            const completed = toggle.classList.contains('todo-checked')
            const id = todo.dataset.todoId

            todoDom.toggle(toggle, completed, todo)
            todoApi.patchCompleted(id, completed)
            updateTodoListText()
        }

        delete = event =>
        {
            const todo = event.target.parentElement
            const id = todo.dataset.todoId

            todoDom.delete(todo)
            todoApi.delete(id)
            updateTodoListText()
        }

        add = async () =>
        {
            const content = document.querySelector('.add-todo-content').value
            
            if (content === '') return

            const todos = await todoApi.getAll()
            const todoIds = todos.map(t => t.id)
            const id = Math.max(...todoIds) + 1
            const todo = { id, content, completed : false }

            todoDom.add(todo)
            todoApi.create(todo)
            updateTodoListText()
        }

        expandOrCollapseTodos = () => todoDom.expandOrCollapse()
    }

    const updateTodoListText = () =>
    {
        const undoneTodoListChildrenCount = document.querySelector('.undone-todo-list').childElementCount
        const todoListUndoneCount = document.querySelector('.todo-list-undone-count')

        todoListUndoneCount.innerHTML = undoneTodoListChildrenCount.toString()
    }

    const todoApi = new TodoApi()
    const todoDom = new TodoDom()
    const todoEventHandler = new TodoEventHandler()

    document.querySelector('.add-todo-image').addEventListener('click', todoEventHandler.add)
    document.querySelector('.done-todo-list-title').addEventListener('click', todoEventHandler.expandOrCollapseTodos)

    await (generateTodos = async () =>
    {
        const todos = (await todoApi.getAll())
        todos.forEach(todo => todoDom.add(todo))
    })()

    updateTodoListText()
})()
