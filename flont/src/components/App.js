import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="container">
            <TodoForm/>
            <TodoList/>
        </div>

    );
}

export default App;
