import FormField from './FormField';

export default class Button extends FormField {
  createComponent() {
    this.component = document.createElement('button');
    this.component.classList.add(this.attributes.class);
    this.component.textContent = this.attributes.text;
  }
}
