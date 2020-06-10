import React, {Component} from "react"
import {connect} from "react-redux"
import {createTodo} from "../actions/todoApi";
import {Field, reduxForm} from "redux-form";


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }


    //input要素の描画を担当するメソッド
    renderField(field) {
        const {input, label, type, meta: {touched, error }} = field;
        return (
            <div className="mt-5">
                <label htmlFor={label} ></label>
                <input {...input} type={type} id={label} placeholder={label} autoComplete="off" className="form-control"/>
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    //formがsubmitされた=イベントをきっかけにhandleSubmit(イベントハンドラ)が呼ばれ、その処理の中でこの関数が呼ばれる。
    //handleSubmitが引数としてvalueを渡してくれる
    async onSubmit(values) {
        await this.props.createTodo(values);

    }


    render() {
        //reduxFormでTodoFormをデコレイトするとpropsとして受け取ることができる
        const {handleSubmit, pristine, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="form-group">
                <div>
                    <Field label="Task" name="task" id="task" type="text" component={this.renderField}/>
                </div>
                <div className="d-flex justify-content-end my-1">
                    {/*pristine　→　　formに何も入力されていないとtrue */}
                    <input type="submit" value="追加" disabled={ pristine || submitting} className="btn btn-primary"/>
                </div>
            </form>

        )
    }
}

const validate = values => {
    const errors = {};
    if (!values.task) errors.task = "タスクを入力してください";
    return errors
};


const mapDispatchToProps = ({createTodo});


export default connect(null, mapDispatchToProps)(
    reduxForm({validate, form: "TodoForm"})(TodoForm)) //フォームにしたいコンポーネントを reduxForm 関数使って修飾。これによって指定したコンポーネントの入力フィールドがreduxのstoreに格納され、redux-form が提供する各種関数がコンポーネントの props として設定される。

