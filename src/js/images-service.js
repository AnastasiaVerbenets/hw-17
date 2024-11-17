const API_KEY = '47021183-57cb9b4788280b138c9bad41f';
const BASE_URL = `https://pixabay.com/api`;

export default class ImagesApiService {
    constructor() {
        this.page = 1;
    }

    fetchImages() {
        const url = `${BASE_URL}?key=${API_KEY}&page=${this.page}&image_type=photo&per_page=3&colors=blue&orientation=horizontal`;

        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(error);
            }

            return response.json();
        }).then(({ hits }) => { this.incrementPage(); return hits; });

    }

    incrementPage() {
        this.page += 1;
    }

}