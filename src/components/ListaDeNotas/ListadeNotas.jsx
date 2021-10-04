import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";


class ListaDeNotas extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <ul className="lista-notas">
                {this.props.notas.map((nota,index) => {
                 return(
                    <li key={index} className="lista-notas_item">
                        <CardNota titulo={nota.titulo} texto={nota.texto}/>
                    </li>
                 )   
                })}
            </ul>
        );
    }
}
export default ListaDeNotas;