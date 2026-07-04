import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";




async function POST(req:NextRequest){

	const ai = new GoogleGenAI({})

	try {

		const body = req 

		// if(!body || body.length == 0){return}
		//
		// for(let data of body){
		//
		// 	if(data.vectorEmbedding)continue;
		//
		// 	const embedding = ai.models.embedContent({
		//
		// 		model:'gemini-embedding-1',
		// 		contents:data.content
		// 	})
		//
		// 	console.log("this is the embedding",embedding)		

		// }
		//

		console.log(body)

	} catch (error) {


	}
}
