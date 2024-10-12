import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { noop } from "@/utils/constants";
import SortSelector from "@/components/sort-selector";

describe("Sort Selector", () => {
  it("renders a drop down for selecting a filter", () => {
    render(<SortSelector onSelectSorting={noop} />);

    const svgs = screen.getAllByRole("icon");
    const buttons = screen.getAllByRole("button");

    svgs.forEach((svg) => {
      expect(svg).toBeInTheDocument();
    });
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
