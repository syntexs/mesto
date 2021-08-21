let profile = document.querySelector('.profile');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let profileEditButton = profile.querySelector('.profile__edit-button');


function openPopup() {
  popup.classList.add('popup_opened');
}
function closePopup() {
  popup.classList.remove('popup_opened');
}


profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
