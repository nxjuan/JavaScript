import { Link } from "react-router-dom";

import "./styles.css";

export function Header() {
  return (
    <header>
      <figure>
      <h1 class="title-supreme2">clínica de Nutrição</h1>
      <h1 class="title-supreme">HomeHeal</h1>
      </figure>

      <nav>
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/imc">
              <a>IMC</a>
            </Link>
          </li>
          <li>
            <Link to="/register">
            <a  href="cadastro.html">Cadastro</a>
            </Link>
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
    </header>
  );
}
