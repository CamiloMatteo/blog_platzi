import axios from "axios";
import { TRAER_POR_USUARIO, LOADING, ERROR } from "../types/publicacionesType";
import * as usuariosTypes from "../types/usuariosType";

const { GET_ALL_USERS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const traerPorUsuario = (key) => async (dispatch, getState) => {
  //loading
  dispatch({
    type: LOADING,
  });

  // destructuracion de la data
  const { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;
  const usuario_id = usuarios[key].id;

  try {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`
    );

    //inmutabilidad
    const publicaciones_actualizadas = [...publicaciones, response.data];
    dispatch({
      type: TRAER_POR_USUARIO,
      payload: publicaciones_actualizadas,
    });

    const publicaciones_key = publicaciones_actualizadas.length - 1;
    const usuarios_actualizados = [...usuarios];

    usuarios_actualizados[key] = {
      ...usuarios[key],
      publicaciones_key,
    };

    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: usuarios_actualizados,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Publicaciones no disponibles.",
    });
  }
};
