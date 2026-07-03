import { mongoClient } from "@/Util/Mongo/client"
import { NextResponse } from "next/server"



interface movieTitle {
	title:string
}

export async function GET(){
    try {
        
        const movies = await mongoClient.db('Movies').collection('movies').find<movieTitle[]>({}).toArray()

        console.log(movies)
	return NextResponse.json({ status: 200,movies:movies})
    } catch (error) {
        console.error(error) 
    }
}
