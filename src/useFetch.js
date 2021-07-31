import { useState, useEffect, useRef } from 'react'

function useFetch(url, options={}) {
	const cache = useRef({})
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {		
		if (!url) return
		const abortController = new AbortController()

		const fetchData = async () => {
			if (cache.current[url]) {
				console.log("serving cached response for", url)
				setData(cache.current[url])
				setIsLoading(false)
				setError(null)
			} else {
				try {
					const res = await fetch(url, { ...options, signal: abortController.signal })
					if (!res.ok) throw Error("Could not fetch from the resource")
					const fetchedData = await res.json()

					cache.current[url] = fetchedData
					setData(fetchedData)
					setIsLoading(false)
					setError(null)
				} catch (err) {
					if (err.name === "AbortError") {
						console.log("Fetch Aborted!")
					} else {
						setError(err.message)
						setIsLoading(false)
					}
				}
			}
		}

		fetchData()

		return () => abortController.abort()
	}, [url])

	return { data, isLoading, error }
}

export default useFetch