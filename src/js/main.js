import refs from './refs.js'; //импорт доступов
import apiService from './apiService.js'; // импорт объекта с логикой для АПИ
import updatesImageMarcup from './updatesImageMarcup.js'; // импорт функции для отрисовки страницы по шаблону
import { notificationAlert, notificationError } from './notification.js';

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
    return notificationAlert('Please enter your search query!');
  }

  listRef.innerHTML = ''; //перерисовываем всю страницу с результатами при каждом новом запросе
  form.reset(); //очищаем форму после того, как отправили запрос в поиске

  apiService.resetPage(); //сбрасываем page на первую страницу перед каждым новым запросом поиска

  disabledBtnLoadMore();
  // loadMoreBtnSpinner.classList.remove('is-hidden');

  updateFetchImages();
});

loadMoreBtn.addEventListener('click', () => {
  disabledBtnLoadMore();
  updateFetchImages();
});

function disabledBtnLoadMore() {
  loadMoreBtn.disabled = true;
  loaMoreBtnLabel.textContent = 'Loading...';
}

function enabledBtnLoadMore() {
  loadMoreBtn.disabled = false;
  loaMoreBtnLabel.textContent = 'Load more';
}

function updateFetchImages() {
  apiService.fetchImages().then(hits => {
    if (hits.length === 0) {
      return notificationError('Please, enter the correct request data');
    }
    updatesImageMarcup(hits);
    loadMoreBtn.classList.remove('is-hidden');
    if (hits.length < 12) {
      loadMoreBtn.classList.add('is-hidden');
    }
    enabledBtnLoadMore();
    // loadMoreBtnSpinner.classList.add('is-hidden');
      winScroll();
  });
}

function winScroll() {
  window.scrollTo({
    top: document.documentElement.scrollHeight - 1200, //страница будет проматывать на начало загруженных изображений
    behavior: 'smooth',
  });
}
