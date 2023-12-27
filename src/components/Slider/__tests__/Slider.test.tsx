import { render, screen } from "@testing-library/react";
import Slider from "../index";

const mockFn = jest.fn();

describe("Slider", () => {
  it("Slider render", () => {
    render(
      <Slider min={-10} max={10} name="slider" value={0} onChange={mockFn} />,
    );

    expect(screen.getByAltText("input-range")).toBeInTheDocument();
    expect(screen.getByAltText("input-range")).toHaveValue("0");
  });
});
