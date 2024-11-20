import ImagesApiService from "./js/images-service";

const imagesApiService = new ImagesApiService();

const list = document.querySelector('.list');
const loadMore = document.querySelector('.load-more__btn');

loadImages();

loadMore.addEventListener('click', onLoadMore);

function loadImages() {
    imagesApiService
        .fetchImages()
        .then(images => renderImages(images))
        .catch(error => console.log(error));
}

function renderImages(images) {
    const markUp = images.map(image => {
        return `
        <li class="item">
            <img src="${image.largeImageURL}" alt="${image.type}" />
            <p class="user">User: ${image.user}</p>
            <p class="likes">Likes: ${image.likes}</p>
            <p class="comments">Comments: ${image.comments}</p>
        </li>
        `;
    }).join('');

    list.insertAdjacentHTML('beforeend', markUp);
}

function onLoadMore() {
    loadImages();
}