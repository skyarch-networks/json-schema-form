import JSONSchemaForm from "../JSONSchemaForm";

describe("JSONSchemaForm", () => {

  const form = document.createElement("form");
  form.setAttribute("id", "test-form");

  document.body.appendChild(form);

  const jsonSchemaForm = new JSONSchemaForm(form, {
    $schema: "http://json-schema.org/schema#",
    properties: {
      firstName: {
        description: "First Name",
        maxLength: 50,
        minLength: 1,
        title: "First Name",
        type: "string",
      },
    },
    type: "object",
  });

  test("It renders properly", () => {
    jsonSchemaForm.render();
    expect(form.outerHTML).toEqual(
      `<form id="test-form"><input title="First Name" placeholder="First Name" maxlength="50" minlength="1"></form>`);
  });

});
