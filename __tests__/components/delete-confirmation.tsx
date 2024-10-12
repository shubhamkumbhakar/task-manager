import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DeleteConfirmation from "@/components/delete-confirmation";
import { noop } from "@/utils/constants";

describe("Delete Confirmation", () => {
  it("renders a confirmation message before deleting a task", () => {
    render(
      <DeleteConfirmation
        confirmationMessage="Are you sure?"
        onConfirm={noop}
        onCancel={noop}
      />
    );

    const paragraphs = screen.getAllByRole("paragraph");
    const buttons = screen.getAllByRole("button");

    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
