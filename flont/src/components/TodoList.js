import React, {Component} from "react"
import {connect} from "react-redux"
import {readTodo, deleteTodo} from "../actions/TodoAction";
import _ from "lodash"

class TodoList extends Component {

    //マウント時にAPIを叩くアクションクリエーターを実行し、todoの一覧を取得
    componentDidMount() {
        this.props.readTodo()
    }


//  async handleDelete () {
// }

    render() {

        const props = this.props;

        return (
            <React.Fragment>
                <h2 className="text-center mb-5">タスク一覧</h2>
                <div className="d-flex justify-content-center">
                    <ul>
                        {_.map(props.todos, todo => (
                            <li key={todo.id} className="my-3" style={{fontSize: "20px", listStyle: "none", textDecoration: todo.completed ? "line-through" : "none" }}>
                                <input type="checkbox" id={todo.id} name={todo.task}/>
                                <label htmlFor={todo.task} className="ml-3"> {todo.task}</label>
                                <button onClick={()=> this.props.deleteTodo(todo.id)} className="btn btn-danger ml-3">削除</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({todos: state.todos});
const mapDispatchToProps = ({readTodo, deleteTodo});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


