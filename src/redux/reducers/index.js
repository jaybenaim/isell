import { combineReducers } from "redux";
import addUser from "./addUser";
import addItem from "./addItem";

export default combineReducers({ addUser, addItem });
