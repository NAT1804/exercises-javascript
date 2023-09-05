import { reverseString1, reverseString2, reverseString3 } from "./index.js";

describe("Function reverseString", () => {
  it("should return a reversed string", () => {
    let inputStr = "apple";
    expect(reverseString1(inputStr)).toBe("elppa");
  });
  it("should return a reversed string", () => {
    let inputStr = "apple";
    expect(reverseString2(inputStr)).toBe("elppa");
  });
  it("should return a reversed string", () => {
    let inputStr = "apple";
    expect(reverseString3(inputStr)).toBe("elppa");
  });
});
