import { FormElement, FormElementAttrs } from "./FormElement";

export interface TextFieldAttrs extends FormElementAttrs {
  type: "string";
  maxLength?: number;
  minLength?: number;
}

export class TextField extends FormElement {

  constructor(id?: string) {
    super("input");

    /* istanbul ignore else */
    if (id) { this.element.setAttribute("id", id); }
  }

  public setAttributes = (attributes: TextFieldAttrs): TextField => {
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
