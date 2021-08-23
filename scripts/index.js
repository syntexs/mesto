let profile = document.querySelector('.profile');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let profileEditButton = profile.querySelector('.profile__edit-button');
let inputName = document.querySelector('.popup__input_type_name');
let inputSpec = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__description');
let form = document.querySelector('.popup__form');
let submitButton = document.querySelector('.popup__submit');



function togglePopup() {
  if(!popup.classList.contains('popup_opened')) {
    inputName.value = profileName.textContent;
    inputSpec.value = profileDesc.textContent;
  }
  popup.classList.toggle('popup_opened');
}


profileEditButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);


function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputSpec.value;
  submitButton.addEventListener('click', togglePopup);

}
form.addEventListener('submit', formSubmitHandler);

