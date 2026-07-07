import {db} from "@/Util/Mongo/MongoClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest){

	const body = await req.json()

	if(body){
		console.log("this is the console from searchquery route  ",body)
	}

	const queryVector = body

	try {

		// const result = db.collection("movies").aggregate([
		// 	{
		// 		$vectorSearch:{
		// 			index: "vector_index",
		// 			path: "vectorEmbedding",
		// 			queryVector:
		//
		// 		}
		// 	}
		// ])



	} catch (error) {

	}


	return NextResponse.json({status:200})
}
