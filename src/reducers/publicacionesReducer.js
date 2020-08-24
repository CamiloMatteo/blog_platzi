import {
  ACTUALIZAR,
  LOADING,
  ERROR,
  COM_ACTUALIZAR,
  COM_CARGANDO,
  COM_ERROR,
} from "../types/publicacionesType";

const INITIAL_STATE = {
  publicaciones: [],
  loading: false,
  error: "",
  com_cargando: false,
  com_error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTUALIZAR:
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

    case COM_ACTUALIZAR:
      return {
        ...state,
        com_cargando: false,
        com_error: "",
        publicaciones: action.payload,
      };

    case COM_CARGANDO:
      return { ...state, com_cargando: true };
    case COM_ERROR:
      return { ...state, com_cargando: false, com_error: action.payload };
    default:
      return state;
  }
};
