import JSONSchemaForm from "../JSONSchemaForm";

describe("JSONSchemaForm", () => {

  document.body.innerHTML = `<form id="test-form"></form>`;
  const el = document.getElementById("test-form") as HTMLFormElement;

  const form = new JSONSchemaForm(el);

  test("It works", () => {
    form.render();
    console.log(document.body.outerHTML);
  });

});
