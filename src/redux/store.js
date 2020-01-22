import { createStore } from "redux";
import { userDataReducer } from "./reducers/addUser";
import { addItemToCartReducer } from "./reducers/addItem";

export default createStore(addItemToCartReducer);
