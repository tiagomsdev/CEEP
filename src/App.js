import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import Categorias from "./data/categorias";
import ArrayNotas from "./data/arrayNotas";


class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.arrayNotas = new ArrayNotas();

    /*this.state = {
      notas: []
      categorias: [],
    };*/
  }

  /*criarNota(titulo, texto, categoria) {
    console.log(`Uma nova nota foi criada. titulo: ${titulo} texto:${texto} categoria:${categoria}`);
    const novaNota = { titulo, texto, categoria};
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
  }*/

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.arrayNotas.criarNota.bind(this.arrayNotas)}
          categorias={this.categorias.listaCategorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
            categorias={this.categorias.listaCategorias}
          />
          <ListaDeNotas
            apagarNota={this.arrayNotas.apagarNota}
            notas={this.arrayNotas.listaNotas}
          />
        </main>
      </section>
    );
  }
}

export default App;
