import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")

const galleryMarkUp = galleryItems.map((element) => 
    `<a class="gallery__item" href="${element.original}">
        <img class="gallery__image" src="${element.preview}" 
         alt="${element.description}" />
    </a>`   
).join(''); 

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);
let gallery = new SimpleLightbox('.gallery a', 
{ captionsData: "alt", captionPosition: "bottom", captionDelay: 250 } );


gallery.on('show.simplelightbox', function (e) {});

console.log(galleryItems);
