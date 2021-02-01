import React, { Component } from "react";

class SeccionPruebas extends Component {
  /*
    constructor(props){

        super(props);
        this.state = {
            contador: 0
        };
    }*/

  state = {
    contador: 0,
  };

  HolaMundo(nombre) {
    var presentacion = <h2>Bienvenido a la app de, {nombre}</h2>;
    return presentacion;
  }

  sumar = (e) => {
    //this.contador = this.contador +1;
    //this.state.contador = 2;

    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div className="prueba">
        <h2 className="subheader">Seccion prueba</h2>

        <h2 className="subheader">Funciones y JSX Básico</h2>

        <h2 className="subheader">Componentes</h2>

        <h2 className="subheader">Estado</h2>
        <p>
          Contador: {this.state.contador}
          <input type="button" value="sumar" onClick={this.sumar} />
          <input type="button" value="restar" onClick={this.restar} />
        </p>
      </div>
    );
  }
}

export default SeccionPruebas;
