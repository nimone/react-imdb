import React from 'react'

function Button({ onClick, text }) {
	return (
    <button 
      onClick={onClick}
      className="text-lg bg-light-800 border border-dark-300 text-dark-300 dark:(bg-dark-300 text-light-500) focus:outline-none rounded-md px-4 py-1"
    >{text}
    </button>
	)
}
export default Button