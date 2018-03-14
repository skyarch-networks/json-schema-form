import JSONSchemaForm from "../JSONSchemaForm";

describe("JSONSchemaForm", () => {

  const form = new JSONSchemaForm("World");

  test("It works", () => {
    expect(form.greet()).toEqual("Hello World!");
  });

});
