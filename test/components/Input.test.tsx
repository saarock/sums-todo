import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../../src/components";
import { vi } from "vitest";

describe("Input component", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("accepts and displays value", () => {
    render(<Input value="Hello" readOnly />);
    const input = screen.getByDisplayValue("Hello");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange handler when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Type here");

    await user.type(input, "abc");
    expect(handleChange).toHaveBeenCalled();
  });

  it("forwards ref correctly", () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(<Input ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
