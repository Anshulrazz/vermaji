// components/Input.js
import React from 'react';

const Input = ({ id, type = 'text', placeholder }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  />
);

export default Input;
