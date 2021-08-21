import React, { useState, useEffect, useReducer } from 'react'

import Hero from '../components/Hero'
import Search from '../components/Search'
import TitleList from '../components/TitleList'
import Button from '../components/Button'
import Loader from '../components/Loader'

import TMDB from '../API'

const initialTitlesState = { 
  page: 0,
  data: [],
  totalPages: 0,
  totalTitles: 0,
}

const titlesReducer = (state, {type, payload}) => {
  switch(type) {
    case 'SET_INITIAL':
      return initialTitlesState

    case 'ADD_TITLES':
      return {
        page: state.page + 1,
        totalPages: payload.total_pages,
        totalTitles: payload.total_results,
        // data: [...state.data, ...payload],

        // Handle duplicates? So that react doesn't complain about same keys
        data: [
          ...new Map(
            [...state.data, ...payload.results].map(el => [el.id, el])
          ).values()
        ],
      }

    default:
      throw new Error()
  }
}


function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [titles, dispatch] = useReducer(titlesReducer, initialTitlesState)
  let heroTitle = titles.data && titles.data[0]
 

  useEffect(() => {
    dispatch({ type: 'SET_INITIAL' })
    fetchTitles(1, searchQuery)
  }, [searchQuery])

  const fetchTitles = async (page, searchTerm="") => {
    setLoading(true)
    const newTitles = await TMDB.getMoviesAndTV(page, searchQuery)
    dispatch({ type: 'ADD_TITLES', payload: newTitles}) 
    setLoading(false)
  }

  const handlePagination = () => {
    fetchTitles(titles.page + 1)
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
      <Search setSearch={setSearchQuery} />
      {titles.data && 
        <TitleList 
          loadMore={handlePagination}
          hasMore={titles.totalPages > titles.page}
          header={searchQuery ? "Search Results" : "Popular Today"}
          titles={titles.data}
        />
      }
      {loading && <Loader/>}
      <div className="flex justify-center py-6 space-x-4">     
        {!(loading || titles.totalPages > titles.page) &&
          <h4 className="text-dark-50 text-xl uppercase">The End</h4>
        }
      </div>
		</>
	)
}

export default Home