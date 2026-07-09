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




		return NextResponse.json({data:result},{status:200})


	} catch (error) {

		return NextResponse.json({error:"Internal Server Error"},{status:500})

	}


}
