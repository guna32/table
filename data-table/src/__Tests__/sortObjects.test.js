import { sortObject } from "../utils/commonUtils";

describe("test object sorting", () => {
  test("test sort functionalities", () => {
    const numberSet = [{ value: 2 }, { value: 1 }];
    const stringSet = [{ value: "b" }, { value: "a" }];
    expect(sortObject("ASC", "value", numberSet)).toStrictEqual([
      { value: 1 },
      { value: 2 }
    ]);
    expect(sortObject("DSC", "value", numberSet)).toStrictEqual([
      { value: 2 },
      { value: 1 }
    ]);
    expect(sortObject("ASC", "value", stringSet)).toStrictEqual([
      { value: "a" },
      { value: "b" }
    ]);
  });
});
