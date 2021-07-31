import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ darkMode, image, title, link, description}) {
  return (
    <div className="relative h-2/3 bg-cover bg-fixed bg-center" style={{backgroundImage: `url(${image})`}}>
      <div className={`w-full absolute bottom-0 ${darkMode && "bg-gradient-to-t from-gray-900 to-transparent"}`}>
        <div className="sm:3/2 md:w-1/2 mx-8 md:ml-56 py-10">
          <Link to={link}>
            <h3 className={`text-2xl font-bold text-white mb-5`}>{title}</h3>
          </Link>
          <p className={`text-white text-md`}>{description}</p>
        </div>
      </div>
    </div>
  )
}