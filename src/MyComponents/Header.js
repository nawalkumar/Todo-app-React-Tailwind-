import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link className="text-xl font-semibold text-white" to="/">
                    {props.title}
                </Link>
                <button
                    className="text-gray-600 md:hidden focus:outline-none"
                    type="button"
                    aria-label="Toggle navigation"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 5h16M4 12h16M4 19h16" />
                    </svg>
                </button>
                <div className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link className="text-gray-300 hover:text-gray-700" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text-gray-300 hover:text-gray-700" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true,
};

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired,
};