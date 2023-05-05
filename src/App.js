import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navegation/Navbar";
import Inicio from "../src/components/Inicio/Inicio"
import Precios from "../src/components/Precios/Precios";
import Registro from "../src/components/Registro/Registro";
import Tiendas from "../src/components/Tiendas/Tiendas";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Inicio}></Route>
          <Route path="/precios" component={Precios}></Route>
          <Route path="/registro" component={Registro}></Route>
          <Route path="/tiendas" component={Tiendas}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
