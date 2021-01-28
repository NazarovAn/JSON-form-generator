import FormField from './FormField';

export default class Checkbox extends FormField {
  createComponent() {
    const {
      name, required, disabled, value, label, checked,
    } = this.attributes;

    this.component = document.createElement('div');
    this.component.classList.add(this.attributes.class);

    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.input.name = name;
    this.input.checked = checked;
    this.component.appendChild(this.input);

    if (label.length) {
      this.addLabel(label);
    }
    if (required) {
      this.component.required = true;
    }
    if (disabled) {
      this.component.disabled = true;
    }
    if (value) {
      this.component.value = this.attributes.value;
    }
  }
}
