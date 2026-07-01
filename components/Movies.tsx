import { Suspense } from "react"

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/home")
    if(!response.ok){
        console.log("Failed")
    }
    const data = await response.json()
    if(data){
        console.log(data)
    }
    return data
  } catch (err) {}
}

const Movies = async () => {
  const movie = await getData()
  console.log(movie)

  return (
    <div>
      <Suspense fallback={<>Loading</>}>
        {/* {movie.map((movie)=>{})} */}
        Hello
      </Suspense>
    </div>
  )
}

export default Movies
