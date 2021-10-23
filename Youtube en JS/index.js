const json = JSON.stringify(
  [

    {
      "title": "L'intelligence Artificielle - Reportage Sur L'avancée Technologique",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "Tasty Time",
      "channelImage": "images/youtube-channel-profil-image/sananas.jpg",
      "image": "images/video-miniatures/sananas.jpg"
    },
    {
      "title": "Cauchemar sur ARTE : Silicon Valley, Empire du Futur",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "Top Docus",
      "channelImage": "images/youtube-channel-profil-image/musicfeeling.jpg",
      "image": "images/video-miniatures/musicfeeling.jpg"
    },
    {
      "title": "VOICI À QUOI RESSEMBLERA LE MONDE EN 2050 !",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "aTech",
      "channelImage": "images/youtube-channel-profil-image/Loic.jpg",
      "image": "images/video-miniatures/loic.jpg"
    },
    {
      "title": "FRANCE 24 EN DIRECT : info et actualités internationales en continu 24h/24h",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "FRANCE 24",
      "channelImage": "images/youtube-channel-profil-image/elle.jpg",
      "image": "images/video-miniatures/elle.jpg"
    },
    {
      "title": "Découverte du Monde - Café, l'or du Kenya",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "Arte",
      "channelImage": "images/youtube-channel-profil-image/Lucile.jpg",
      "image": "images/video-miniatures/lucile.jpg"
    },
    {
      "title": "Documentaire sur Tokyo",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "ONLY JAPAN !",
      "channelImage": "images/youtube-channel-profil-image/arte.jpg",
      "image": "images/video-miniatures/arte.jpg"
    },
    {
      "title": "Les Mystère de L'intelligence Artificielle",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "YT Clips",
      "channelImage": "images/youtube-channel-profil-image/marion.jpg",
      "image": "images/video-miniatures/marion.jpg"
    },
    {
      "title": "Documentaire 2020 - Voyager Au-Delà de Pluton",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "Tasty Time",
      "channelImage": "images/youtube-channel-profil-image/vogue.jpg",
      "image": "images/video-miniatures/vogue.jpg"
    },
    {
      "title": "L'intelligence Artificielle - Reportage Sur L'avancée Technologique",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "Tasty Time",
      "channelImage": "images/youtube-channel-profil-image/sananas.jpg",
      "image": "images/video-miniatures/sananas.jpg"
    },
    {
      "title": "Cauchemar sur ARTE : Silicon Valley, Empire du Futur",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "Top Docus",
      "channelImage": "images/youtube-channel-profil-image/musicfeeling.jpg",
      "image": "images/video-miniatures/musicfeeling.jpg"
    },
    {
      "title": "VOICI À QUOI RESSEMBLERA LE MONDE EN 2050 !",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "aTech",
      "channelImage": "images/youtube-channel-profil-image/Loic.jpg",
      "image": "images/video-miniatures/loic.jpg"
    },
    {
      "title": "FRANCE 24 EN DIRECT : info et actualités internationales en continu 24h/24h",
      "details": "84 k vues : il y a 2 jours",
      "channelTitle": "FRANCE 24",
      "channelImage": "images/youtube-channel-profil-image/elle.jpg",
      "image": "images/video-miniatures/elle.jpg"
    }
  ])

const delay = milliseconds => new Promise(response => setTimeout(response, milliseconds))
const videos = JSON.parse(json)
const videoContainer = document.querySelector(".video-container")
const generateVideo = (video) =>
{

  let videoElement = document.createElement("div")
  videoElement.className = 'video-element'
  videoElement.innerHTML = `
    <img src=${video.image} />
    <div class="youtube-image-profil-image-container">
        <img class="youtube-channel-profil-image" src=${video.channelImage} />
      </div>
      <div class="video-title">${video.title}</div>
      <div class="channel-title">${video.channelTitle}</div>
      <div class="video-details">${video.details}</div>`


  videoContainer.append(videoElement)
}
const generateVideos = () =>
{
    for (let i = 0; i < videos.length; i++)
        delay(i * 500).then(() => generateVideo(videos[i]))
}

generateVideos()





