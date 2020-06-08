import {combineReducers} from "redux"
import {todos} from "./todos";
import {reducer as form} from "redux-form"

const rootReducer = combineReducers({todos, form});
export default rootReducer