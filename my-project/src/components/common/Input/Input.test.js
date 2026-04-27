import { render, screen } from "@testing-library/react";
import Input from "./Input";

test("renders input", () => {
    render( < Input placeholder = "Email" / > );
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
});