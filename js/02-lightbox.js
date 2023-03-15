import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const imgContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems); 

imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// console.log(creatGalleryCardsMarkup(galleryItems));


imgContainer.addEventListener('click', onImgContainerClick);


function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, description, original }) => {
return `
<a class="gallery__item" 
href="${original}">
<img class="gallery__image" 
src="${preview}" 
alt="${description}" />
</a>
    `;
}).join('');

};

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});


function onImgContainerClick (evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('.gallery__item')) {
        return;
    }


const imageUrl = evt.target.getAttribute('src');
const instance = basicLightbox.create(`
<img src="${imageUrl}" width="800" height="600">
`);
instance.show();
}


