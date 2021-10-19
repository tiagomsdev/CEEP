export default class Categorias{
    constructor(){
        this.listaCategorias = [];
        this._inscritos = [];
    }
    
    criarCategoria(novaCategoria){
        this.listaCategorias.push(novaCategoria);
        this.notificar();
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => func(this.listaCategorias));
    }

    

}