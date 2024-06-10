
'use server'
import { MongoClient } from 'mongodb'

export async function getPapers() {
    'use server'
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    const dbName = 'rag_test';
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection("cgi_papers");

    const res = await collection.findOne()
    const papers = res?res["response"]["docs"]:[]
    return papers

  }

