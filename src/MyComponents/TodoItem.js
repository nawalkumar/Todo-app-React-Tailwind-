import React from 'react';

export const TodoItem = ({ todo, onDelete, onEdit }) => {
    return (
        <>
            <div className="bg-gray-400 p-4 mb-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">{todo.title}</h4>
                <p className="text-gray-600">{todo.desc}</p>
                <div className="mt-3 space-x-3">
                    <button
                        className="px-4 py-1 bg-red-700 text-white text-sm rounded hover:bg-red-600"
                        onClick={() => { onDelete(todo); }}
                    >
                        Delete
                    </button>
                    {/* <button
                        className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-500"
                        onClick={() => { onEdit(todo); }}
                    >
                        Edit
                    </button> */}
                </div>
            </div>
            <hr className="my-4 border-gray-300" />
        </>
    );
};