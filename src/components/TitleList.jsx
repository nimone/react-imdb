import React, { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card'
import FlexContainer from './FlexContainer'

export default function TitleList({ header, titles, loadMore, hasMore }) {
  const observer = useRef()

  const lastTitleRef = useCallback(node => {
    if (!titles) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) loadMore()
    })
    if (node) observer.current.observe(node)
  }, [titles, hasMore])

  return (
    <FlexContainer title={header}>
      {titles.map((t, i) => 
        <div 
          ref={(titles.length === i + 1) ? lastTitleRef : null}
          className="relative m-2 w-44 hover:opacity-90" 
          key={t.id}
        >
          <div className="flex justify-center items-center w-8 h-8 absolute top-0 right-0 p-1 m-1 z-2 text-sm font-bold rounded-full bg-dark-800/70 text-white">
            {t.vote_average ? t.vote_average : "N/A"}
          </div>
          <Link to={`/title/${t.media_type}/${t.id}`}>
            <Card
              id={t.id} 
              title={t.title}
              image={t.poster_path}
              transition 
            />
          </Link>
        </div>
      )}
    </FlexContainer>
  )
}