import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import IndexPage from "@/app/page";

describe("Index Page", () => {
  it("renders a Entry point route", () => {
    render(<IndexPage />);

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
