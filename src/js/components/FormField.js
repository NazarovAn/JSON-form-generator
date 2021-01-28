import { nanoid } from 'nanoid';

export default class FormField {
  constructor({ attributes }) {
    this.attributes = attributes;
    this.component = null;
    this.input = null;
    this.createComponent();
  }

  addLabel(labelText, alternativeNode) {
    const label = document.createElement('label');
    label.textContent = labelText;

    const id = nanoid();
    label.htmlFor = id;
    this.input.id = id;

    if (alternativeNode) {
      return alternativeNode.insertAdjacentElement('afterbegin', label);
    }

    return this.component.insertAdjacentElement('afterbegin', label);
  }
}
