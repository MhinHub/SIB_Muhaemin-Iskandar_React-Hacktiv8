import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    // mencari button tertentu

    const btn = screen.getByRole("button");
    //   expect(btn).toBeInTheDocument();
    //   expect(btn).toHaveTextContent("back to home");


    // Klik button
    fireEvent.click(btn);

    // mencari tombol tertentu
    // pada halamam yang muncul karena klik tombol
    // pastikan button kita memiliki role ="button

    const user = async () =>
        await waitFor(
            () => {
                return screen.findByAltText("Leanne Graham");
            },
            { timeout: 5000 }
        );


    // user().then((res) => {
    //     expect(res).toBeInTheDocument();
    // });

});