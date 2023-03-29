import React from "react";
import {
  LabelInput,
  InputComponent,
  InputContainer,
  InputCepError,
} from "./StylesInput";

const Input = ({
  htmlFor,
  texto,
  tipo,
  nome,
  id,
  setDados,
  dados,
  cepState,
  telState,
  setEndereco,
  setBairro,
}) => {
  const [focus, setFocus] = React.useState("");
  const [error, setError] = React.useState(false);

  function inputFocado() {
    setFocus("ativo");
  }
  function inputDesfocado(e) {
    if (cepState) {
      buscarCep(e.target.value);
      if (e.target.value.length === 0) {
        setError(false);
        setFocus("");
      }
    } else if (e.target.value.length > 0) {
      return;
    } else {
      setFocus("");
    }
  }

  async function buscarCep(cep) {
    const endereco = document.querySelector("#endereco");
    const labelEndereco = document.querySelector("#labelendereco");
    const bairro = document.querySelector("#bairro");
    const labelBairro = document.querySelector("#labelbairro");
    try {
      const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const cepJson = await consultaCep.json();
      setError(false);
      if (cepJson.erro) {
        throw Error("Cep não existe");
      }

      setEndereco(cepJson.logradouro);
      endereco.disabled = true;
      labelEndereco.classList.add("ativo");

      setBairro(cepJson.bairro);
      bairro.disabled = true;
      labelBairro.classList.add("ativo");
    } catch (erro) {
      if (cep.length > 0) {
        setError(true);
      }
      endereco.value = "";
      bairro.value = "";
      endereco.disabled = false;
      bairro.disabled = false;
      labelEndereco.classList.remove("ativo");
      labelBairro.classList.remove("ativo");
    }
  }
  function atualizar(e) {
    if (e.target.value.length > 1) {
      setFocus("ativo");
    }
    setDados(e.target.value);
    if (telState) {
      //FORMATANDO O NÚMERO
      const input = e.target;
      let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número
      const tamanho = value.length;
      let numeroFormatado = "";

      numeroFormatado += tamanho > 0 ? `(${value.substring(0, 2)}` : "";
      numeroFormatado += tamanho > 2 ? `) ${value.substring(2, 7)}` : "";
      numeroFormatado +=
        tamanho > 6 && tamanho <= 10 ? `-${value.substring(7)}` : "";
      numeroFormatado += tamanho > 10 ? `-${value.substring(7, 11)}` : "";

      // Se o usuário apagar o hífen, remove-o do valor formatado
      if (
        numeroFormatado.endsWith("-") &&
        input.selectionStart === numeroFormatado.length - 1
      ) {
        numeroFormatado = numeroFormatado.slice(0, -1);
      }

      setDados(numeroFormatado);
    } else if (cepState) {
      const cep = e.target.value.replace(/\D/g, ""); // remove qualquer caractere que não seja número
      const tamanho = cep.length;
      let cepFormatado = "";

      if (tamanho > 0) {
        cepFormatado = `${cep.substring(0, 5)}`;
      }
      if (tamanho > 5) {
        cepFormatado += `-${cep.substring(5, 8)}`;
      }
      setDados(cepFormatado);
    }
  }

  return (
    <>
      <>
        <InputContainer>
          <InputComponent
            type={tipo}
            name={nome}
            id={id}
            required
            onFocus={inputFocado}
            onBlur={inputDesfocado}
            onChange={atualizar}
            value={dados}
            autoComplete="off"
          />
          <LabelInput className={focus} htmlFor={htmlFor} id={"label" + id}>
            {texto}
          </LabelInput>
          {error && (
            <InputCepError>Cep inválido, tente novamente</InputCepError>
          )}
        </InputContainer>
      </>
    </>
  );
};

export default Input;
