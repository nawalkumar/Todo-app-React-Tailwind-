import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container mx-auto my-6 p-6 bg-gray-300 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold mb-4">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                        id="title"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">Todo Description</label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                        id="desc"
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Add Todo
                </button>
            </form>
        </div>
    );
}
