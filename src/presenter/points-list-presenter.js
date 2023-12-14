import { render } from '../render.js';
import PointView from '../view/point-view.js';
import PointListView from '../view/point-list-view.js';
import EditFormView from '../view/edit-form-view.js';

export default class PointsListPresenter {
  constructor({ pointsListContainer }) {
    this.pointsListContainer = pointsListContainer;
    this.pointsContainer = new PointListView();
  }

  initPointList() {
    render(this.pointsContainer, this.pointsListContainer);
    render(new EditFormView(), this.pointsContainer.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsContainer.getElement());
    }
  }
}


