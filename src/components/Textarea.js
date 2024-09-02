// components/Textarea.js
import React from 'react';

const Textarea = ({ id, placeholder, className }) => (
  <textarea
    id={id}
    placeholder={placeholder}
    className={`block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`}
  />
);

export default Textarea;
