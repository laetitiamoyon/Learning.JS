let image = document.querySelector('img')
let input = document.querySelector('input')

const uploadImage = () =>
{
    if (!input.files || !input.files[0]) return

    let reader = new FileReader();

    reader.addEventListener("load", loadEvent => image.src = loadEvent.target.result)
    reader.readAsDataURL(input.files[0])
}

document.addEventListener('change', uploadImage)