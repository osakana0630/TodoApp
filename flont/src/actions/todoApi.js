import axios from "axios"


export const READ_TODOS = "READ_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};




const ROOT_URL = "http://localhost:3000/todos";

export const readTodo = () => async dispatch => {
const response = await axios.get(ROOT_URL);
dispatch ({type: READ_TODOS, response })
};

export const createTodo = (values) => async dispatch => {
    const response = await axios.post(ROOT_URL, values);
    dispatch ({type: CREATE_TODO, response })
};

export const deleteTodo = (id) => async dispatch => {
    await axios.delete(`${ROOT_URL}/${id}`);
    dispatch ({type: DELETE_TODO, id})
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
};

//filterを受け取って返すだけの単純アクションクリエーター
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    };
};







