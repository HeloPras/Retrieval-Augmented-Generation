'use client'


import { useState } from "react"


const clicked = async(content:string)=>{


	try {

		const response = await fetch("http://localhost:3000/api/vectorEmbedding",
					     {method:"POST",
						     body:JSON.stringify({search:content,embeddingFor:"search"})})
						     const body = await response.json()
						     const embeddng = body.embeddng

						     if(!body.ok){
						      throw Error("Response was shit")
						     }

						     fetch("http://localhost:3000/api/searchquery",{method:"POST",body:JSON.stringify({embedding:embeddng})})

	} catch (error) {
							     console.log(error)
						     }

}

const SearchBar = () => {

	const [search,setSearch] = useState<string>("") 






	return (
		<>
		<div>
		<input className=" border h-5 " onChange={(e)=>{setSearch(e.currentTarget.value)}} type="text">	
		</input>
		<button onClick={()=>{clicked(search)}}>Search</button>
		</div>

		</>
	)
}

export default SearchBar
