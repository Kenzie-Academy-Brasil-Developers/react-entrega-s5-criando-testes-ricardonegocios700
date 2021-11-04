import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import Providers from "../providers";
import api from "../services/index";
import MockAdapter from "axios-mock-adapter";
import userEvent from "@testing-library/user-event";

describe("texto", () => {
  it("texto", async () => {
    //preparo o ambiente com dados
    const apiMock = new MockAdapter(api);
    apiMock.onPost("/").replyOnce(200, {
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
    });

    render(
      <Providers>
        <Search />
      </Providers>
    );

    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, { target: { value: "01311100" } });
    fireEvent.click(buttonElement);

    const result = await screen.findByDisplayValue("Avenida Paulista");

    expect(result).toBeInTheDocument();
  });
});
