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
    for (const elementName in this.elements) {
      /* istanbul ignore else */
      if (this.elements.hasOwnProperty(elementName)) {
        this.container.appendChild(this.elements[elementName].render());
      }
    }
  }

  private parseSchema = (): void => {
    for (const propertyName in this.schema.properties) {
      /* istanbul ignore else */
      if (this.schema.properties.hasOwnProperty(propertyName)) {
        const property = this.schema.properties[propertyName];
        switch (property.type) {
          case "string":
            this.elements[propertyName] = new TextField().setAttributes(this.schema.properties[propertyName]);
        }
      }
    }
  }

}

export default JSONSchemaForm;
