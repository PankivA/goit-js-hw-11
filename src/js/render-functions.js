import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
    const markup = images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
  <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}">
  </a>
  <ul class="info">
    <li><span class="info-name">Likes:</span> ${likes}</li>
    <li><span class="info-name">Views:</span> ${views}</li>
    <li><span class="info-name">Comments:</span> ${comments}</li>
    <li><span class="info-name">Downloads:</span> ${downloads}</li>
  </ul>
</li>`;
    }).join('');
    gallery.innerHTML = markup;
    lightbox.refresh();
}
    
export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}