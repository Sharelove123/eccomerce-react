import { combineReducers } from "redux";
import {reducer1} from './productreudcer';
import amountreudcer from "./amountreudcer";
import { reducer3 } from "./cartreducer";
import { reducer4 } from "./snakbarreducer";

const reducers = combineReducers({
        amount:amountreudcer,
        prodname:reducer1,
        cart:reducer3,
        snakbarstate:reducer4
})

export default reducers;