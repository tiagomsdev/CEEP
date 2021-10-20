export default class ArrayNotas {
  constructor() {
    this.listaNotas = [];
    this._inscritos = []
  }

  criarNota(titulo, texto, categoria) {
    const nota = new Nota(titulo, texto, categoria);
    this.listaNotas.push(nota);
    this.notificar();
  }

  apagarNota(idx) {
    this.listaNotas.splice(idx, 1);
    this.notificar();
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func){
    this._inscritos = this._inscritos.filter(f => f !== func);
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
