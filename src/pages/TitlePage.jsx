import React from 'react'
import { useParams } from 'react-router-dom'

import TitleDetails from '../components/TitleDetails'
import ActorList from '../components/ActorList'
import Loader from '../components/Loader'

import TMDB from '../API'

function TitlePage() {
	const { type, id } = useParams()
	const title = TMDB.getTitle(type, id)
	const actors = TMDB.getActors(type, id)

	return (
		<>
			{title.data && <TitleDetails title={title.data} />}
			{actors && <ActorList header="Cast" actors={actors} />}
			{!(title.data || actors) && <Loader />}
		</>
	)
}
export default TitlePage