import EditFormView from '../view/edit-form-view.js';
import PointListView from '../view/point-list-view.js';
import { render, RenderPosition } from '../render.js';

export default class EditFormViewPresenter {
  editFormComponent = new EditFormView();
  pointsListComponent = new PointListView();

  constructor({ editFormContainer }) {
    this.editFormContainer = editFormContainer;
  }

  init() {
    render(this.editFormComponent, this.editFormContainer.lastElementChild, RenderPosition.AFTERBEGIN);
  }
}
