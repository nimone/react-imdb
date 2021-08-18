import React, {useState} from 'react'

import Card from './Card'

function TitleDetails({ title }) {
  const [showFullPlot, setShowFullPlot] = useState(false)
	return (
    <div 
      className="md:h-5/6 bg-fixed bg-cover bg-center py-8 px-8 md:px-24" 
      style={{backgroundImage: `url(${title.backdrop_path})`}}
    >
    	<div className="w-full flex flex-col sm:flex-row items-center sm:items-start rounded-2xl p-2 shadow-xl backdrop-filter backdrop-brightness-75 dark:backdrop-brightness-50 backdrop-blur-sm">
      	<div className="w-auto sm:w-80 object-cover">
      		<Card image={title.poster_path} title={title.name} />
      	</div>
      	<div className="flex-1 px-2 sm:px-8 py-4 space-y-3 text-white dark:text-light-800">
      		<a href={title.homepage}>
      			<h2 className="text-3xl font-bold text-light-500">{title.name}</h2>
      		</a>
      		<div className="flex flex-wrap">
      			{title.genres.map(genre => (
      				<span key={genre.id} className="px-2 m-1 rounded-full border-2 border-light-800">{genre.name}</span>
      			))}
      		</div>
      		<div>
      			<h3 className="text-md uppercase">Plot</h3>
            <div className="text-sm">
              {title.overview.length > 200 ? (
                <>
            			<p onClick={() => setShowFullPlot(true)} className={`${showFullPlot && "hidden"} inline`}>{title.overview.substring(0,200)}</p>
                  <p onClick={() => setShowFullPlot(false)} className={`${!showFullPlot && "hidden"} inline`}>{title.overview}</p>
                  <span 
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setShowFullPlot(!showFullPlot)}
                  >{showFullPlot ? " less" : " ...more"}
                  </span>
                </>
                ) : <p className="inline">{title.overview}</p> 
              }
            </div>
      		</div>
      		<div className="flex justify-center space-x-3 text-center">
      			<div>
      				<h3 className="text-md uppercase mb-2">Rating</h3>
      				<span className="rounded-full bg-light-800 p-1.5 text-dark-800">
                {title.status === "Released" ? title.vote_average : "N/A"}
              </span>
      			</div>    			
      		</div>
      	</div>
      </div>
    </div>
	)
}
export default TitleDetails