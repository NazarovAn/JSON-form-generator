import FormField from './FormField';

export default class TextareaField extends FormField {
  createComponent() {
    const {
      name, required, disabled, placeholder, value, label,
    } = this.attributes;
    this.component = document.createElement('div');
    this.component.classList.add(this.attributes.class);

    this.input = document.createElement('textarea');
    this.input.name = name;
    this.component.appendChild(this.input);

    if (label) {
      this.addLabel(label);
    }
    if (required) {
      this.input.required = true;
    }
    if (disabled) {
      this.input.disabled = true;
    }
    if (placeholder) {
      this.input.placeholder = this.attributes.placeholder;
    }
    if (value) {
      this.input.value = this.attributes.value;
    }
  }
}
