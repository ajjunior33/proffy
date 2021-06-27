import "./index.css";
function Formulario() {
  return (
    <div className="App">
      <header></header>
      <main>
        <header>
          <h1>
            Que incrível que você <br /> quer dar aulas.
          </h1>
          <p> O primeiro passo, é preencher esse formulário de inscrição.</p>
        </header>

        <section>
          <h3>Seus Dados</h3>
          <hr />
          <form action="">
            <div className="form-group">
              <label for="User">Nome Completo</label>
              <input type="text" id="User" name="Name" />
            </div>
            <div className="form-group">
              <label for="photo">
                Link da sua foto <span>(comece com http:// )</span>
              </label>
              <input type="text" id="User" name="Name" />
            </div>
            <div className="form-group">
              <label for="photo">
                Whatsapp <span>(somente números )</span>
              </label>
              <input type="text" id="User" name="Name" />
            </div>
            <div className="form-group">
              <label for="photo">Biografia </label>
              <input type="text" id="User" name="Name" />
            </div>

            <h3> Sobre a aula</h3>
            <div className="form-group">
              <label for="photo">Matéria </label>
              <select name="" id="">
                <option value="">Selecione qual você quer ensinar</option>
              </select>
            </div>
            <div className="form-group">
              <label for="photo">
                Custo da sua aula por hora <span>(em R$ )</span>{" "}
              </label>
              <input type="text" id="User" name="Name" />
            </div>

            <header>
              <h3>Horários disponiveis</h3>
              <button>Novo horário</button>
            </header>
            <section className="row">
              <div className="form-group">
                <label for="photo">Dia da Semana </label>
                <select name="" id="">
                  <option value="">Selecione o dia</option>
                </select>
              </div>
              <div className="form-group">
                <label for="photo">Das </label>
                <input type="text" id="User" name="Name" />
              </div>
              <div className="form-group">
                <label for="photo">Ate </label>
                <input type="text" id="User" name="Name" />
              </div>
            </section>

            <footer>
              <div>
                <p>
                  Importante! <br />
                  Preencha todos os dados
                </p>
              </div>
              <div>
                <button className="button button-green">Salvar Cadastro</button>
              </div>
            </footer>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Formulario;
