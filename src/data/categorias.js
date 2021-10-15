export default class Categorias{
    constructor(){
        this.listaCategorias = [];
        this._inscritos = [];
    }
    
    criarCategoria(novaCategoria){
        console.log(`estou na criarCategoria valor:${novaCategoria}`);
        this.listaCategorias.push(novaCategoria);
        console.log(this.listaCategorias);
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => func(this.listaCategorias));
    }

    

}