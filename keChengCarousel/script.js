const splideList = document.querySelector('.splide__list')
const basePath = './public/images/'
const photoFileNames = [
  'forecast_history.png',
  'rainy_day_home.jpg',
  'forecast.png',
  'store_sign_1.png',
  'burger_6.jpg',
  'burger_trick.jpg',
  'chicken_sandwich.png',
  'pickles.jpg',
  'fried_pickles.png',
  'oatmeal_1.jpg',
  'oatmeal_3.jpg',
  'cafe_1.jpg',
]

function getPhotoFileNames() {
  //return ['burger_1.jpg', 'burger_2.jpg']
}

function populateCarousel() {
  //const photoFileNames = getPhotoFileNames()

  photoFileNames.forEach((fileName) => {
    fileName = basePath.concat(fileName)
    const listItem = document.createElement('li')
    const image = document.createElement('img')
    listItem.setAttribute('class', 'splide__slide')
    image.setAttribute('src', fileName)
    listItem.appendChild(image)
    splideList.appendChild(listItem)
  })
}

populateCarousel()

