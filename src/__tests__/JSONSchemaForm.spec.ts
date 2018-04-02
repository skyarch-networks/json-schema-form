import JSONSchemaForm from "../JSONSchemaForm";

describe("JSONSchemaForm", () => {

  const form = document.createElement("form");
  form.setAttribute("id", "test-form");

  document.body.appendChild(form);

  const jsonSchemaForm = new JSONSchemaForm(form, {
    $schema: "http://json-schema.org/schema#",
    properties: {
      someTextbox: {
        description: "Textbox Description",
        maxLength: 50,
        minLength: 1,
        title: "Textbox Title",
        type: "string",
      },
      submit: {
        description: "Button Description",
        title: "Button Title",
        type: "button",
      },
    },
    type: "object",
  });

  test("It renders properly", () => {
    jsonSchemaForm.render();
    expect(form.outerHTML).toEqual(
      `<form id="test-form"><input id="some-textbox" title="Textbox Title" placeholder="Textbox Description" ` +
      `maxlength="50" minlength="1"><button id="submit"></button></form>`);
  });

});
