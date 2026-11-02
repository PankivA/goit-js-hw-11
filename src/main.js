import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const query = formData.get('search-text').trim();
    form.reset();
    clearGallery();
    if (!query) {
        return;
    }
    showLoader();
    getImagesByQuery(query)
        .then((data) => {
            if (data.hits.length) {
                createGallery(data.hits);
            } else {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            }
        })
        .catch(() => {
            iziToast.error({
                message: 'Something went wrong. Please try again!',
            });
        })
        .finally(hideLoader);
}