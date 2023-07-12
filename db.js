import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017/";

 async function mongoConnection(){
    const client = new MongoClient(connectionString);
    await client.connect();
    console.log("Database connected successfully");
    return client;
}

//initializing DB
export const client = await mongoConnection(); 