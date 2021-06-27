import { useHistory } from "react-router-dom";
import "../../css/global.css";
import ilustracao from "../../assets/images/ilustracao.svg";
import dar_aula from "../../assets/icons/dar_aula.svg";
import estudar from "../../assets/icons/estudar.svg";

function HomePage() {
  const history = useHistory();

  function goDarAula() {
    history.push("/dar_aula");
  }
  return (
    <div className="App">
      <main>
        <section>
          <h1>Proffy</h1>
          <p>Sua plataforma de estudos online.</p>
        </section>
        <section className="illustration">
          <img src={ilustracao} alt="" />
        </section>
      </main>
      <footer>
        <section>
          <button className="button button-primary">
            <img src={estudar} alt="" />
            Estudar
          </button>
          <button className="button button-success" onClick={() => goDarAula()}>
            <img src={dar_aula} alt="" />
            Dar aula
          </button>
        </section>
        <section>Total de conexões já realizadas 💜</section>
      </footer>
    </div>
  );
}

export default HomePage;
