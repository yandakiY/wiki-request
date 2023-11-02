import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    result: Result
}

export default function Item({result}: Props) {

    const linkTowikiPage = result.title.replace(' ' ,'_')
  
  const rowResult = (
    <div className='flex flex-col justify-center'>
        <h2>
            <Link
                href={`https://en.wikipedia.org/wiki/${linkTowikiPage}`}
                target='_blank'
                className='text-xl font-bold underline'
            >
                {result.title}
            </Link>
        </h2>
        <p className='max-w-lg'>{result.extract}</p>
    </div>
  )

  const listsRow = result?.thumbnail?.source
    ? (
        <article className='my-2'>
            <div className='border border-slate-800 flex flex-row gap-4 max-w-lg p-2 rounded-[4px]'>
                <div className="flex flex-col justify-center">
                    {/* Image */}
                    <Image
                        src={result.thumbnail.source}
                        alt={result.title}
                        width={result.thumbnail.width}
                        height={result.thumbnail.height}
                    />
                </div>
                {rowResult}
            </div>
        </article>
    ):
    (<article className='my-2'>
        <div className='rounded-[4px] p-2 border border-slate-800 max-w-lg'>
            {rowResult}
        </div>
    </article>)

    return listsRow
}