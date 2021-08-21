import React, {useEffect, useState, useRef} from 'react'

export default function Search({ setSearch }) {
  const [searchQuery, setSearchQuery] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    const searchDebounce = setTimeout(() => {
      setSearch(searchQuery)
    }, 500)

    return () => clearTimeout(searchDebounce)
  }, [setSearch, searchQuery])

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    // <div className="relative px-4 md:px-52 py-4 bg-light-800 dark:bg-dark-600">
    <div className="w-full max-w-5xl m-auto p-4 sm:px-12 bg-light-800 dark:bg-dark-600">
      <div 
        className="relative bg-light-400 text-dark-200 dark:(bg-true-gray-800 text-light-800) shadow-md text-md rounded-full px-4 py-2 outline-none w-full"
      >
        <input 
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
          className="w-full pl-6 bg-light-400 text-dark-200 dark:(bg-true-gray-800 text-light-800) border-none focus:outline-none"
          placeholder="Search Movie" 
          type="text"
          required
        />  
        <span className="absolute focus:outline-none inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute focus:outline-none inset-y-0 right-0 flex items-center pr-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        )}
      </div>
    </div>
  )
}