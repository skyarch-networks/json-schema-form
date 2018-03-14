class JSONSchemaForm {
  private message: string = "";

  constructor(name: string) {
    this.message = `Hello ${name}!`;
  }

  public greet = (): string => {
    return this.message;
  }
}

export default JSONSchemaForm;
