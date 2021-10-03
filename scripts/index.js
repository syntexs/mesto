let profile = document.querySelector('.profile');

const addCardPopup = document.querySelector('.popup_type_add-card');
let popup = document.querySelector('.popup_type_edit-profile');

let popupCloseButton = document.querySelector('.popup__close');
const addImagePopupCloseButton = addCardPopup.querySelector('.popup__close');

let profileEditButton = profile.querySelector('.profile__edit-button');
let inputName = document.querySelector('.popup__input_type_name');
let inputSpec = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileDesc = document.querySelector('.profile__description');
let form = popup.querySelector('.popup__form');
let submitButton = document.querySelector('.popup__submit');


const addImageButton = document.querySelector('.profile__add-button');




function togglePopup(popup) {
  if(!popup.classList.contains('popup_opened')) {
    inputName.value = profileName.textContent;
    inputSpec.value = profileDesc.textContent;
  }
  popup.classList.toggle('popup_opened');
}


profileEditButton.addEventListener('click', () => {
  togglePopup(popup);
});
popupCloseButton.addEventListener('click', () => {
  togglePopup(popup);
});
addImageButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});
addImagePopupCloseButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});


function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputSpec.value;
  togglePopup(popup);

}
form.addEventListener('submit', formSubmitHandler);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card-template').content;


initialCards.forEach((data) => {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__name');
  const cardLikeButton = cardElement.querySelector('.elements__like');
  const cardDeleteButton = cardElement.querySelector('.elements__delete');


  cardTitle.textContent=data.name;
  cardImage.src=data.link;

  const elements = document.querySelector('.elements');

  elements.prepend(cardElement);
});


