import { FormElement, FormElementAttrs } from "./FormElement";

export interface ButtonAttrs extends FormElementAttrs {
  type: "button";
  disabled?: boolean;
}

export class Button extends FormElement {

  constructor(id?: string) {
    super("button");

    /* istanbul ignore else */
    if (id) { this.element.setAttribute("id", id); }
  }

}
