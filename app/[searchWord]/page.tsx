import getWikiResult from "@/lib/getWikiResult"
import Item from "./components/Item"
import NewSearch from "../components/NewSearch"

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
        <div>
            <div className="sticky top-[73px] bg-white">
                <NewSearch />
            </div>
            <div className="z-10 flex flex-col items-center">
                {results ? 
                    Object.values(results).map(result => {
                        if (!result.extract.match(/may refer to:/))
                            return <Item key={result.pageid} result={result} />
                    })
                    :
                    <div style={{fontFamily:'monospace'}} className="my-[300px] border border-slate-300 rounded-sm p-4 text-xl md:text-3xl">
                        <h2>{`No results in Wiki for ${searchWord}`}</h2>
                    </div>
                }
            </div>
        </div>
    )

  return content
}
