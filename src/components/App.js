import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Usuarios from "./usuarios/index";
import Menu from "./Menu";

const Tareas = () => <div>TAREAS</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios}></Route>
      <Route exact path="/tareas" component={Tareas}></Route>
    </div>
  </BrowserRouter>
);

export default App;
