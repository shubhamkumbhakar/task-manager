import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskForm from "@/components/task-form";

describe("Task Form", () => {
  it("renders a form to add or update task", () => {
    render(
      <TaskForm
        task={{
          id: 0,
          title: "",
          description: "",
          status: "pending",
          dueDate: new Date(new Date().getDay() + 1).toISOString().slice(0, 16),
        }}
        onChange={() => {}}
        onSubmit={() => {}}
        onCancel={() => {}}
      />
    );

    const heading = screen.getByRole("heading");
    const textFields = screen.getAllByRole("textbox");
    const buttons = screen.getAllByRole("button");
    const dateField = screen.getByTestId("date-input");

    expect(heading).toBeInTheDocument();

    textFields.forEach((textField) => {
      expect(textField).toBeInTheDocument();
    });

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
    expect(dateField).toBeInTheDocument();
  });
});
