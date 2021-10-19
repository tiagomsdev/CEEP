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
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.arrayNotas.criarNota.bind(this.arrayNotas)}
          categorias={this.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.arrayNotas.apagarNota.bind(this.arrayNotas)}
            notas={this.arrayNotas}
          />
        </main>
      </section>
    );
  }
}

export default App;
