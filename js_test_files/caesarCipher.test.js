const caesarCipher = require('../js_files/caesarCipher')

it("lower case letter cipher", () => {
  expect(caesarCipher.getEncrypted("i")).toMatch(/j/);
})
it("lower case letter cipher", () => {
  expect(caesarCipher.getEncrypted("k")).toMatch(/l/);
})
it("change z to a", () => {
  expect(caesarCipher.getEncrypted("z")).toMatch(/a/);
})
it("upper case letter cipher", () => {
  expect(caesarCipher.getEncrypted("A")).toMatch(/B/);
})
it("upper case letter cipher", () => {
  expect(caesarCipher.getEncrypted("Z")).toMatch(/A/);
})
it("others string", () => {
  expect(caesarCipher.getEncrypted("-")).toMatch(/-/);
})
it("lower case string", () => {
  expect(caesarCipher.getEncrypted("this sentence works")).toMatch(/uijt tfoufodf xpslt/);
})

it("upper case string", () => {
  expect(caesarCipher.getEncrypted("THIS SENTENCE WORKS")).toMatch(/UIJT TFOUFODF XPSLT/);
})
it("upper case, lower case and others string", () => {
  expect(caesarCipher.getEncrypted("ThiS-SentencE WorkS")).toMatch(/UijT-TfoufodF XpslT/);
})
it("neither upper case nor lower case string", () => {
  expect(caesarCipher.getEncrypted("12443%@#$%")).toBe("12443%@#$%");
})
