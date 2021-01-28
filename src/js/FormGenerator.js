/* eslint-disable class-methods-use-this */

import TextareaField from './components/TextareaField';
import Filler from './components/Filler';
import TextField from './components/TextField';
import Checkbox from './components/Checkbox';
import Button from './components/Button';
import Select from './components/Select';
import Radio from './components/Radio';

export default class FormGenerator {
  constructor({ form }) {
    this.name = form.name;
    this.postmessage = form.postmessage;
    this.items = form.items;
    this.container = document.getElementById('container');
    this.form = null;
    this.componentsList = [];
    this.postmessageEl = null;
  }

  init() {
    this.createForm();
    this.createFormComponents();
  }

  createForm() {
    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.form.name = this.name;
    this.container.appendChild(this.form);
  }

  createFormComponents() {
    const list = this.items.map((item) => this.createField(item));
    this.componentsList = list.filter((item) => item !== null);
    this.componentsList.forEach((item) => this.form.appendChild(item.component));
  }

  createField(item) {
    switch (item.type) {
      case 'filler':
        return new Filler(item);
      case 'button':
        return new Button(item);
      case 'text':
        return new TextField(item);
      case 'textarea':
        return new TextareaField(item);
      case 'checkbox':
        return new Checkbox(item);
      case 'select':
        return new Select(item);
      case 'radio':
        return new Radio(item);
      default:
        return null;
    }
  }
}
