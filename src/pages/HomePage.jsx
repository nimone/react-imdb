import React, { useState, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import Hero from '../components/Hero'
import Search from '../components/Search'
import TitleList from '../components/TitleList'
import Button from '../components/Button'

import TMDB from '../API'


function Home() {
  const { pageNumber, query } = useParams()
  const history = useHistory()
  const [searchQuery, setSearchQuery] = useState(query || "")
  const [page, setPage] = useState(pageNumber || 1)

  let titles = TMDB.getMoviesAndTV(page, searchQuery)
  
  let heroTitle = titles.data && titles.data[0]

  const onSearch = query => {
    setPage(1)
    setSearchQuery(query)
    history.push("/search/" + query)
  }
  const navigatePage = toPage => {
    setPage(toPage)
    history.push("/page/"+toPage)
  }
	return (
		<>
      {heroTitle && 
        <Hero 
          image={heroTitle.backdrop_path} 
          title={heroTitle.title} 
          description={heroTitle.overview}
          link={`/title/${heroTitle.media_type}/${heroTitle.id}`} 
        />
      }
      <Search onSearch={onSearch} />
      {titles.data && 
        <TitleList 
          header={searchQuery ? "Search Results" : "Popular Today"}
          titles={titles.data}
        />
      }
      <div className="flex justify-center py-6 space-x-4">
        {page > 1 &&
          <Button 
            onClick={() => navigatePage(page - 1)}
            text="< Previous Page"
          />
        }
        <Button 
          onClick={() => navigatePage(page + 1)}
          text="Next Page >"
        />
      </div>
		</>
	)
}

export default Home