import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FilterSelector from "@/components/filter-selector";
import { noop } from "@/utils/constants";

describe("Filter Selector", () => {
  it("renders a drop down for selecting a filter", () => {
    render(<FilterSelector selectedFilter="pending" onSelectFilter={noop} />);

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
