'use client'


import { useState } from "react"


const SearchBar = () => {

	const [search,setSearch] = useState<string>() 

  return (
    <>
	<div>
	<input className=" border h-5 " onChange={(e)=>{setSearch(e.currentTarget.value)}} type="text">	
	</input>
	</div>

    </>
  )
}

export default SearchBar
