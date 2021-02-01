import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Formulario from "./components/Formulario";
import Error from "./components/Error";

//Importar componentes
import Home from "./components/Home";
import Header from "./components/Header";
import Blog from "./components/Blog";

import Footer from "./components/Footer";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        {/*CONFIGURAR RUTAS Y PAGINAS */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/ruta-prueba" component={SeccionPruebas} />
          <Route exact path="/segunda-ruta" component={MiComponente} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />

          <Route
            exact
            path="/pagina-1"
            render={() => (
              <section id="content">
                <MiComponente hola="hola mundo desde una prop"></MiComponente>
                <h1>hola mundo desde la pagina 1</h1>
              </section>
            )}
          />

          <Route
            exact
            path="/pagina-2/:nombre/:apellidos?"
            render={(props) => {
              var nombre = props.match.params.nombre;
              var apellidos = props.match.params.apellidos;
              return (
                <div class="center">
                  <div className="subheader">
                    <h1>pruebas</h1>
                    <p>Página para hacer pruebas</p>

                    {!apellidos ? (
                      <p>Soy: {nombre} </p>
                    ) : (
                      <p>Soy: {nombre + " " + apellidos}</p>
                    )}
                  </div>
                </div>
              );
            }}
          />

          <Route component={Error} />
        </Switch>

        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
