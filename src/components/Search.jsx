import React, {useRef} from 'react'

export default function Search({ darkMode, onSearch }) {
  const searchQuery = useRef("")

  const handleSubmit = e => {
    e.preventDefault()
    // handleSearch(searchQuery.current.value)
    onSearch(searchQuery.current.value)
  }

  return (
    <div className={`relative px-4 md:px-52 py-4 ${darkMode ? "bg-gray-900": "bg-gray-300"}`}>
      <form 
        onSubmit={handleSubmit} 
        className={`relative ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-300 text-gray-800"} shadow-md text-md rounded-full px-4 py-2 outline-none w-full`}
      >
        <input 
          ref={searchQuery}
          className={`w-full ${darkMode ? "bg-gray-800 text-gray-300": "bg-gray-300 text-gray-800"} border-none focus:outline-none`}
          placeholder="Search Movie" 
          type="text"
        />  
        <button type="submit" className="absolute focus:outline-none inset-y-0 right-0 flex items-center pr-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button> 
      </form>
    </div>
  )
}