import React from 'react'

function Loader() {
	return (
		<div className="flex space-x-2 p-5 justify-center items-center">
			<div 
				style={{animationDelay: "0.1s"}}
				className="bg-true-gray-500 dark:bg-true-gray-700 p-2 w-6 h-6 rounded-full animate-bounce"></div>
			<div 
				style={{animationDelay: "0.2s"}}
				className="bg-true-gray-600 p-2 w-6 h-6 rounded-full animate-bounce"></div>
			<div 
				style={{animationDelay: "0.3s"}}
				className="bg-true-gray-700 dark:bg-true-gray-500 p-2 w-6 h-6 rounded-full animate-bounce"></div>
		</div>
	)
}
export default Loader