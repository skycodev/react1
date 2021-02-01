import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

import Router from "./Router"

//Importar componentes

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

//import SeccionPruebas from "./components/SeccionPruebas";
//import Peliculas from "./components/Peliculas";

function App() {
  var buttonString = "ir al blog";

  var nombre = "Recetas";
  return (
    <div className="App">
      <Header />
      <Slider
        title="Bienvenido a la app de React de AníbalTorices anibaltorices.com"
        btn={buttonString}
      />

      <div className="center">

       


        <section id="content">
        {/**<Peliculas /> */}  
        <Router />

        </section>
       

        <Sidebar />
      </div>
      <div className="clearfix"></div>

      <Footer />
    </div>
  );
}

export default App;
