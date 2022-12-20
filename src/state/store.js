import { applyMiddleware, creaTestore } from "redux";
import thunk from "redux-thunk";
import reducers from "./action-creators/reducers";

export const store = creaTestore(reducers, {},applyMiddleware(thunk))
