function add(number) {
  if (number === "") {
    return 0;
  }
  if (number.length === 1) {
    const singleValue = parseInt(number);
    return singleValue;
  }

  // i add this filter for ("\n\n\n\n\n") this test case other wise it give NaN
  const replaceNewLineSeparator = number.replace(/\n/g, ",");

  const multipleValues = replaceNewLineSeparator
    .split(",")
    .filter((number) => number !== "")
    .map((number) => parseInt(number));

  let sumofMultipleValues = 0;

  for (let i of multipleValues) {
    sumofMultipleValues += i;
  }
  console.log(sumofMultipleValues);

  return sumofMultipleValues;
}

module.exports = { add };
