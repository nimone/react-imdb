import useFetch from './useFetch'

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_BASE_URL = "https://api.themoviedb.org/3",
TRENDING_BASE_URL = `${API_BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}`,
SEARCH_BASE_URL = `${API_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&language=en-US`,
IMAGE_BASE_URL = "https://image.tmdb.org/t/p",
// posterImgURL = "https://image.tmdb.org/t/p/original",	

TMDB = {
	getMoviesAndTV: async(page, searchTerm="") => {
		const resp = await fetch(searchTerm 
			? `${SEARCH_BASE_URL}&query=${searchTerm}&page=${page}`
			: `${TRENDING_BASE_URL}&page=${page}`
		)
		const titles = await resp.json()
		
		titles.results = titles.results
			.filter(res => res.media_type !== "person")
			.map(title => ({
				...title,
				backdrop_path: title.backdrop_path ? IMAGE_BASE_URL + "/w1280" + title.backdrop_path : null,
				poster_path: title.poster_path ? IMAGE_BASE_URL + "/w342" + title.poster_path : null,
				title: title.media_type === "movie" ? title.title : title.name 
			}))

		return titles
	},
	getTitle: (type, id) => {
		const title = useFetch(`${API_BASE_URL}/${type}/${id}?api_key=${TMDB_API_KEY}`)

		if (title.data) {
			title.data = {
				...title.data,
				backdrop_path: title.data.backdrop_path ? IMAGE_BASE_URL + "/w1280" + title.data.backdrop_path : null,
				poster_path: title.data.poster_path ? IMAGE_BASE_URL + "/w500" + title.data.poster_path : null,
				name: type === "movie" ? title.data.title : title.data.name,
				runtime: title.data.runtime !== undefined ? title.data.runtime : title.data.episode_run_time[0],
				release_date: title.data.release_date ? title.data.release_date : title.data.first_air_date,
			}
		}
		return title
	},
	getActors: (type, id) => {
		const credits = useFetch(`${API_BASE_URL}/${type}/${id}/credits?api_key=${TMDB_API_KEY}`)
		let actors

		if (credits.data) {
			actors = credits.data.cast.map(actor => ({
				...actor,
				profile_path: actor.profile_path ? IMAGE_BASE_URL + "/w185" + actor.profile_path: null,
			}))
		}
		return actors
	},
	getActor: async (id) => {
		const respData = await fetch(`${API_BASE_URL}/person/${id}?api_key=${TMDB_API_KEY}`)
		const respLinks = await fetch(`${API_BASE_URL}/person/${id}/external_ids?api_key=${TMDB_API_KEY}`)

		const actor = {
			data: await respData.json(),
			links: await respLinks.json(),
		} 

		return {
			links: {
				imdb:
					actor.links.imdb_id
					? "http://imdb.com/name/" + actor.links.imdb_id : null,
				twitter: 
					actor.links.twitter_id 
					? "http://twitter.com/" + actor.links.twitter_id : null,
				instagram:
					actor.links.instagram_id 
					? "http://instagram.com/" + actor.links.instagram_id : null,
				facebook:
					actor.links.facebook_id
					? "http://facebook.com/" + actor.links.facebook_id : null,
			},
			data: {
				...actor.data, 
				profile_path: 
					actor.data.profile_path 
					? IMAGE_BASE_URL + "/h632" + actor.data.profile_path : null,
			}
		}
	}
}

export default TMDB