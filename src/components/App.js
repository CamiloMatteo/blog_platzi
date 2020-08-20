import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Usuarios from "./Usuarios/index";
import Menu from "./Menu";
import Publicaciones from "./Publicaciones";

const Tareas = () => <div>TAREAS</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios}></Route>
      <Route exact path="/tareas" component={Tareas}></Route>
      <Route exact path="/publicaciones/:key" component={Publicaciones}></Route>
    </div>
  </BrowserRouter>
);

export default App;
