import React, {useState} from "react";
import List from '../../components/List/List';
import AddInput from '../../components/AddInput/AddInput';
import './Todo.css';

function Todo() {

    const [tasks, setTask] = useState([]);

    const addTask = (newTask) => {
        setTask([...tasks, newTask]);
    }

    const delTask = (index) => {
        tasks.splice(index, 1);
        setTask([...tasks]);
    }

    return (
        <div className='todo-list'>
            <h1>To-do List</h1>
            <AddInput buttonText='Add' onAdd={addTask} placeholder='Adicionar Task'/>
            <List itens={tasks} onDel={delTask}/>
        </div>
    );
}

export default Todo;