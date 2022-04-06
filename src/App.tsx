import { GrInstagram } from "react-icons/gr";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao <b>Mais 1 Menos 1</b>!
        </p>
        <p>
          Mais uma <b>oportunidade</b>, menos uma <b>desculpa</b>. <br />
          <cite>Exercício é opcional, mas o movimento é essencial.</cite>
        </p>
        <p>Acompanhe nossas redes sociais</p>
        <a
          id="stack"
          title="instagram"
          href="https://www.instagram.com/mais.1menos.1/"
          target="_blank"
        >
          <GrInstagram size={70} />
        </a>
      </header>
    </div>
  );
}

export default App;
