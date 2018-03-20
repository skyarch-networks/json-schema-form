import { FormElement, FormElementAttrs } from "./FormElement";

export interface ButtonAttrs extends FormElementAttrs {
  type: "button";
  disabled?: boolean;
}

export class Button extends FormElement {

  constructor() {
    super("button");
  }

}
