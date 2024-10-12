import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Modal } from "@/components/modal-wrapper";
import { noop } from "@/utils/constants";

describe("Modal", () => {
  it("renders a Modal container", () => {
    render(
      <Modal isOpen={true} onClose={noop}>
        <></>
      </Modal>
    );

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
