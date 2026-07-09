import {db} from "@/Util/Mongo/MongoClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest){

	const body = await req.json()

	const queryVector = body.embedding

	try {

		const result =await  db.collection("movies").aggregate([
			{
				$vectorSearch:{
					index: "movies_vector_index",
					path: "vectorEmbedding",
					queryVector:queryVector,
					numCandidates:100,
					limit:5

				}
			}
		]).toArray()

		if(result){
		console.log("This is the result from search query",result)
		}

		console.log("Result finish")



	} catch (error) {

		console.log("Faced an error", error)

	}


	return NextResponse.json({status:200})
}
