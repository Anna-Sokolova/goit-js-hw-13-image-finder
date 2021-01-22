const apiKey = '19909121-fe72a6a4c0f185ae96ac43b20';

function fetchImages(searchQuery) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.hits);
      return data.hits;
    })
    .catch(error => console.log(error));
}

export default fetchImages;
