import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgContainer = document.querySelector(".gallery"); //Выбираю селектор галереи
const imgMarkup = createImgCardMarkup(galleryItems); //Переменная вызова функции создания шаблонов

imgContainer.insertAdjacentHTML("beforeend", imgMarkup); //Созадание разметки

function createImgCardMarkup(galleryItems) {
  const imgCardUnit = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join("");
  return imgCardUnit;
}

imgContainer.addEventListener("click", onImgClick); //Прослушиватель на изображение, он же вызов модального окна

function onImgClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});
