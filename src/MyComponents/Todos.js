import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    const myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    };

    return (
        <div className="container mx-auto my-10 p-4" style={myStyle}>
            <h3 className="text-2xl font-semibold mb-6 text-center">Todos List</h3>
            {props.todos.length === 0 ? (
                <p className="text-center text-gray-500">No Todos to display</p>
            ) : (
                props.todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                ))
            )}
        </div>
    );
};