import { mongoClient } from "@/Util/Mongo/MongoClient";
import { EmbedContentResponse, GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";






export async function POST(req:NextRequest){

	const ai = new GoogleGenAI({})

	async function embed(content:string){

		try{

			const response  = await ai.models.embedContent({
				model:'gemini-embedding-2',
				contents:content
			})

			if(response){
				return response.embeddings

			}

		}
		catch(error){
		}

		return 

	}

	try {

		const body =await req.json()


		const embeddingFor = body.embeddingFor

		if(embeddingFor == 'database')
			{


				const movies = body.movies

				// console.log("From vectorEmbedding API",movies)

				if(!movies || movies.length == 0){return}
				for(let movie of movies ){


					try {
						const embedding =await embed(movie.content)


						if(embedding){

							mongoClient.db('Movies').collection('movies').updateOne(

								{title:movie.title},
								{$set:{vectorEmbedding:embedding[0].values}})

						}

					} catch (error) {

						console.error(error)

					}

				}
				return NextResponse.json({status:200})

			}


			if(embeddingFor == "search"){


				try {

					const embedding = await embed(body.search)
					if(embedding){
						return NextResponse.json({status:200,embedding:embedding[0].values,ok:true})
					}



					return NextResponse.json({status:400})


				} catch (error) {

					return NextResponse.json({status:400,error:error,ok:false})
				}

			}


	} catch (error) {

		return NextResponse.json({satus:400,error:error})

	}
}
