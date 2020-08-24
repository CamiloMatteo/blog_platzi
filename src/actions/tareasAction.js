import axios from "axios";
import { TRAER_TODAS, LOADING, ERROR } from "../types/tareasType";
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
