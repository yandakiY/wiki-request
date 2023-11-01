import getWikiResult from "@/lib/getWikiResult"
import Item from "./components/Item"

type Props = {
    params:{
        searchWord: string
    }
}

export async function generateMetadata( {params: {searchWord}} : Props ) {
    
    const wikiData: Promise<SearchResult> = getWikiResult(searchWord)
    const data = await wikiData
    const displayTerm = searchWord.replace('%20' , ' ')

    if(!data?.query?.pages){
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: `${displayTerm}`,
        description: `Search results for : ${displayTerm}`
    }
}

export default async function ResultSearch( {params: {searchWord}} : Props ) {

    const resultFromwiki: Promise<SearchResult> = getWikiResult(searchWord)

    const resultsData = await resultFromwiki

    const results: Result[] | undefined = resultsData?.query?.pages

    // console.log(Object.values(results))
    const content = (
        <div className="z-10 flex flex-col items-center">
            {results ? 
                Object.values(results).map(result => {
                   return <Item key={result.pageid} result={result} />
                    
                })
                :
                <h2>{`${searchWord} Not Found`}</h2>
            }
        </div>
    )

  return content
}
