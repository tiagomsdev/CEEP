import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super();
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
    this.state = {categorias: []};
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias});
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
    console.log(this.categoria);
  }

  _CriaNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._CriaNota.bind(this)}>
        <select className="form-cadastro_input" onChange={this._handleMudancaCategoria.bind(this)}>
          {this.state.categorias.map((categoria, idx) => {
            return (
              <option key={idx}>
                {categoria}
              </option>
            );
          })}
        </select>
        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Escreva sua nota...."
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
