import React from 'react'
// import cardImg from '../assets/pizza-1.jpg'

export default function Card({ image, title, showTitle, transition }) {
  return (
    <div className="relative text-center w-full h-full bg-true-gray-400 dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md">
      {image ?
        <img 
          className={`w-full h-full object-cover ${transition ? "transition duration-500 ease-out transform hover:(shadow-lg scale-120)" : ""}`} 
          src={image} alt={`poster for ${title}`} 
        />
        : <div className="text-dark-50 my-28">Image not available</div>
      }
      {(showTitle || !image) && 
        <h4 className="absolute bottom-0 w-full text-white backdrop-filter backdrop-brightness-50 backdrop-blur-sm p-1">{title}</h4>
      }
    </div>
  )
}