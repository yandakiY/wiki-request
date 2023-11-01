import getWikiResult from "@/lib/getWikiResult"

type Props = {
    params:{
        searchWord: string
    }
}

export default async function ResultSearch( {params: {searchWord}} : Props ) {

    const resultFromwiki: Promise<SearchResult> = getWikiResult(searchWord)

    const resultsData = await resultFromwiki

    const results: Result[] | undefined = resultsData?.query?.pages

    console.log(results)

  return (
    <div>
        Result for search : {searchWord}
    </div>
  )
}
