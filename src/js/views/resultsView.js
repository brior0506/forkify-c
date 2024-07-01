import View from './view';
import icons from 'url:../../img/icons.svg';
import previewVeiw from './previewVeiw';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `no recipes found for your query. Please try again`;
  _message = '';

  _generateMarkup() {
    return this._data
      .map(results => previewVeiw.render(results, false))
      .join('');
  }
}

export default new ResultsView();
