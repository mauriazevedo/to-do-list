import React from 'react';
import Task from '../Task/Task';
import './List.css';

function List(props) {
    return (
        <ul>
            {props.itens.map((item, index) => <li key={index}>
                <Task index={index} item={item} del={props.onDel}/>
            </li>)}
        </ul>
    );
}

export default List;