import React, {Component} from 'react';

class MiComponente extends Component{


    render(){

        let receta = {

            nombre : 'pizza',
            ingredientes : ['base de masa','tomate','queso','anchoas'],
            calorias: 400
        }
    
        return (
            <React.Fragment>
              
            <h1>   Receta: {receta.nombre}</h1>
            <p>Ingredientes:
                <ol>
                
                {receta.ingredientes.map((ingrediente,i)=>{

                    return(
                        
                        <li key = {i}>

                            {ingrediente}

                        </li>)
                })}




                </ol>
            </p>
            <p> Número de calorias: {receta.calorias}</p>

            {this.props.hola}
           

            </React.Fragment>
        );
    }



}

export default MiComponente;