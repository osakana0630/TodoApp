import React, {Component} from "react"
import {connect} from "react-redux"
import {
    readTodo,
    deleteTodo,
    toggleTodo,
    setVisibilityFilter
} from "../actions/todoApi";
import _ from "lodash"


class TodoList extends Component {

    //マウント時にAPIを叩くアクションクリエーターを実行し、todoの一覧を取得
    componentDidMount() {
        this.props.readTodo()
    }


    render() {

        const props = this.props;

        return (
            <React.Fragment>
                <h2 className="text-center mb-5">タスク一覧</h2>

                <div className="d-flex justify-content-center">
                    <button onClick={() => props.setVisibilityFilter("SHOW_ALL")}>全て</button>
                    <button onClick={() => props.setVisibilityFilter("SHOW_COMPLETED")}>完了済み</button>
                    <button onClick={() => props.setVisibilityFilter("SHOW_ACTIVE")}>未完了</button>
                </div>
                <hr/>


                <div className="d-flex justify-content-center">
                    <ul>
                        {_.map(props.todos, todo => (
                            <li key={todo.id} className="my-3" style={{fontSize: "20px"}}>
                                <label htmlFor={todo.task}
                                       className="ml-3"
                                       style={{textDecoration: todo.completed ? "line-through" : "none"}}
                                       onClick={() => props.toggleTodo(todo.id)}
                                > {todo.task}</label>
                                <button onClick={() => props.deleteTodo(todo.id)} className="btn btn-danger ml-3">削除
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL" :
            return todos;
        case "SHOW_COMPLETED" :
            return _.pickBy(todos, 'completed');
        case "SHOW_ACTIVE" :
            return _.pickBy(todos, t => !t.completed );
        default :
            return todos;
    }
};


const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = ({readTodo, deleteTodo, toggleTodo, setVisibilityFilter});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


