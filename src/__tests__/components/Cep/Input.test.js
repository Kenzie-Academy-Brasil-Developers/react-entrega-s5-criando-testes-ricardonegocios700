import React, { Children } from "react";
import { waitFor, render, screen, fireEvent } from "@testing-library/react";
import Search from "../../../components/Search";
import Providers from "../../../providers";
import api from "../../../services/index";
import MockAdapter from "axios-mock-adapter";

describe("Input Component", () => {
  //Confere se tem o input para o CEP

  it("must check if there is input", () => {
    render(<Search />);
    const cepField = screen.getByPlaceholderText("Insira o CEP");
    expect(cepField).toBeTruthy();
  });

  //Confere se funciona com input válido para o CEP
  it("must be able to render valid input", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP");
    /*preparo o ambiente com dados
    const apiMock = new MockAdapter(api);
    apiMock.onGet("/").replyOnce(200, {
      bairro: "Bela Vista",
      cep: "01311100",
      cidade: "São Paulo",
      cidade_info: { area_km2: "1521,11", codigo_ibge: "3550308" },
      complemento: "de 611 a 1045 - lado ímpar",
      estado: "SP",
      estado_info: {
        area_km2: "248.221,996",
        codigo_ibge: "35",
        nome: "São Paulo",
      },
      logradouro: "Avenida Paulista",
    });*/

    //simulo a ação do usuário, podia ser com fireEvent
    fireEvent.change(cepField, { target: { value: "01311100" } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(cepField).toHaveValue(1311100);
    });
  });
});
