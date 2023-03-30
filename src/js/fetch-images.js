import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '34854696-76f476cf77bb49d9dc3b4708b';

async function fetchImages(q, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  );
  return response;
}
