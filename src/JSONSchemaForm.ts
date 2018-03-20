import { Button, ButtonAttrs } from "./Button";
import { TextField, TextFieldAttrs } from "./TextField";

// TODO: Waiting for conditional types in TypeScript 2.8
type ElementAttr = ButtonAttrs | TextFieldAttrs;

interface SchemaProps {
  $schema: string;
  type: string;
  properties: {
    [key: string]: ElementAttr;
  };
  required?: string[];
}

class JSONSchemaForm {

  public elements: any = {};
  private container: HTMLFormElement;
  private schema: SchemaProps;

  constructor(container: HTMLFormElement, schema: SchemaProps) {
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
      const element: ElementAttr = this.schema.properties[elementName];
      /**
       * Feed each element to this.elements
       */
      switch (element.type) {
        case "string":
          this.elements[elementName] = new TextField().setAttributes(element);
          break;
        case "button":
          this.elements[elementName] = new Button();
          break;
      }
    });
  }

}

export default JSONSchemaForm;
