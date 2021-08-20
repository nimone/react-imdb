import React from 'react'

import Card from './Card'
import FlexContainer from './FlexContainer'

export default function ActorList({ header, actors }) {
  return (
    <FlexContainer title={header}>
      {actors.map(actor => 
        <div className="m-2 w-44" key={actor.credit_id}>
          <Card
            id={actor.id} 
            showTitle={true}
            title={actor.name}
            image={actor.profile_path} 
          />
        </div>
      )}
    </FlexContainer>
  )
}