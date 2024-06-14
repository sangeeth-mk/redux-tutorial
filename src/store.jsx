import { combineReducers, createStore } from "redux";
import countReducer from "./count";

const reducer = combineReducers({
    counter:countReducer
}
)

export const store = createStore(reducer)

export default store;