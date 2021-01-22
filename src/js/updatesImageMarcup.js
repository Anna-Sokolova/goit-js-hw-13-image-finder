import imgTpl from '../templates/marcupForImg.hbs';
import refs from './refs.js';
const { listRef } = refs;

function updatesImageMarcup(hits) {
  const marcup = imgTpl(hits);
  listRef.insertAdjacentHTML('beforeend', marcup);
}

export default updatesImageMarcup;