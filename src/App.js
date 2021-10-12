import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    console.log(`Uma nova nota foi criada. titulo: ${titulo} texto:${texto}`);
    const novaNota = { titulo, texto };
    const novoEstado = {
      notas: [...this.state.notas, novaNota],
    };
    this.setState(novoEstado);
  }

  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  criarCategoria(novaCategoria) {
    const novoEstado = {
      categorias: [...this.state.categorias, novaCategoria],
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.criarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.apagarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
