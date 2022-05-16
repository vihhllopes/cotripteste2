import "./login.css";
import "../Campanha/campanha.css";
import "../Cadastro/cadastro.css";

function Login() {
  return (
    <div>
      <a class="links" id="paracadastro"></a>
      <a class="links" id="paralogin"></a>
      <div class="card_form1">
        <div class="container">
          <form
            id="form1"
            name="userForm"
            href="http://evanescent-brick.surge.sh/"
            method="GET"
          >
            <input type="hidden" id="origin" name="origin" value="" />
            <input type="hidden" id="destination" name="destination" value="" />
            <input type="hidden" id="moneyGoal" name="moneyGoal" value="" />

            <h1 id="title_form1">Faça seu Login</h1>
            <label for="userEmail" class="input-title2" required>
              E mail
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="seuemail@email.com"
            />

            <label for="userPsw" class="input-title2" required>
              Senha
            </label>
            <input
              type="password"
              id="userPsw"
              name="userPsw"
              placeholder="Sua senha deve conter entre 8 e 10 caracteres entre letras e números."
            />

            <input
              type="checkbox"
              name="manterlogado"
              id="manterlogado"
              value=""
            />
            <label for="manterlogado" class="input-title2">
              Manter-me logado
            </label>

            <p>
              <button
                type="button"
                value="Continuar"
                id="form-button"
                class="form-button"
              >
                {" "}
                Confirmar
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
