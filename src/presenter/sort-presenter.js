import SortView from '../view/sort-view.js';
import { render } from '../render.js';

export default class SortPresenter {
  sortComponent = new SortView();

  constructor({ sortContainer }) {
    this.sortContainer = sortContainer;
  }

  init() {
    render(this.sortComponent, this.sortContainer);
  }
}
