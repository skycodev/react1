import React, { Component } from "react";
import "../assets/css/Peliculas.css";

import Pelicula from "./Pelicula";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    // alert("cambiar titulo");

    var { peliculas } = this.state;

    var numrandom = Math.floor(Math.random() * 3);

    peliculas[numrandom].titulo = "batman begins";

    this.setState({
      peliculas: peliculas,
    });
  };

  favorita = (pelicula, indice) => {
    console.log("FAVORITA MARCADA");
    console.log(pelicula);

    console.log("indice" + indice);

    this.setState({
      favorita: pelicula,
    });
  };

  componentWillMount() {
    //alert("Se va a montar el componente");

    this.setState({
      peliculas: [
        {
          titulo: "batman vs superman",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51LyjObTYiL._AC_.jpg",
        },
        {
          titulo: "Gran torino",
          image:
            "https://razonesparacreer.com/wp-content/uploads/2017/10/grantorino.jpg",
        },
        {
          titulo: "looper",
          image:
            " https://i0.wp.com/moviefail.com/wp-content/uploads/2012/10/looper1.jpeg?fit=4000%2C3000&ssl=1",
        },
      ],

      year: "2021",

      nombre: "Aníbal",

      favorita: {},
    });
  }

  componentDidMount() {
    //alert("Se ha montado el component");
  }

  componentWillUnmount() {
    // alert("me voy a desmontar")
  }

  render() {
    return (
      <div class="center">
  
        <div id="peliculas">
          <h2 className="subheader">Películas</h2>
          <p>
            Selección de las peliculas favoritas de {this.state.nombre} en el
            año {this.state.year}
          </p>

          {this.state.favorita.titulo ? (
            <p className="favorita">
              <strong> La pelicula favorita es: </strong>
              <span>{this.state.favorita.titulo}</span>
            </p>
          ) : (
            <p>No hay pelicula favorita añadida</p>
          )}

          <button onClick={this.cambiarTitulo}> Cambiar titulo </button>

          {/** crea componente de peliculas */}

          <div className="articles">
            {this.state.peliculas.map((pelicula, i) => {
              return (
                <Pelicula
                  key={i}
                  indice={i}
                  pelicula={pelicula}
                  marcarFavorita={this.favorita}
                />
              );
            })}
          </div>
        </div>
    
        </div>
    );
  }
}

export default Peliculas;
