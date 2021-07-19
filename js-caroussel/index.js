const imageContainer = document.querySelector('.image-container')
let previousButton = document.querySelector('.previous')
let nextButton = document.querySelector('.next')
let index = 0
const json = JSON.stringify(
[
    {
        "image": "images/image1.jpg",
        "title": "Le cerf",
        "description": "Un cerf se baladant dans la forêt"
    },
    {
        "image": "images/image2.jpg",
        "title": "Le ciel",
        "description": "Le ciel une journée de printemps"
    },
    {
        "image": "images/image3.jpg",
        "title": "Un renard",
        "description": "Ce renard avait des yeux flamboyants"
    },
    {
        "image": "images/image4.jpg",
        "title": "Le lac",
        "description": "Ce lac se situe à Annecy"
    },
    {
        "image": "images/image5.jpg",
        "title": "Une vague",
        "description": "Cette vague était d'une puissance incroyable"
    }
])
const images = JSON.parse(json)

const hideAllImageElements = () =>
{
    for (let image of imageElements)
        image.classList.add('hidden')
}

const showImageElement = (index) =>
{
    let imageGalery = imageElements[index]
    imageGalery.classList.remove('hidden')
}

const clickImageGalerys = () =>
{
    updateIndex()
    hideAllImageElements()
    showImageElement(index)
}

const updateIndex = () =>
{
    ++index

    if (index === imageElements.length)
        index = 0
}

const generateImage = () =>
{
    for (let image of images)
    {
        let imageElement = document.createElement("div")
     
        imageElement.className = "image-element"
        imageElement.innerHTML = `
            <img class="image-galery" src=${image.image} />
            <div class="image-title">${image.title}</div>
            <div class="image-description">${image.description}</div>`

        imageContainer.append(imageElement)
    }
}
  
generateImage()

let imageElements = document.querySelectorAll('.image-element')

hideAllImageElements()
showImageElement(index)

nextButton.addEventListener('click', () => clickImageGalerys())
previousButton.addEventListener('click', () => clickImageGalerys())


    