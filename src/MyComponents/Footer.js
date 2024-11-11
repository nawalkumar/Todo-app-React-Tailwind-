import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-3">
            <p className="text-center">
                &copy; {new Date().getFullYear()} MyTodosList.com
            </p>
        </footer>
    );
};
