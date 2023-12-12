import FormView from '../view/form.js';
import { render } from '../render.js';

export default class FormViewPresenter {
  formComponent = new FormView();

  constructor({ formContainer }) {
    this.formContainer = formContainer;
  }

  init() {
    render(this.formComponent, this.formContainer);
  }
}
