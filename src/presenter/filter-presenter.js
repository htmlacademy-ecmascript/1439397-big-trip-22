import FilterView from '../view/filter-view.js';
import { render } from '../render.js';

export default class FilterPresenter {
  filterComponent = new FilterView();

  constructor({ filterContainer }) {
    this.filterContainer = filterContainer;
  }

  init() {
    render(this.filterComponent, this.filterContainer,);
  }
}
