import React, { Component } from "react";

import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  gHombreRef = React.createRef();
  gMujerRef = React.createRef();
  gOtroRef = React.createRef();

  state = {
    user: {},
  };

  recibirFormulario = (e) => {
    e.preventDefault();

    var genero = "hombre";

    if (this.gHombreRef.current.checked) {
      genero = this.gHombreRef.current.value;
    } else if (this.gMujerRef.current.checked) {
      genero = this.gHombreRef.current.value;
    } else {
      genero = this.gOtroRef.current.value;
    }

    var user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user,
    });

    // alert("formulario enviado");

    console.log(user);

    console.log(user.genero);
  };

  render() {
    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            {/**crear formulario*/}

            <h1 className="subheader">Formulario</h1>

            {/**Mostrar datos del formulario */}

            {this.state.user.nombre && (
              <p>
                Nombre: <strong>{this.state.user.nombre}</strong>
              </p>
            )}

            <form
              className="mid-form"
              onSubmit={this.recibirFormulario}
              onChange={this.recibirFormulario}
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div class="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.gHombreRef}
                />{" "}
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.gMujerRef}
                />{" "}
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.gOtroRef}
                />{" "}
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" class="btn btn-success" />
            </form>
          </div>
        </div>

        <Sidebar />
      </div>
    );
  }
}

export default Formulario;
