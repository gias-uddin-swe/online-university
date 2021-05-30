import { createStore } from "redux";
import LoginReducers from "./../Reducers/LoginReducers";

export const LoginStore = createStore(LoginReducers);
