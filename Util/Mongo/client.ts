import { MongoClient } from "mongodb";

const uri = process.env.mongo_db_connection_string ||" "

export const mongoClient = new MongoClient(uri)


