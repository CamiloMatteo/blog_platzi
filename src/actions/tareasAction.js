import axios from "axios";
import {
  CAMBIO_USUARIO_ID,
  CAMBIO_TITULO,
  AGREGADA,
  TRAER_TODAS,
  LOADING,
  ERROR,
} from "../types/tareasType";
// una funcion que retorna otra function
export const traerTodas = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // normalizar datos
    const tareas = {};
    response.data.map(
      (tar) =>
        (tareas[tar.userId] = {
          ...tareas[tar.userId],
          [tar.id]: {
            ...tar,
          },
        })
    );

    dispatch({
      type: TRAER_TODAS,
      payload: tareas,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Informacion de tareas no disponible.",
    });
  }
};

export const cambioUsuarioId = (usuario_id) => (dispatch) => {
  dispatch({
    type: CAMBIO_USUARIO_ID,
    payload: usuario_id,
  });
};

export const cambioTitulo = (titulo) => (dispatch) => {
  dispatch({
    type: CAMBIO_TITULO,
    payload: titulo,
  });
};

export const agregar = (nueva_tarea) => async (dispatch) => {
  console.log(nueva_tarea);
  dispatch({
    type: LOADING,
  });

  try {
    const respuesta = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      nueva_tarea
    );
    dispatch({
      type: AGREGADA,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "No se pudo agregar la tarea.",
    });
  }
};
