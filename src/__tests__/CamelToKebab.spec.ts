import camelToKebab from "../CamelToKebab";

describe("CamelToKebab", () => {

  test("It converts camelCase to kebab-case", () => {
    expect(camelToKebab("camelCase")).toEqual("camel-case");
    expect(camelToKebab("someWordsAreNotEnough")).toEqual("some-words-are-not-enough");
  });

});
