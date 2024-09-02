// components/Button.js
import React from 'react';

const Button = ({ type, className, children }) => (
  <button
    type={type}
    className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
  >
    {children}
  </button>
);

export default Button;
