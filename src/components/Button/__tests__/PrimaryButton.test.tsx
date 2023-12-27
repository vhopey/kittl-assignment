import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../index";
import { Bookmark } from "../../../icons";

const mockFn = jest.fn();

describe("Primary Button", () => {
  it("Base primary button, clicked", () => {
    render(<Button theme="primary" text="Button" onClick={mockFn} />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("button--primary");
    userEvent.click(button);
    expect(mockFn).toBeCalled();
  });

  it("Disabled primary button, non clicked", () => {
    render(
      <Button theme="primary" text="Button" onClick={mockFn} disabled={true} />,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("button--primary--disabled");
    userEvent.click(button);
    expect(mockFn).not.toBeCalled();
  });

  it("Primary button with caret", () => {
    render(<Button theme="primary" text="Button" caret onClick={mockFn} />);

    expect(screen.getByTestId("caret-icon")).toBeInTheDocument();
  });

  it("Primary button with icon", () => {
    render(
      <Button
        theme="primary"
        text="Button"
        icon={<Bookmark />}
        onClick={mockFn}
      />,
    );

    expect(screen.getByTestId("bookmark-icon")).toBeInTheDocument();
  });

  it("Primary button with 100% width", () => {
    render(<Button theme="primary" text="Button" block onClick={mockFn} />);

    expect(screen.queryByRole("button")).toHaveClass("button--block");
  });
});
