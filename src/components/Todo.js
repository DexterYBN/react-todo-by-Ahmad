import React from 'react';

const Todo = (props) => {
    return (
        <div className={`todo ${props.item.done ? 'selected' : ''}`}>
            <div className='favorite'>
                <button onClick={() => props.makeDone(props.index)}>★</button>
            </div>
            <div className='todo-text'>
                {props.item.text}
            </div>
            <div className='actions'>
                <button onClick={() => props.deleteTodo(props.index)}>✖</button>
            </div>
        </div>
    );
};

export default Todo;