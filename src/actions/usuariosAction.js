import axios from "axios";
import { GET_ALL_USERS, LOADING, ERROR } from "../types/usuariosType";
// una funcion que retorna otra function
export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: GET_ALL_USERS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Informacion de usuario no disponible.",
    });
  }
};
