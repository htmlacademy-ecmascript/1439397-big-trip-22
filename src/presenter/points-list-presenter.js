import { render } from '../render.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';

export default class PointsListPresenter {
  pointsListComponent = new PointListView();

  getPointComponent() {
    return new PointView();
  }

  constructor({ pointsListContainer }) {
    this.pointsListContainer = pointsListContainer;
  }

  initPointList() {
    render(this.pointsListComponent, this.pointsListContainer);
  }

  initPoint() {
    render(this.getPointComponent(), this.pointsListContainer.lastElementChild);
  }
}


