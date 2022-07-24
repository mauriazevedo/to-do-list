import React from "react";
import DelButton from '../DelButton/DelButton';
import './Task.css';

function Task(props) {
    return (
        <div className="task">
            <div>
                <input type='checkbox' id={`task-${props.index}`}/>
                <label htmlFor={`task-${props.index}`}>{props.item}</label>
            </div>
            <DelButton buttonText='Del' index={props.index} delTask={props.del}/>
        </div>
    );
}

export default Task;