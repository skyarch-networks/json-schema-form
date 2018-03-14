import FormElement from "./FormElement";

class TextField extends FormElement {

  constructor() {
    super("input");
  }

  public setPlaceholder = (text: string): TextField => {
    this.element.setAttribute("placeholder", text);
    return this;
  }

}

export default TextField;
