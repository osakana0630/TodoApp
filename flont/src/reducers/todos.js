import {
    READ_TODOS,
    CREATE_TODO,
    DELETE_TODO,
    TOGGLE_TODO
} from "../actions/todoApi"
import _ from "lodash"

export const todos = (todo = {}, action) => {
    switch (action.type) {
        case READ_TODOS :

            return _.mapKeys(action.response.data, function (value, id) {
            value["completed"] = false;
            return value.id;
        });


        case CREATE_TODO :
            //データ型に合うように整形して、スプレッド構文でマージする
            const data = action.response.data;
            //読み込み時だけだと、リロードしないと反映されない。create時にもtodoにcompletedという要素を追加
            data["completed"] = false;
            return {
                ...todo,
                [data.id]: data
            };
        case DELETE_TODO :
            //アクションから渡されるデータ　 action →　　{type: "DELETE_TODO", id: 51}
            //idで該当のTodo削除する action.idで取れる
            delete todo[action.id];
            return {...todo};
        case TOGGLE_TODO :
            //現在のstate(todo)の中からアクションで受け取ったidと一致するものtodoを抽出し、completedの値を反転させてから、全てのstate(todo)を返す
            todo[action.id].completed = !(todo[action.id].completed);
            return {
                ...todo
            };

        default :
            return todo;
    }
};