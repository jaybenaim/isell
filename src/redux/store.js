import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";
import { createCart } from "../redux/actions";

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
// store.dispatch(createCart("10001"));
export default store;
