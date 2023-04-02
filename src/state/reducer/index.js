import { combineReducers } from "redux";
import {reducer1} from './productreudcer';
import amountreudcer from "./amountreudcer";

const reducers = combineReducers({
        amount:amountreudcer,
        prodname:reducer1
})

export default reducers;