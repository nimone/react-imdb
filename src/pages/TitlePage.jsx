import React from 'react'
import { useParams } from 'react-router-dom'

import TitleDetails from '../components/TitleDetails'
import ActorList from '../components/ActorList'
import BreadCrumb from '../components/BreadCrumb'

import TMDB from '../API'

function TitlePage({darkMode}) {
	const { type, id } = useParams()
	const title = TMDB.getTitle(type, id)
	const actors = TMDB.getActors(type, id)

	return (
		<>
			{title.data && (
				<>
{/*				<BreadCrumb
					darkMode={darkMode} 
					paths={[
						{name: "home", location:"/"}, 
						{name: title.data.title, location: `/title/${type}/${id}`}
					]} 
				/>*/}
					<TitleDetails darkMode={darkMode} title={title.data} />
				</>
				)
			}
			{actors && <ActorList header="Actors" actors={actors} />}
		</>
	)
}
export default TitlePage