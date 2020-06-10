import { combineReducers } from "redux"
import { todos } from "./todos";
import { reducer as form } from "redux-form"
import { visibilityFilter } from "../reducers/visibilityFilters"

const rootReducer = combineReducers({todos, form, visibilityFilter});
export default rootReducer