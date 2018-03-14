import TextField from "./TextField";

class JSONSchemaForm {

  private CONTAINER: HTMLFormElement;
  private SCHEMA: object;
  private DATA: object;

  constructor(container: HTMLFormElement, schema: object = {}, data: object = {}) {
    this.CONTAINER = container;
    this.SCHEMA = schema;
    this.DATA = data;
  }

  public render = (): void => {
    // const span = document.createElement("span");
    // const text = document.createTextNode("Hello");
    // span.appendChild(text);
    // this.CONTAINER.appendChild(span);
    // const test: HTMLElement = new TextField().setPlaceholder("test placeholder").render();
    this.CONTAINER.appendChild(new TextField().setPlaceholder("test placeholder").render());
  }

  private logError = (error: string): void => {
    console.error(error);
  }

}

export default JSONSchemaForm;
