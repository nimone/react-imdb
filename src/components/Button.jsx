import React from 'react'

function Button({darkMode, onClick, text}) {
	return (
    <button 
      onClick={onClick}
      className={`text-lg ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-300 border-2 border-gray-700 text-gray-700"} focus:outline-none rounded-md px-4 py-1`}
    >{text}
    </button>
	)
}
export default Button