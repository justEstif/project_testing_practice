const calculator = require("../js_files/calculator");

it("Add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
it("Minus", () => {
  expect(calculator.minus(5, 2)).toBe(3);
});
it("Multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
it("Divide", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
