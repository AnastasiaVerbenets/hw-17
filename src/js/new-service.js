export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
        const options = {
            headers: {
                Authorization: '6c3ff90be8064c3fb0b2e50b8eb13e97',
            }
        };

        return fetch(url, options).then(response => response.json()).then(data => {
            console.log(data);
            this.incrementPage();
            return data.articles;
        });
    }


    incrementPage() {
        this.page += 1;
    }


    resetPage() {
        this.page = 1;

    }

    get query() {
        return this.query;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}