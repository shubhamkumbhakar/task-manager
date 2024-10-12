import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskCard from "@/components/task-card";
import { EMPTY_TASK, noop } from "@/utils/constants";

describe("Task Card", () => {
  it("renders a card UI for each task", () => {
    render(
      <TaskCard
        task={EMPTY_TASK}
        onDelete={noop}
        onDragEnd={noop}
        onDragEnter={noop}
        onDragStart={noop}
        onEdit={noop}
        onToggleComplete={noop}
        index={0}
        isDragTarget={false}
      />
    );

    const heading = screen.getByRole("heading");
    const paragraph = screen.getByRole("paragraph");
    const svgs = screen.getAllByRole("icon");
    const buttons = screen.getAllByRole("button");

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    svgs.forEach((svg) => {
      expect(svg).toBeInTheDocument();
    });
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
