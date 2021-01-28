import FormField from './FormField';

export default class Filler extends FormField {
  createComponent() {
    this.component = document.createElement('p');
    this.component.textContent = this.attributes.message;
  }
}
