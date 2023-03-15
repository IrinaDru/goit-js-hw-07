import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
const cardsMarkup = creatGalleryCardsMarkup(galleryItems); 


imgContainer.insertAdjacentHTML('beforeend', cardsMarkup); 

// console.log(creatGalleryCardsMarkup(galleryItems));


imgContainer.addEventListener('click', onImgContainerClick);


function creatGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, description, original }) => {
return `
    <div class="gallery__item">
    <a class="gallery__link" href="#">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      
    </a>
  </div>
    `;
}).join('');

};

document.querySelector('.gallery').onclick = (evt) => {

    if (!evt.target.dataset.source) {
        return;
    } else {

        basicLightbox.create(`
        <img src="${evt.target.dataset.source}">
        `).show()
    };
};

function onImgContainerClick (evt) {
    if (!evt.target.classList.contains('.gallery__item')) {
        return;
    }
    
console.log(evt.target.dataset.source);
};

// imgContainer.addEventListener('keydown', (evt) => {
//     if (evt.code === "Escape") {
        
//     }
// })
