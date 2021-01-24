const apiKey = '19909121-fe72a6a4c0f185ae96ac43b20';
const baseUrl = 'https://pixabay.com/api/';

export default {
  inputValue: '',
  page: 1,
  fetchImages() {
    const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data.hits);

        this.page += 1;
        return data.hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    return (this.searchQuery = value);
  },
};
