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
          <h1>Seus Dados</h1>
          <hr />
          <form action="">
            <div className="form-group">
              <label for="User">Nome Completo</label>
              <input type="text" id="User" name="Name" />
            </div>
            <div className="form-group">
              <label for="photo">Link da sua foto <span>(comece com http:// )</span></label>
              <input type="text" id="User" name="Name" />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Formulario;
