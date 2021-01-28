import FormField from './FormField';

export default class TextField extends FormField {
  createComponent() {
    const {
      name, required, disabled, placeholder, value, label,
    } = this.attributes;

    this.component = document.createElement('div');
    this.component.classList.add(this.attributes.class);

    this.input = document.createElement('input');
    this.input.name = name;
    this.input.type = this.attributes.validationRules[0].type;
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
      this.input.placeholder = placeholder;
    }
    if (value) {
      this.input.value = value;
    }
  }
}
