import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req:NextRequest){

	const ai = new GoogleGenAI({})



	try {

		const body =await req.json()
		const movies = body.movies

		// console.log("From vectorEmbedding API",movies)

		if(!movies || movies.length == 0){return}

		let n = 0

		for(let movie of movies ){

			if(movie.vectorEmbedding)continue;

			const embedding = await ai.models.embedContent({

				model:'gemini-embedding-1',
				contents:movie.content
			})

			if(embedding){
				console.log("this is the embedding",embedding)		
			}

			break;




		}



		return NextResponse.json({status:200})

	} catch (error) {

		return NextResponse.json({satus:400,error:error})

	}
}
