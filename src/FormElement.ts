abstract class FormElement {

  // public abstract name: string;
  // public abstract id: string;
  // public abstract class: string;
  // public abstract key: string;
  // public abstract label: string;

  protected element: HTMLElement;

  constructor(tagName: string) {
    this.element = document.createElement(tagName);
  }

  public render = (): HTMLElement => {
    return this.element;
  }

}

export default FormElement;
