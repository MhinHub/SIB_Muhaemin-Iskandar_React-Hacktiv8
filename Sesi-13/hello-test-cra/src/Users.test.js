import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Users from "./pages/Users";

test("Render page Users dengan benar", async () => {
    render(<Users />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Back to Home");

    const user = await waitFor(() => screen.getByText("Leanne Graham"), { timeout: 10000 });
    expect(user).toBeInTheDocument();
    
});