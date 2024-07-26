const splideList = document.querySelector('.splide__list')

function getPhotoFileNames() {
  return [
    'burger_combo_0.png',
    'burger_1.jpg',
    'burger_2.jpg',
    'chicken_sandwich.png',
    'chik_fil_a_0.png',
  ]
}

function populateCarousel() {
  const photoFileNames = getPhotoFileNames()
  const basePath = './images/'

  photoFileNames.forEach((fileName) => {
    const filePath = basePath.concat(fileName)
    const listItem = document.createElement('li')
    const image = document.createElement('img')
    listItem.setAttribute('class', 'splide__slide')
    image.setAttribute('src', filePath)
    listItem.appendChild(image)
    splideList.appendChild(listItem)
  })
}

populateCarousel()

