import {READ_TODOS, CREATE_TODO, DELETE_TODO} from "../actions/TodoAction"
import _ from "lodash"

export const todos = (todo =  {}, action) => {
    switch (action.type) {
        case READ_TODOS :
            return _.mapKeys(action.response.data, "id");

        case CREATE_TODO :
        //上のデータ型に合うように整形して、スプレッド演算子でマージする
            const data = action.response.data;
            //todoごとに完了・未完了を区別するために、completedという要素を追加
            data["completed"]  = false;
            return {
                ...todo,
                [data.id]: data
            };
        case DELETE_TODO :
            //アクションから渡されるデータ　 action →　　{type: "DELETE_TODO", id: 51}
            //idで該当のTodo削除する action.idで取れる
            delete todo[action.id];
            return {...todo};
        default :
            return todo;
    }
} ;