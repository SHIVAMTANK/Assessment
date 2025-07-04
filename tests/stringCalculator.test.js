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

test("allow newline as a separator", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("\n\n\n\n\n")).toBe(0);
});

test("custom delimiter ;", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("custom delimiter |", () => {
  expect(add("//|\n4|5|6")).toBe(15);
});

test("custom delimiter _", () => {
  expect(add("//_\n1_2_3")).toBe(6);
});

test("custom delimiter :", () => {
  expect(add("//:\n10:20:30")).toBe(60);
});

//then it takes only first character not whole string
test("declare another use another character", () => {
  expect(add("//*\n5-5-5-5")).toBe(5);
});

test("for negative numbers throw error", () => {
  expect(() => add("-5,10,-15")).toThrow(
    "numbers is negative.Not allowed number -5,-15"
  );
});

const bigInput = Array(1000).fill("1").join(",");
test("for hanlde big large values", () => {
  expect(add(bigInput)).toBe(1000);
});

test("ignores numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1000,1001,2")).toBe(1002);
});

test("Delimiter can be any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
  expect(add("//[--]\n4--5--6")).toBe(15);
});
test("supports multiple single-character delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("supports multiple multi-character delimiters", () => {
  expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
});

test("supports mixture of single and multi-character delimiters", () => {
  expect(add("//[--][+]\n1--2+3")).toBe(6);
});
