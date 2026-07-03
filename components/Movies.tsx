

import { Suspense } from "react"

const getData = async () => {
	try {
		const response = await fetch("http://localhost:3000/api/home")
			if(!response.ok){
			console.log("Failed")
		}
		const data = await response.json()
		if(data){
			console.log("this sithe data from home", data)
		}
		return data
	} catch (err) {}
}



const Movies = async () => {
	const response = await getData()
	const movies:{title:string}[] = response?.movies || [{title:""}]


	return (
		<div>
		<Suspense fallback={<>Loading</>}>
		{movies.map((movie)=>{
			return(
				<>
					<p key = {movie.title}>{movie.title}</p>
				</>)})}
				</Suspense>

				</div>
	)
}

export default Movies
