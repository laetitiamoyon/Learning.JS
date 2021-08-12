let image = document.querySelector('img')
let input = document.querySelector('input')

const uploadImage = () =>
{
    let file = input.files[0]

    if (!file) return
    if (/\.(jpe?g|png|gif)$/i.test(file.name))
    {
        var reader = new FileReader();
    
        reader.addEventListener("load", loadEvent => image.src = loadEvent.target.result)
        reader.readAsDataURL(file)
    }
}

document.addEventListener('change', uploadImage)