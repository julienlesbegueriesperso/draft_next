'use client'
import Image from "next/image";
import '@fontsource/inter';
import { getPapers } from "./server-actions"

import Button from '@mui/joy/Button';
import { useEffect, useState } from "react";
import { Divider } from "@mui/joy";
import Link from "next/link";

export default function Home() {

  const [papers, setPapers] = useState<any[]>([])
  
  
  useEffect(() => {
    getPapers().then(p => setPapers(p))
  },[])


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-4">
      <div>123</div>
      <Image alt="an image" 
      src="vercel.svg"
      width='200' height='300'
      ></Image>
      <div>123</div>
      
      <Button variant="solid"><Link href="/editor">Editor</Link></Button>
      {papers && papers.map((paper,i) => (
        <div key={"paper_"+i} className="overflow-auto h-96" >
          <p>{JSON.stringify(paper)}</p>
          {/* <h4 className="font-bold">Title: {paper["title_s"]}</h4>
          <h4>Authors: {paper["authFullName_s"].join(", ")}</h4>
          <Divider className="m-5" orientation="horizontal"></Divider>
          <p>{paper["abstract_s"]}</p> */}

        </div>
      ))}
      </div>
    </main>
  );
}
