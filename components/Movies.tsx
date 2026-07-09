

import { Suspense } from "react"

const getData = async () => {
	try {

		const response = await fetch("http://localhost:3000/api/movie")
			if(!response.ok){
			console.log("Failed")
		}
		const data = await response.json()
		if(data){
			// console.log("this sithe data from home", data)
		}
		return data
	} catch (err) {}
}


const embedData = async (data:mongoFile[])=>{

	try {

		fetch("http:/localhost:3000/api/vectorEmbedding",{method:"POST",body:JSON.stringify({data,"embeddingFor":"database"})}) 	

	} catch (error) {

		console.error(error)
	}


}



const Movies = async () => {
	const response = await getData() || []
	// embedData(response)




	const movies:mongoFile[] = response?.movies || []

	return (
		<div>
		<Suspense fallback={<>Loading</>}>
		{/* {movies.map((movie)=>{ */}
		{/* 	return( */}
		{/* 		<> */}
		{/* 		<p key = {movie.title}>{movie.title}</p> */}
		{/* 		</>)})} */}
				</Suspense>

				</div>
	)
}

export default Movies
