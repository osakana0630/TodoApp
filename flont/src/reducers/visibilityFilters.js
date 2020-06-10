import {VisibilityFilters} from '../actions/todoApi';
import {SET_VISIBILITY_FILTER} from "../actions/todoApi"


//actionから受け取ったfilterをそのままstateとして返している
export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER :
            return action.filter;
        default:
            return state;
    }
};

