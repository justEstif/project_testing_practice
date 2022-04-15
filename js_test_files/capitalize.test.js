const capitalize = require("../js_files/capitalize");

it("Capitalize", () => {
  expect(capitalize("jill")).toMatch(/Jill/);
});
it("Capitalize", () => {
  expect(capitalize("ill")).toMatch(/Ill/);
});
it("Capitalize", () => {
  expect(capitalize("phill")).toMatch(/Phill/);
});
