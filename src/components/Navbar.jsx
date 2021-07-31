import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ darkMode, setDarkMode, brand }) {
  return (
    <nav className={`flex justify-around items-center py-2 sticky z-50 top-0 backdrop-filter ${darkMode ? "backdrop-brightness-75" : "backdrop-brightness-125"} backdrop-blur-lg w-full h-12`}>
      <Link to="/">
        {/*<h2 className="text-xl ml-4 md:ml-52 font-bold text-white">{brand}</h2>*/}
        <h2 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>{brand}</h2>
      </Link>
      <div className="flex space-x-12">
        <img
          className="w-32" 
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
          alt="the moviedb attribution" 
        />
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`${darkMode ? "text-blue-300" : "text-yellow-500"} focus:outline-none`}
        >
          {darkMode 
            ? <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            : <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          }
        </button>
      </div>
    </nav>
  )
}