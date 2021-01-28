import FormField from './FormField';

export default class Select extends FormField {
  constructor(attributes) {
    super(attributes);
    this.fillOptions();
  }

  createComponent() {
    const { name, label, disabled } = this.attributes;
    this.component = document.createElement('div');
    this.component.classList.add(this.attributes.class);

    this.input = document.createElement('select');
    this.input.name = name;
    this.component.appendChild(this.input);

    if (label) {
      this.addLabel(label);
    }
    if (disabled) {
      this.component.disabled = true;
    }
  }

  fillOptions() {
    const { options } = this.attributes;
    options.forEach((option) => {
      const { value, text, selected } = option;
      const optionComponent = document.createElement('option');

      optionComponent.value = value;
      optionComponent.textContent = text;
      if (selected) {
        optionComponent.selected = true;
      }

      this.input.appendChild(optionComponent);
    });
  }
}
