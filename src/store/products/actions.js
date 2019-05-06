import {
  createAction
} from "redux-actions";
import {
  LOAD_REQUEST,
  LOAD_FULFILLED,
  LOAD_REJECTED
} from "./action-types";

export const loadRequest = createAction(LOAD_REQUEST);
export const loadFulfilled = createAction(LOAD_FULFILLED);
export const loadRejected = createAction(LOAD_REJECTED);