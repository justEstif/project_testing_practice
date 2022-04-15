const reverseString = require("../js_files/reverseString");

it("Reverse String", () => {
  expect(reverseString("jill")).toMatch(/llij/);
});
it("Reverse String", () => {
  expect(reverseString("ill")).toMatch(/lli/);
});
it("Reverse String", () => {
  expect(reverseString("phill")).toMatch(/llihp/);
});
