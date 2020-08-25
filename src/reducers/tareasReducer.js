import {
  CAMBIO_USUARIO_ID,
  CAMBIO_TITULO,
  AGREGADA,
  TRAER_TODAS,
  LOADING,
  ERROR,
} from "../types/tareasType";

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: "",
  usuario_id: "",
  titulo: "",
  regresar: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return {
        ...state,
        loading: false,
        error: "",
        tareas: action.payload,
        regresar: false,
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case CAMBIO_USUARIO_ID:
      return { ...state, usuario_id: action.payload };
    case CAMBIO_TITULO:
      return { ...state, titulo: action.payload };
    case AGREGADA:
      return {
        ...state,
        tareas: {},
        cargando: false,
        error: "",
        regresar: true,
        usuario_id: "",
        titulo: "",
      };
    default:
      return state;
  }
};
