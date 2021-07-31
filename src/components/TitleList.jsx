import React from 'react'
import { Link } from 'react-router-dom'

import Card from './Card'
import FlexContainer from './FlexContainer'

export default function TitleList({ header, titles }) {
  return (
    <FlexContainer title={header}>
      {titles.map(t => 
        // <div className="m-2 w-52 sm:w-44 h-74 sm:h-64 hover:opacity-90" key={t.id}>
        <div className="m-2 w-44 hover:opacity-90" key={t.id}>
          <Link to={`/title/${t.media_type}/${t.id}`}>
            <Card
              id={t.id} 
              title={t.title}
              image={t.poster_path} 
            />
          </Link>
        </div>
      )}
    </FlexContainer>
  )
}