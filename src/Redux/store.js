import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import RootRedux from "./Reducers/RootReducer"
import { composeWithDevTools } from '@redux-devtools/extension';
const initailState={}
const middleware=[thunk]

// initailState the Object which contains all of data
export const store =createStore(RootRedux,initailState,composeWithDevTools(applyMiddleware(...middleware)))
