function add(number) {
  if (number === "") {
    return 0;
  }
  if (number.length === 1) {
    const singleValue = parseInt(number);
    return singleValue;
  }

  // this two is the default delimiters
  let delimiter = /[\n,]/;

  // first find the index of the first new line character
  //then i take substring from // to the first new line character
  //then create a RegExp object to use custom delimiter for spitting
  //then remove the custom delimiter from the string
  if (number.startsWith("//")) {
    const newLineIndex = number.indexOf("\n");
    const customDelimiterString = number.substring(2, newLineIndex);
    number = number.substring(newLineIndex + 1);

    //for matching custom delimiters like //[***] or //[--]
    const matchesDelimiter = [...customDelimiterString.matchAll(/\[(.*?)\]/g)];

    if (matchesDelimiter.length > 0) {
      const escapedDelimiters = matchesDelimiter
        .map((match) => match[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|");
      delimiter = new RegExp(escapedDelimiters);
    } else {
      //all special characters in the custom delimiter should be escaped
      const escapedDelimiter = customDelimiterString.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      delimiter = new RegExp(escapedDelimiter);
    }
  }

  // i add this filter for ("\n\n\n\n\n") this test case other wise it give NaN
  const replaceNewLineSeparator = number.replace(/\n/g, ",");

  const multipleValues = replaceNewLineSeparator
    .split(delimiter)
    .filter((number) => number !== "")
    .map((number) => parseInt(number))
    .filter((number) => !isNaN(number) && number <= 1000);

  //this is for negative numbers
  const negatives = multipleValues.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(
      `numbers is negative.Not allowed number ${negatives.join(",")}`
    );
  }

  let sumofMultipleValues = 0;

  for (let i of multipleValues) {
    sumofMultipleValues += i;
  }

  console.log(sumofMultipleValues);

  return sumofMultipleValues;
}

module.exports = { add };
