import { mongoClient } from "@/Util/Mongo/client"
import { NextResponse } from "next/server"



export async function GET(){
    try {
        
        const movies = mongoClient.db("Movies").collection("movies").find()
        console.log(movies)
    } catch (error) {
        
    }
  return NextResponse.json({ status: 200})
}