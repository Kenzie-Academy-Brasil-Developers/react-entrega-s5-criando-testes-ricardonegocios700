import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("texto", () => {
  //confere se o botão existe
  it("texto", () => {
    render(<Search />);
    //const buttonElement = screen.getByRole("button");
    const buttonElement = screen.getByText("Buscar pelo CEP");
    expect(buttonElement).toBeTruthy();
  });

  //confere se o botão sem input preenchido não permite click
  it("It should not allow clicking the button when the input is empty", () => {
    render(<Search />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
