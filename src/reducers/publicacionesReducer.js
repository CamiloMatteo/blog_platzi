import { TRAER_POR_USUARIO, LOADING, ERROR } from "../types/publicacionesType";

const INITIAL_STATE = {
  publicaciones: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_POR_USUARIO:
      return {
        ...state,
        loading: false,
        error: "",
        publicaciones: action.payload,
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
