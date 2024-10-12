import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskDashboard from "@/components/task-dashboard";

describe("Modal", () => {
  it("renders a Modal container", () => {
    render(<TaskDashboard />);

    const headings = screen.getAllByRole("heading");
    const svgs = screen.getAllByRole("icon");
    const buttons = screen.getAllByRole("button");

    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
    svgs.forEach((svg) => {
      expect(svg).toBeInTheDocument();
    });
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
