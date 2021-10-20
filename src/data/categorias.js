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

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        this._inscritos.forEach(func => func(this.listaCategorias));
    }

    

}