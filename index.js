const popupImg = document.getElementById('ant-carousel-element');
const scaleImg = document.querySelector('js-scale-photo');

function openModal(val) {
    val.classList.add('popup_opened');
}

//открытие попапа с картинкой
function scalePhoto(evt) {
    openModal(popupImg);
    scaleImg.src = evt.target.src;
  }