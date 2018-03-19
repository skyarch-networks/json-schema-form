export interface ITextFieldAttributes {
  title?: string;
  type: string;
  description?: string;
  maxLength?: number;
  minLength?: number;
}

import FormElement from "./FormElement";

export class TextField extends FormElement {

  constructor() {
    super("input");
  }

  public setAttributes = (attributes: ITextFieldAttributes): TextField => {
    /* istanbul ignore else */
    if (attributes.title) { this.element.setAttribute("title", attributes.title); }
    /* istanbul ignore else */
    if (attributes.description) { this.element.setAttribute("placeholder", attributes.description); }
    /* istanbul ignore else */
    if (attributes.maxLength) { this.element.setAttribute("maxLength", attributes.maxLength.toString()); }
    /* istanbul ignore else */
    if (attributes.minLength) { this.element.setAttribute("minLength", attributes.minLength.toString()); }
    return this;
  }

}
