import React, { useState } from "react";
import { create, act } from "react-test-renderer";
import { TableCell } from "./style";

describe("Table cell component", () => {
  test("cell have different styles for different cell types", () => {
    let component;
    act(() => {
      component = create(<TableCell cellType="header">cell</TableCell>);
    });
    const instance = component.root;
    const tableCell = instance.findByType("div");
    console.log("table cell", tableCell.props);
    debugger;
    // expect(tableCell.props.children).toBe("PROCEED TO CHECKOUT");
  });
});
