import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import TitleDetails from '../components/TitleDetails'
import ActorList from '../components/ActorList'
import ActorDetails from '../components/ActorDetails'
import Loader from '../components/Loader'

import TMDB from '../API'

function TitlePage() {
	const { type, id } = useParams()
	const title = TMDB.getTitle(type, id)
	const actors = TMDB.getActors(type, id)
	const [loading, setLoading] = useState(true)
	const [selectedActorID, setSelectedActorID] = useState(null)
	const [selectedActor, setSelectedActor] = useState({})

	const fetchActor = async (id) => {
		setLoading(true)
		const actor = await TMDB.getActor(id)
		setSelectedActor(actor)
		setLoading(false)
	}

	useEffect(() => {
		if (!selectedActorID) return
		fetchActor(selectedActorID)
	}, [selectedActorID])

	return (
		<>
			{selectedActorID && 
				<ActorDetails 
					actor={selectedActor} 
					loading={loading}
					onClose={() => setSelectedActorID(null)} 
				/>
			}
			{title.data && <TitleDetails title={title.data} />}
			{actors && 
				<ActorList 
					header="Cast" 
					actors={actors} 
					onClick={setSelectedActorID} 
				/>
			}
			{!(title.data || actors) && <Loader />}
		</>
	)
}
export default TitlePage