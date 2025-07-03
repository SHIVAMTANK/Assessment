const { add } = require("../stringCalculator");

//expected output is 0
test("return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("return number it self when string length is 1", () => {
  expect(add("1")).toBe(1);
  expect(add("2")).toBe(2);
  expect(add("3")).toBe(3);
  expect(add("4")).toBe(4);
  expect(add("5")).toBe(5);
  expect(add("6")).toBe(6);
  expect(add("7")).toBe(7);
  expect(add("8")).toBe(8);
  expect(add("9")).toBe(9);
});

test("return sum of multiple values", () => {
  expect(add("1,2")).toBe(3);
  expect(add("1,2,3")).toBe(6);
  expect(add("1,2,3,4")).toBe(10);
  expect(add("1,2,3,4,5")).toBe(15);
  expect(add("1,2,3,4,5,6")).toBe(21);
  expect(add("1,2,3,4,5,6,7")).toBe(28);
  expect(add("1,2,3,4,5,6,7,8")).toBe(36);
  expect(add("1,2,3,4,5,6,7,8,9")).toBe(45);
});

test("return sum of big numbers", () => {
  expect(add("123456,654321")).toBe(777777);
  expect(add("987654321,123456789")).toBe(1111111110);
  expect(add("500000,250000,250000")).toBe(1000000);
  expect(add("111111,222222,333333")).toBe(666666);
});

test("allow newline as a separator", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("\n\n\n\n\n")).toBe(0);
});
