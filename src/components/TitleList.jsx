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
          className="m-2 w-44 hover:opacity-90" 
          key={t.id}
        >
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