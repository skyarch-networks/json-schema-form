export interface FormElementAttrs {
  description?: string;
  title?: string;
}

export abstract class FormElement {

  protected element: HTMLElement;

  constructor(tagName: string) {
    this.element = document.createElement(tagName);
  }

  public render = (): HTMLElement => {
    return this.element;
  }

}
