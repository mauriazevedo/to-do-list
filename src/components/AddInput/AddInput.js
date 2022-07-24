import React, { useState } from 'react';
import './AddInput.css';

function AddInput(props) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if(inputValue !== ''){
            props.onAdd(inputValue);
        }
    }

    return (
        <div className='add-input'>
            <input
                placeholder={props.placeholder}
                onChange={event => setInputValue(event.target.value)}
                onBlur={event => event.target.value = ''}
            ></input>
            <button onClick={handleAdd}>{props.buttonText}</button>
        </div>
    );
}

export default AddInput;