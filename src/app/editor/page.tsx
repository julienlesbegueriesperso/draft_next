'use client'
// import { JsonEditor } from 'json-edit-react'
import { useEffect, useState } from 'react'
import { getPapers } from '../server-actions'


export default function JsonEditorPage() {
    const [papers, setPapers] = useState<any[]>([])

    useEffect(() => {
        getPapers().then(p => setPapers(p))
      },[])

    return (<main>
      <div>{JSON.stringify(papers)}</div>
    </main>)


}