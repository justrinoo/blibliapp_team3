import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("component ini jika tidak diclick akan disabled", () => {
	const { container } = render(<Button isDisabled />);
	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("component ini jika merender akan mengeluarkan isLoading atau spinner ", async () => {
	const { container, getByText } = render(<Button isLoading />);
	expect(getByText(/loading/i)).toBeInTheDocument();
	expect(container.querySelector("span")).toBeInTheDocument();
});
