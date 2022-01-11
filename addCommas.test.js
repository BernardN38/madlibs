const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("it works", () => {
    expect(addCommas(10000)).toEqual("10,000");
    expect(addCommas(100000)).toEqual("100,000");
    expect(addCommas(1000000)).toEqual("1,000,000");
    expect(addCommas(10000000)).toEqual("10,000,000");
    expect(addCommas(100000000)).toEqual("100,000,000");
    expect(addCommas(1000000000)).toEqual("1,000,000,000");
    expect(addCommas(-1000000)).toEqual("-1,000,000");
    expect(addCommas(-10000)).toEqual("-10,000");
  });
});

