import EditFormView from '../view/edit-form-view.js';
import RenderPosition from '../render.js';
import { render } from '../render.js';

export default class EditFormViewPresenter {
  editFormComponent = new EditFormView();

  constructor({ editFormContainer }) {
    this.editFormContainer = editFormContainer;
  }

  init() {
    render(this.editFormComponent, this.editFormContainer.lastElementChild);
  }
}
