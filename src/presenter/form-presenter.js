import { render } from '../render.js';
import FormView from '../view/form-view.js';

export default class FormViewPresenter {
  formComponent = new FormView();

  constructor({ formContainer }) {
    this.formContainer = formContainer;
  }

  init() {
    render(this.formComponent, this.formContainer);
  }
}
