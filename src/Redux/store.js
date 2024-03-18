import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { coffiereducer } from "./coffiereducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const rootreducer = combineReducers({
    coffiereducer
})



export const store = legacy_createStore(rootreducer, applyMiddleware(logger,thunk));


