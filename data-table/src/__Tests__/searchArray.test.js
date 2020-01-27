import { searchArray } from "../utils/commonUtils";

describe("Test for a perticular elements in an array of objects", () => {
  test("test array search", () => {
    const element = "test";
    const target = [{ value: "testing" }, { value: "test" }, { value: "dev" }];
    const expectedResult = [{ value: "testing" }, { value: "test" }];
    expect(searchArray(element, target)).toStrictEqual(expectedResult);
  });
});
