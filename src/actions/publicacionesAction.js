import axios from "axios";
import { GET_ALL, LOADING, ERROR } from "../types/publicacionesType";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );

    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
