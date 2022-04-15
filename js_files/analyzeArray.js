const analyzeArray = (arr) => {
  arr.sort((a, b) => a - b)
  const getAverage = (arr) =>
    (arr.reduce((a, b) => a + b)) / arr.length

  return {
    average: getAverage(arr),
    min: arr[0],
    max: arr[arr.length - 1],
    length: arr.length
  }
}
module.exports = analyzeArray
