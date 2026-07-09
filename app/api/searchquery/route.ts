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

			},
			{
				$project:{

					_id:0,
					title:1,
					score:{$meta:"vectorSearchScore"}
				},
			}
		]).toArray()

		console.log('from searchquery api', result)



		return NextResponse.json({data:JSON.stringify(result)},{status:200})


	} catch (error) {

		return NextResponse.json({error:"Internal Server Error"},{status:500})

	}


}
