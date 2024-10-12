import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Search from "@/components/search";
import { noop } from "@/utils/constants";

describe("Search", () => {
  it("renders a input textbox for search", () => {
    render(<Search searchQuery="" onSearch={noop} />);

    const inputField = screen.getByRole("textbox");

    expect(inputField).toBeInTheDocument();
  });
});
