export default class ArrayNotas {
  constructor() {
    this.listaNotas = [];
    this._inscritos = []
  }

  criarNota(titulo, texto, categoria) {
    const nota = new Nota(titulo, texto, categoria);
    this.listaNotas.push(nota);
    console.log(this.listaNotas);
  }

  apagarNota(idx) {
    this.listaNotas.splice(idx, 1);
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.listaNotas));
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
