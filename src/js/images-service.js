const API_KEY = '47021183-57cb9b4788280b138c9bad41f';
const BASE_URL = 'https://pixabay.com/api/';


export default class ImagesApiService {
    constructor() {
        this.page = 1;
    }

    fetchImages() {
        //    &colors=blue&orientation="horizontal"`;
        const url = `${BASE_URL}key=${API_KEY}&editors_choice=true&page=${this.page}&per_page=3`;

        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(error);
            }

            response.json();

        }).then(({ hits }) => {
            this.incrementPage();
            return hits;
        });

    }

    incrementPage() {
        this.page += 1;
    }

}