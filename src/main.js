const API_KEY = '04f715244097a0c4a22752c3612f0538';
const BASE_URL = `https://api.themoviedb.org/3`;

const list = document.querySelector('.list');

fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(response => {
    if (!response.ok) {
        throw new Error('error');
    }
    return response.json();
}).then(data => renderMovies(data.results.slice(0, 5)))
    .catch(error => console.log(error));

function renderMovies(movies) {
    const markUp = movies.map(movie => {
        // const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

        return `
    <li class='thumb'>
    <img src='https://image.tmdb.org/t/p/w500/${movie.poster_path}' alt='poster' width='200'>
        <h2>${movie.original_title}</h2>
        <p>Original language: ${movie.original_language}</p>
        <p>Release date: ${movie.release_date}</p>
        <p>Origin country: ${movie.origin_country}</p>
    </li>
    `;
    }).join('');

    list.insertAdjacentHTML('beforeend', markUp);
}