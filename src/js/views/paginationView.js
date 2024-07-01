import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlreclick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //Page 1, and there are other pages

    if (curPage === 1 && numPages > 1) {
      return this._refactorNextBtn(curPage);
    }
    //last page
    if (curPage === numPages && numPages > 1) {
      return this._refactorPrevBtn(curPage);
    }
    //other page
    if (curPage < numPages) {
      return this._refactorPrevBtn(curPage) + this._refactorNextBtn(curPage);
    }
    //Page 1, and there are no other pages
    return '';
  }

  _refactorPrevBtn(curPage) {
    return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
    `;
  }
  _refactorNextBtn(curPage) {
    return `
          <button data-goto="${
            curPage + 1
          }"class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
    `;
  }
}

export default new PaginationView();
