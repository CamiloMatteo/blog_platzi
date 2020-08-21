import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

import * as usuariosActions from "../../actions/usuariosAction";
import * as publicacionesActions from "../../actions/publicacionesAction";

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions;

class Publicaciones extends Component {
  async componentDidMount() {
    const {
      usuariosTraerTodos,
      publicacionesTraerPorUsuario,
      match: {
        params: { key },
      },
    } = this.props;

    if (!this.props.usuariosReducer.usuarios.length) {
      await usuariosTraerTodos();
    }

    if (this.props.usuariosReducer.error) {
      return;
    }

    if (!("publicaciones_key" in this.props.usuariosReducer.usuarios[key])) {
      publicacionesTraerPorUsuario(key);
    }
  }

  ponerUsuario = () => {
    const {
      usuariosReducer,
      match: {
        params: { key },
      },
    } = this.props;

    if (usuariosReducer.error) {
      return <Fatal message={usuariosReducer.error} />;
    }

    if (!usuariosReducer.usuarios.length || usuariosReducer.loading) {
      return <Spinner />;
    }

    const nombre = usuariosReducer.usuarios[key].name;

    return <h1>Publicaciones de {nombre} </h1>;
  };

  ponerPublicaciones = () => {
    const {
      usuariosReducer,
      usuariosReducer: { usuarios },
      publicacionesReducer,
      publicacionesReducer: { publicaciones },
      match: {
        params: { key },
      },
    } = this.props;

    if (!usuarios.length) return;
    if (usuariosReducer.error) return;

    if (publicacionesReducer.loading) {
      return <Spinner />;
    }

    if (publicacionesReducer.error) {
      return <Fatal message={publicacionesReducer.error} />;
    }

    if (!publicaciones.length) return;

    if (!("publicaciones_key" in usuarios[key])) return;

    const { publicaciones_key } = usuarios[key];

    return publicaciones[publicaciones_key].map((publicacion) => (
      <div
        className="pub_title"
        key={publicacion.id}
        onClick={() => alert(publicacion.id)}
      >
        <h2>{publicacion.title}</h2>
        <h3>{publicacion.body}</h3>
      </div>
    ));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.ponerUsuario()} {this.ponerPublicaciones()}
      </div>
    );
  }
}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return {
    usuariosReducer,
    publicacionesReducer,
  };
};

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicacionesTraerPorUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
