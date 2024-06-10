import { Divider } from "@mui/joy";
import { getPapers } from "../server-actions";

export default async function Main() {

    const papers = await getPapers()

    return (
        <main className="w-2/3 align-middle">
        {papers.map((paper:any,i:number) => (
            <div key={"paper_"+i} className="overflow-auto h-96 m-10 place-content-center items-center " >
                <p>{JSON.stringify(paper)}</p>
              {/* <h4 className="font-bold">Title: {paper["title_s"]}</h4>
              <h4>Authors: {paper["authFullName_s"].join(", ")}</h4>
              <p>{paper["abstract_s"]}</p> */}
              <Divider className="m-5" orientation="horizontal"></Divider>
            </div>
          ))}
        </main>
    )

}