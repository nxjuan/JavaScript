import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import api from "../../service/api";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import AttentionImg from "../../assets/attention.svg";

import "./styles.css";

export function Register() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);

  useEffect(() => {

      const cep = document.querySelector("#cep");
      const showData = (result) => {
        for (const campo in result) {
          if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
          }
        }
      };
      cep.addEventListener("blur", (e) => {
        let searchTrace = cep.value.replace("-", "");
        const options = {
          method: "GET",
          mode: "cors",
          cache: "default",
        };
        fetch(`https://viacep.com.br/ws/${searchTrace}/json`, options)
          .then((response) => {
            response
              .json()
              .then((data) => showData(data));
          })
          .catch((e) => console.log("Deu um tal erro" + e));
      });
  }, [])

  async function handleSubmitForm(data) {
    try {
      const response = await api.post("cadastro", data);

      toast.success(response.data.message);
      setError(false);
      setTimeout(() => {
        window.location.reload();
      }, "4000");
    } catch (err) {
      toast.error("Erro ao criar o cadastro!");
      toast.error(err.response.data.message);

      if (err.response.status === 422) {
        setError(true);
      } else if (err.response.status === 412) {
        setError(false)
      }
    }
  }
//Eu não fiz o button "cadastrar" mudar de cor, mas n precisava, ja que de qualquer 
//forma, o envio do cadastro, se estiver incompreto, emitirá um alerta
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <h1>Seus dados</h1>

        <section>
          <div class="box-form-1">
            <div class="content-input">
              <label for="">Nome Completo</label>
              <input
                className={error ? "error" : ""}
                required
                type="text"
                placeholder="Nome Completo"
                {...register("nomeCompleto")}
              />
            </div>

            <div class="content-input">
              <label for="">E-mail</label>
              <input
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="E-mail"
                {...register("email")}
              />
            </div>

            <div class="content-input">
              <label for="">Data de Nascimento</label>
              <input
                required
                className={error ? "error" : ""}
                type="date"
                {...register("dataNascimento")}
              />
            </div>

            <div class="content-input">
              <label for="">Sexo</label>
              <select
                name=""
                id=""
                className={error ? "error" : ""}
                {...register("sexo")}
              >
                <option value="" selected>
                  Selecione
                </option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            <div class="content-input">
              <label for="">CPF</label>
              <input
                required
                className={error ? "error" : ""}
                type="number"
                placeholder="CPF"
                data-mask="000.000.000-00"
                {...register("cpf")}
              />
            </div>
          </div>

          <div class="box-form-2">
            <div class="content-input">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="CEP"
                data-mask="00000-000"
                {...register("cep")}
              />
            </div>

            <div htmlFor="logradouro" class="content-input">
              <label for="">Logradouro</label>
              <input
                id="logradouro"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Logradouro"
                {...register("logradouro")}
              />
            </div>

            <div class="content-input">
              <label for="">Número</label>
              <input
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Número"
                {...register("numeroLogradouro")}
              />
            </div>

            <div class="content-input">
              <label htmlFor="localidade">Cidade</label>
              <input
                id="localidade"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
              />
            </div>

            <div class="content-input">
              <label htmlFor="uf">UF</label>
              <input
                id="uf"
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="UF"
                {...register("uf")}
              />
            </div>

            <div class="content-input">
              <label for="">Expectativa</label>
              <input
                required
                className={error ? "error" : ""}
                type="text"
                placeholder="Expectativa"
                {...register("expectativa")}
              />
            </div>
          </div>
        </section>

        <div class="form-footer">
          <div class="attention">
            <img src={AttentionImg} alt="attention" />
            <h2>Preencha todos os campos</h2>
          </div>

          <div className="terms">
            <label>Eu aceito todos os termos e condições</label>
            <input type="checkbox" required value={true} />
          </div>

          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>
  );
}
