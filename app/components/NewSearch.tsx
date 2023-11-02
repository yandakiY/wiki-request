'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


export default function NewSearch() {

    const router = useRouter()
    const [search , setSearch] = React.useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSearch('')

        // Redirection vers la page de resultat
        router.push(`/${search}/`)
    }


  return (
        <form onSubmit={handleSubmit} method="post" className='py-1'>
            <div className='text-3xl flex flex-col items-center'>
                <div className=''>
                    <input 
                        type="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className='text-center text-base border border-slate-400 rounded-sm w-[350px] md:w-[350px] px-2 py-2 focus:outline-none' name="word" id="word" placeholder='Effectuez une nouvelle recherche...' />
                </div>
            </div>
        </form>
  )
}
