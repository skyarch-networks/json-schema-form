import { ITextFieldAttributes, TextField } from "./TextField";

interface ISchema {
  $schema: string;
  type: string;
  properties: {
    [key: string]: ITextFieldAttributes;
  };
  required?: string[];
}

class JSONSchemaForm {

  public elements: any = {};
  private container: HTMLFormElement;
  private schema: ISchema;

  constructor(container: HTMLFormElement, schema: ISchema) {
    this.container = container;
    this.schema = schema;

    this.parseSchema();
  }

  public render = (): void => {
    Object.keys(this.elements).map((elementName: string) => {
      this.container.appendChild(this.elements[elementName].render());
    });
  }

  private parseSchema = (): void => {
    /**
     * The "properties" of the JSON Schema will be used to generate to form controls.
     * The object keys will be the element names that can be used to by the users to
     * individually access those elements later on.
     */
    Object.keys(this.schema.properties).map((elementName: string) => {
      const element = this.schema.properties[elementName];
      /**
       * Feed each element to this.elements
       */
      switch (element.type) {
        case "string":
          this.elements[elementName] = new TextField().setAttributes(element);
          break;
      }
    });
  }

}

export default JSONSchemaForm;
