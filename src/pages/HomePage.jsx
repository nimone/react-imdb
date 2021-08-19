import React, { useState, useRef, useEffect, useReducer } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import Hero from '../components/Hero'
import Search from '../components/Search'
import TitleList from '../components/TitleList'
import Button from '../components/Button'

import TMDB from '../API'

const titlesReducer = (state, {type, payload}) => {
  switch(type) {
    case 'SET_TITLES':
      return payload
    case 'UPDATE_TITLES':
      return [...state, ...payload]
    default:
      throw new Error()
  }
}


function Home() {
  const { query } = useParams()
  const history = useHistory()
  const [searchQuery, setSearchQuery] = useState(query || "")
  const [page, setPage] = useState(1)

  const [titles, dispatch] = useReducer(titlesReducer, [])
  
  let heroTitle = titles && titles[0]

  useEffect(() => {
    async function fetchNewTitles(page, searchQuery) {
      const newTitles = await TMDB.getMoviesAndTV(page, searchQuery)

      page > 1 
      ? dispatch({ type: 'UPDATE_TITLES', payload: newTitles}) 
      : dispatch({ type: 'SET_TITLES', payload: newTitles}) 
    }
    fetchNewTitles(page, searchQuery)
  }, [page, searchQuery])

  const onSearch = query => {
    setPage(1)
    setSearchQuery(query)
    history.push("/search/" + query)
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
      {titles && 
        <TitleList 
          header={searchQuery ? "Search Results" : "Popular Today"}
          titles={titles}
        />
      }
      <div className="flex justify-center py-6 space-x-4">     
        <Button 
          onClick={() => setPage(page + 1)}
          text="Load More"
        />
      </div>
		</>
	)
}

export default Home