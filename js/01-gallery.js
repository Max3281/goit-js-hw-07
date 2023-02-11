import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgContainer = document.querySelector(".gallery"); //Выбираю селектор галереи
const imgMarkup = createImgCardMarkup(galleryItems); //Переменная вызова функции создания шаблонов

imgContainer.insertAdjacentHTML("beforeend", imgMarkup); //Созадание разметки

function createImgCardMarkup(galleryItems) {
  const imgCardUnit = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
  const instance = basicLightbox.create(`
    <img src="${evt.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", onEscPress, { once: true });

  function onEscPress(evt) {
    const ESC_KEY = "Escape";
    if (evt.code === ESC_KEY) {
      instance.close();
      console.log("its still working");
    }
  }
}
