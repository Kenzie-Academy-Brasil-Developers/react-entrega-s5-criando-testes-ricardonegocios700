import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
import Providers from "../providers";

describe("Input Component", () => {
  //Confere se tem o input para o CEP
  it("must check if there is input", () => {
    render(<Search />);
    const cepField = screen.getByPlaceholderText("Insira o CEP");
    expect(cepField).toBeTruthy();
  });

  //Confiro se funciona com valor de input para o CEP
  it("must be able to render valid input", () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const cepField = screen.getByPlaceholderText("Insira o CEP");

    //simulo a digitação do usuário
    fireEvent.change(cepField, { target: { value: "01311100" } });

    //confiro o valor digitado
    expect(cepField).toHaveValue(1311100);
  });
});
