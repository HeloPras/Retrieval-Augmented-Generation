'use client'


import { useEffect, useState } from "react"



const SearchBar = () => {


	const [search,setSearch] = useState<string>("") 
	const [movies,setMovies] = useState<{title:string,score:number}[]>([])


useEffect(()=>{
	console.log(movies)
},[movies])
	
	const clicked = async(content:string)=>{


		try {

			const response = await fetch("http://localhost:3000/api/vectorEmbedding",
						     {method:"POST",
							     body:JSON.stringify({search:content,embeddingFor:"search"})})
							     const body = await response.json()


							     const embeddng = body.embedding


							     const moviesResponse =await  fetch("http://localhost:3000/api/searchquery",{method:"POST",body:JSON.stringify({embedding:embeddng})})




								     const {data} = await  moviesResponse.json()

									const movieData = await JSON.parse(data)



								     setMovies(movieData)}




		catch (error) {
			console.log(error)
		}

	}







	return (
		<>
		<div>
		<input className=" border h-5 " onChange={(e)=>{setSearch(e.currentTarget.value)}} type="text">	
		</input>
		<button onClick={()=>{clicked(search)}}>Search</button>

		<div className="flex flex-col gap-5">
		{
		 movies.map((movie)=>{
				return(
					<p>
					{movie.title}, {movie.score}
					</p>
				)
			})
		}
		</div>

		</div>

		</>
	)
}

export default SearchBar
