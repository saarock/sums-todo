import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../../src/components";

describe("Button component", () => {
  it("renders with given text", () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders children inside the button", () => {
    render(
      <Button text="Parent">
        <span>Child</span>
      </Button>
    );
    expect(screen.getByText("Child")).toBeInTheDocument();
  });

  it("applies the correct class based on variant", () => {
    render(<Button text="Test" variant="secondary" />);
    const btn = screen.getByText("Test");
    expect(btn).toHaveClass("btn-secondary");
  });

  it("calls the onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button text="Click Me" onClick={onClick} />);
    await user.click(screen.getByText("Click Me"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
