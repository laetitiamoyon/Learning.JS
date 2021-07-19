
let elements = 
{
    form : document.querySelector('.form'),
    userName : document.querySelector('.username'),
    phone : document.querySelector('.phone'),    
    age : document.querySelector('.age'),
    date : document.querySelector('.date'),
    country : document.querySelector('.country'),
    email : document.querySelector('.email'),
    password : document.querySelector('.password'),
    passwordConfirm : document.querySelector('.password-confirm'), 
    
    userNameError : document.querySelector('.username').nextElementSibling,
    phoneError : document.querySelector('.phone').nextElementSibling,
    ageError : document.querySelector('.age').nextElementSibling,
    dateError : document.querySelector('.date').nextElementSibling,
    countryError : document.querySelector('.country').nextElementSibling,
    emailError : document.querySelector('.email').nextElementSibling,
    passwordError : document.querySelector('.password').nextElementSibling,
    passwordConfirmError : document.querySelector('.password-confirm').nextElementSibling,

    errorSummary : document.querySelector('.error-summary'),
    submitButton : document.querySelector('.submit-button'),
}

let values =
{
    userName : null,
    phone : null,
    age : null,
    date : null,
    country : null,
    email : null,
    password : null,
    passwordConfirm : null
}

let errors =
{
    userName : null,
    phone : null,
    age : null,
    date : null,
    country : null,
    email : null,
    password : null,
    passwordConfirm : null
}

const getAllErrors = () => Object.entries(errors)
    .map(error => error[1])
    .filter(error => error !== null)
    .map(error => `- ${error}`)
    .join('\n')

const refreshErrorSummary = () => elements.errorSummary.innerText = getAllErrors()

const updateFieldValidation = (element, error) =>
{
    const isValid = error === null
    const fieldImageElement = element.nextElementSibling
    const fieldElement = element.parentElement

    fieldImageElement.className = isValid ? 'checked-logo' : 'exclamation-logo'
    fieldImageElement.src = isValid ? 'Logo/checked.png' : 'Logo/exclamation.png'
    fieldElement.className = isValid ? 'form-control success' : 'form-control error';
}

const getFormValue = (event) => event?.target?.value ?? event?.checked

const refreshForm = (element, error) => updateFieldValidation(element, error)

const validate =
{
    userName : (value) => elements.userNameError.innerText = errors.userName = !value || value.length === 0 ? "Le nom est requis" : null,
    
    phone : (value) => 
    {
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        
        elements.phoneError.innerText = errors.phone = 
            !value || value.length === 0 ? "Le numéro de téléphone est requis" :
            !phoneRegex.test(value) ? "Le numéro de téléphone n'est pas valide" : null
    },

    age : (value) => elements.ageError.innerText = errors.age = 
        value < 18 ? "Les inscriptions sont réservées aux majeurs" : 
        value >= 70 ? "Les inscriptions ne sont plus possibles à partir de 70 ans" : null,

    country : (value) => elements.countryError.innerText = errors.country = value === null ? "Merci de sélectionner un pays" : null,

    email : (value) => 
    {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       
        elements.emailError.innerText = errors.email = 
            !value || value.length === 0 ? "L'adresse e-mail est requise" :
            !emailRegex.test(value) ? "L'adresse e-mail n'est pas valide" : null
    },

    password : (value) => elements.passwordError.innerText = errors.password = value.length < 8 ? "Le mot de passe doit contenir minimum 8 caractères" : null,

    passwordConfirm : (value) => elements.passwordConfirmError.innerText = errors.passwordConfirm = value !== values.password ? "Les mots de passe sont différents" : null,

    all : () =>
    {
        validate.userName(values.userName)
        validate.phone(values.phone)
        validate.age(values.age)
        validate.country(values.country)
        validate.email(values.email)
        validate.password(values.password)
        validate.passwordConfirm(values.passwordConfirm)
    }

}

const nameHandler = (event) =>
{
    const value = values.userName = getFormValue(event)

	validate.userName(value)
    refreshForm(elements.userNameError, errors.userName)
}

const phoneHandler = (event) =>
{
    const value = values.phone = getFormValue(event)

    validate.phone(value)
    refreshForm(elements.phoneError, errors.phone)
}

const ageHandler = (event) =>
{
    const value = values.age = getFormValue(event)

    validate.age(value)
}

const countryHandler = (event) =>
{
    const value = values.country = getFormValue(event)

    validate.country(value)
}

const emailHandler = (event) =>
{
    const value = values.email = getFormValue(event)

    validate.email(value)
    refreshForm(elements.emailError, errors.email)
}

const passwordHandler = (event) =>
{
    const value = values.password = getFormValue(event)

    validate.password(value)
    refreshForm(elements.passwordError, errors.password)
}

const passwordConfirmHandler = (event) =>
{
    const value = values.passwordConfirm = getFormValue(event)

    validate.passwordConfirm(value)
    refreshForm(elements.passwordConfirmError, errors.passwordConfirm)
}

const submitHandler = (event) => 
{
    event.preventDefault()
    refreshErrorSummary(() => validate.all())
    alert(`Errors :\n${getAllErrors()}\n\nValues :\n${JSON.stringify(values)}`)
}

elements.userName.addEventListener('input', nameHandler)
elements.phone.addEventListener('input', phoneHandler)
elements.age.addEventListener('input', ageHandler)
elements.email.addEventListener('input', emailHandler)
elements.country.addEventListener('change', countryHandler)
elements.password.addEventListener('input', passwordHandler)
elements.passwordConfirm.addEventListener('input', passwordConfirmHandler)
elements.submitButton.addEventListener('click', submitHandler)