import {
  LOAD_REQUEST,
  LOAD_FULFILLED,
  LOAD_REJECTED
} from "./action-types";

const INITIAL_STATE = {
  loading: false,
  list: null,
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
        list: null,
        error: null
      };
    }
    case LOAD_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null
      };
    }
    case LOAD_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    default:
      return state;
  }
}