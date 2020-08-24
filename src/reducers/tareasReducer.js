import { TRAER_TODAS, LOADING, ERROR } from "../types/tareasType";

const INITIAL_STATE = {
  tareas: {},
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return { ...state, loading: false, error: "", tareas: action.payload };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
