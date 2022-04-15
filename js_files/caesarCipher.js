const caesarCipher = (() => {
  const { lowerCaseAlphabets, upperCaseAlphabets } = {
    lowerCaseAlphabets: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperCaseAlphabets: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  }
  // returns the array the letter is in
  const getArray = (letter) => {
    if (lowerCaseAlphabets.includes(letter)) return lowerCaseAlphabets
    if (upperCaseAlphabets.includes(letter)) return upperCaseAlphabets
    return [letter]
  }
  // returns the index of the letter in the array
  const getNextIndex = (letter, array) => {
    const index = array.indexOf(letter)
    const lastLetter = array.length - 1
    switch (index) {
      case lastLetter:
        return 0
      default:
        return index + 1
    }
  }
  // returns the next letter
  const getNextLetter = (letter) => {
    const array = getArray(letter)
    const index = getNextIndex(letter, array)
    return array[index]
  }
  const getNewString = (str) => {
    const encrypedArr = str.split("").map(getNextLetter)
    return encrypedArr.join("")
  }
  const getEncrypted = (str) => {
    return getNewString(str)
  }
  return {
    getEncrypted,
  };
})();

module.exports = caesarCipher;
