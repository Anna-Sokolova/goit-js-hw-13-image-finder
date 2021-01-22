import refs from './refs.js';
import fetchImages from './apiService.js';
import updatesImageMarcup from './updatesImageMarcup.js';
const { listRef, searchForm } = refs;
// console.log(searchForm);

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  // console.log(form, inputValue);

  if (!inputValue) {
    return alert('Please enter your search query!');
  }

  listRef.innerHTML = '';
  form.reset();

  fetchImages(inputValue).then(updatesImageMarcup);
});
