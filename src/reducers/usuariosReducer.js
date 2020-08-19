import { GET_ALL_USERS, LOADING, ERROR } from "../types/usuariosType";

const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, loading: false, usuarios: action.payload };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
