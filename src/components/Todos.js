import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div className='todos'>
            {props.todos.map((item, index) => {

                return (
                    <Todo
                        key={index}
                        item={item}
                        index={index}
                        makeDone={props.makeDone}
                        deleteTodo={props.deleteTodo}
                    />
                )

            })}</div>
    );
};

export default Todos;