import { combineReducers } from "redux";
import handleItem from "./handleItem";
import createCart from "./createCart";

const rootReducer = combineReducers({ handleItem, createCart });

export default rootReducer;
