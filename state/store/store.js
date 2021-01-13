import { initialState } from "./initialState";
import {createStore} from "redux"
import rootReducer from "../reducers/rootReducer"

export const store = createStore(rootReducer, initialState)