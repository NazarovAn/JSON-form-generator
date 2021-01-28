import FormField from './FormField';

export default class Radio extends FormField {
  createComponent() {
    this.component = document.createElement('div');
    this.component.classList.add(this.attributes.class);
    this.fillOptions();
  }

  fillOptions() {
    const { items } = this.attributes;
    items.forEach((option) => {
      this.createOption(option);
    });
  }

  createOption(values) {
    const { value, label, checked } = values;
    const wrapper = document.createElement('div');
    this.input = document.createElement('input');

    this.input.type = 'radio';
    this.input.name = this.attributes.name;
    this.input.value = value;
    this.input.checked = checked;
    if (this.attributes.disabled) {
      this.input.disabled = true;
    }
    wrapper.appendChild(this.input);

    if (label) {
      this.addLabel(label, wrapper);
    }

    this.component.appendChild(wrapper);
  }
}
