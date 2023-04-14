import { combineReducers } from "redux";
import {reducer1} from './productreudcer';
import { reducer4 } from "./snakbarreducer";
import {cartReducer} from './newcart';

const reducers = combineReducers({
        prodname:reducer1,
        snakbarstate:reducer4,
        newcart:cartReducer
})

export default reducers;