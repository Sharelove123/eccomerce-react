import { combineReducers } from "redux";
import {reducer1} from './productreudcer';
import { reducer4 } from "./snakbarreducer";
import {cartReducer} from './newcart';
import {reducerForremoveitem} from './removeitemlistreducer';

const reducers = combineReducers({
        prodname:reducer1,
        snakbarstate:reducer4,
        newcart:cartReducer,
        removeitemlist:reducerForremoveitem
})

export default reducers;