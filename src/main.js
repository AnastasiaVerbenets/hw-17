import MovieApiService from "./js/movies-service";

const movieApiService = new MovieApiService();

const list = document.querySelector('.list');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

loadMovies();

prevBtn.addEventListener('click', onPrevPage);
nextBtn.addEventListener('click', onNextPage);

function loadMovies() {
    movieApiService
        .fetchMovies()
        .then(movies => renderMovies(movies.slice(0, 9)))
        .catch(error => console.log(error));
}

function renderMovies(movies) {
    const markUp = movies.map(movie => {
        return `
    <li class='thumb'>
    <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='${movie.title}' width='400'>
        <h2>${movie.original_title}</h2>
        <p>Original language: ${movie.original_language}</p>
        <p>Release date: ${movie.release_date}</p>
        <p>Origin country: ${movie.origin_country}</p>
    </li>
    `;
    }).join('');

    list.insertAdjacentHTML('beforeend', markUp);
}

function onPrevPage() {
    movieApiService.decrementPage();
    clear();
    loadMovies();
    toggleBtn();
}

function onNextPage() {
    movieApiService.incrementPage();
    clear();
    loadMovies();
    toggleBtn();
}

function clear() {
    list.innerHTML = '';
}

function toggleBtn() {
    prevBtn.disabled = movieApiService.page <= 1;
}