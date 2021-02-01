import React, { Component } from "react";
import Slider from "./Slider";

import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slider
          title="Bienvenido a la app de React de AníbalTorices anibaltorices.com"
          size="slider-big"
          btn="Ir al blog"
        />
        <div className="center">
          <div id="content">
            <h1 className="subheader"> Último artículos</h1>
          </div>
        </div>

        <Sidebar/>
      </div>
    );
  }
}

export default Home;
