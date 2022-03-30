import { createStore, combineReducers } from "redux";
import initialData from "./initialData";
import { categoryReducer } from "./reducers";
import { addPathReducer } from "./reducers";

const reducers = combineReducers({
    selectedCaterory: categoryReducer,
    addPathName: addPathReducer
});

export default createStore(
    (state, action) => reducers(state, action),
    initialData
);