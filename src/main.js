import NewsApiService from "./js/new-service";

const form = document.getElementById('form');
const button = document.getElementById('load-more__btn');
const list = document.getElementById('list');

const newsApiService = new NewsApiService();

form.addEventListener('submit', onSearch);
button.addEventListener('click', onLoadMore);

function onSearch(e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.query.value;

    newsApiService.resetPage();
    newsApiService.fetchArticles().then(renderNews);
}

function onLoadMore() {
    newsApiService.fetchArticles().then(renderNews);
}

function renderNews(articles) {
    const markup = articles.map(article => {
        return `
        <li>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${article.urlToImage}" alt="" width="480">
                <h2>${article.title}</h2>
                <p>Posted by: ${article.author}</p>
                <p></p>
            </article>
            </a>
        </li>
        `
    }).join('');

    list.insertAdjacentHTML('beforeend', markup);
}