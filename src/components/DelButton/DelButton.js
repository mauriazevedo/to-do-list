import React from "react";

function DelButton(props) {
    const handleDelete = () => {
        props.delTask(props.index);
    }

    return (
        <button onClick={handleDelete}>{props.buttonText}</button>
    );
}

export default DelButton;