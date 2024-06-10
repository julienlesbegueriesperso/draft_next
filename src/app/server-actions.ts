
'use server'
import { MongoClient, ServerApiVersion } from 'mongodb'
const url = "mongodb+srv://test:w4UknjPHwHvTXGFZ@cluster0.g09jmfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });

const dbName = 'sample_airbnb';


export async function getPapers() {
    'use server'
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection("listingsAndReviews");

    const res = collection.find().limit(100);
    
    let arr = await res.toArray()
    arr = arr.map(a => JSON.parse(JSON.stringify(a)))
    await client.close()
    return arr
  
  }

