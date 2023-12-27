import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../index";
import { Bookmark } from "../../../icons";

const mockFn = jest.fn();

describe("Secondary Button", () => {
  it("Base secondary button, clicked", () => {
    render(<Button theme="secondary" text="Button" onClick={mockFn} />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("button--secondary");
    userEvent.click(button);
    expect(mockFn).toBeCalled();
  });

  it("Disabled secondary button, non clicked", () => {
    render(
      <Button
        theme="secondary"
        text="Button"
        onClick={mockFn}
        disabled={true}
      />,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("button--secondary--disabled");
    userEvent.click(button);
    expect(mockFn).not.toBeCalled();
  });

  it("Secondary button with caret", () => {
    render(<Button theme="secondary" text="Button" caret onClick={mockFn} />);

    expect(screen.getByTestId("caret-icon")).toBeInTheDocument();
  });

  it("Secondary button with icon", () => {
    render(
      <Button
        theme="secondary"
        text="Button"
        icon={<Bookmark />}
        onClick={mockFn}
      />,
    );

    expect(screen.getByTestId("bookmark-icon")).toBeInTheDocument();
  });
});
