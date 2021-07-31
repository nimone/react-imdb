import React from 'react'
// import cardImg from '../assets/pizza-1.jpg'

export default function Card({ image, title, showTitle }) {
  return (
    <div className="relative text-center w-full h-full bg-black rounded-2xl overflow-hidden shadow-md hover:shadow-lg">
      {image ?
        <img className="w-full h-full object-cover" src={image} alt={`poster for ${title}`} />
        : <div className="text-gray-300 my-28">Image not available</div>
      }
      {(showTitle || !image) && 
        <h4 className="absolute bottom-0 w-full text-white backdrop-filter backdrop-brightness-50 backdrop-blur-sm p-1">{title}</h4>
      }
    </div>
  )
}