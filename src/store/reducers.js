import {
  combineReducers
} from "redux";
import auth from "./auth/reducers"
import products from './products/reducers'

const appReducer = combineReducers({
  auth,
  products
});

export default (state, action) => appReducer(state, action);