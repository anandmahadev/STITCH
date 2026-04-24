import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button text", () => {
  render(<Button>Save</Button>);
  expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
});
