import refs from './refs.js'; //импорт доступов
import apiService from './apiService.js'; // импорт объекта с логикой для АПИ
import updatesImageMarcup from './updatesImageMarcup.js'; // импорт функции для отрисовки страницы по шаблону
const {
  listRef,
  searchForm,
  loadMoreBtn,
  loaMoreBtnLabel,
  loadMoreBtnSpinner,
} = refs; //деструк рефов

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget; //доступ к форме
  apiService.query = form.elements.query.value; //доступ к значению инпута в форме
  // console.log(form, inputValue);

  if (!apiService.query) {
    //не отправляем на АПИ пустой запрос
    return alert('Please enter your search query!');
  }

  listRef.innerHTML = ''; //перерисовываем всю страницу с результатами при каждом новом запросе
  form.reset(); //очищаем форму после того, как отправили запрос в поиске

  apiService.resetPage(); //сбрасываем page на первую страницу перед каждым новым запросом поиска

  loadMoreBtn.disabled = true;
  loaMoreBtnLabel.textContent = 'Loading...';
  // loadMoreBtnSpinner.classList.remove('is-hidden');


  apiService.fetchImages().then(hits => {
    updatesImageMarcup(hits);
    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.disabled = false;
    loaMoreBtnLabel.textContent = 'Load more';
    // loadMoreBtnSpinner.classList.add('is-hidden');
  });
});

loadMoreBtn.addEventListener('click', () => {
  loadMoreBtn.disabled = true;
  loaMoreBtnLabel.textContent = 'Loading...';
  apiService.fetchImages().then(hits => {
    updatesImageMarcup(hits);
    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.disabled = false;
    loaMoreBtnLabel.textContent = 'Load more';
    // loadMoreBtnSpinner.classList.add('is-hidden');
    // console.dir(document.documentElement);
    // console.dir(document.documentElement.scrollHeight);
    // console.dir(document.documentElement.scrollHeight - 3000);
    window.scrollTo({
      top: document.documentElement.scrollHeight - 2100, //страница будет проматывать на начало загруженных изображений
      behavior: 'smooth',
    });
  });
});
