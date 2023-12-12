import EditFormView from '../view/edit-form-view.js';
import { render, RenderPosition } from '../render.js';

export default class EditFormViewPresenter {
  editFormComponent = new EditFormView();

  constructor({ editFormContainer }) {
    this.editFormContainer = editFormContainer;
  }

  init() {
    render(this.editFormComponent, this.editFormContainer.lastElementChild, RenderPosition.AFTERBEGIN);
    console.log(this.editFormContainer.lastElementChild);
  }
}
