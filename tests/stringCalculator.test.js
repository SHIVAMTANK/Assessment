const { add } = require('../stringCalculator');

//expected output is 0
test('return 0 for empty string',()=>{
    expect(add("")).toBe(0);
})