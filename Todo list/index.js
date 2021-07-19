// toggle todo-list
const undoneTodoList = document.querySelector('.undone-todo-list')
const doneTodoList = document.querySelector('.done-todo-list')
const todoToggles = document.querySelectorAll('.todo-unchecked, .todo-checked')

const toggleTodoEventHandler = (event) =>
{
    const toggle = event.target.parentNode.classList.contains('todo') ? event.target : event.target.parentNode 
    const todo = toggle.parentElement

    toggle.classList.toggle('todo-unchecked')
    toggle.classList.toggle('todo-checked')

    const checked = toggle.classList.contains('todo-checked')
    const todoList = checked ? doneTodoList : undoneTodoList
    
    todoList.appendChild(todo)
    updateTodoListText()
}

todoToggles.forEach(toggle => toggle.addEventListener('click', toggleTodoEventHandler))

// Remove todo-list and update number of todo
const deleteTodos = document.querySelectorAll('.todo-delete')

const removeTodoEventHandler = (event) =>
{
    const todo = event.target.parentElement
    const todoList = todo.parentElement
    
    todoList.removeChild(todo)
    updateTodoListText()
}
deleteTodos.forEach(remove => remove.addEventListener('click', removeTodoEventHandler))

//Expand done-todo-list
const arrowDownImage = document.querySelector('.arrow-down-image')

const doneTodoListExpand = () =>
{
    doneTodoList.classList.toggle('hidden')

    arrowDownImage.classList.toggle('arrow-down-image')
    arrowDownImage.classList.toggle('arrow-right-image')
}

arrowDownImage.addEventListener('click', doneTodoListExpand)

//add todo
const addTodoImage = document.querySelector('.add-todo-image')
const addTodoContent = document.querySelector('.add-todo-content')

const addTodoEventHandler = () =>
{
    if (addTodoContent.value === '') return 

    const newTodoContent = addTodoContent.value
    const newTodo = document.createElement('div')
    newTodo.innerHTML = 
        `<div class="done-todo-list">
        <div class="todo">
            <div class="todo-unchecked">
                <div class="todo-checked-image"></div>
            </div>
            <div class="todo-content">${newTodoContent}</div>
            <div class="todo-delete"></div>
        </div>`

    undoneTodoList.appendChild(newTodo)

    newTodo.querySelector('.todo-delete').addEventListener('click', removeTodoEventHandler)
    newTodo.querySelector('.todo-unchecked').addEventListener('click', toggleTodoEventHandler)

    addTodoContent.value = addTodoContent.placeholder = ''
    updateTodoListText()
}

addTodoImage.addEventListener('click', addTodoEventHandler)


const updateTodoListText = () =>
{
    const todoLength = document.querySelector('.undone-todo-list').childElementCount
    const todoListUndoneCount = document.querySelector('.todo-list-undone-count')

    todoListUndoneCount.innerHTML = todoLength.toString()
}

updateTodoListText()
