'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


export default function Search() {

    const router = useRouter()
    const [search , setSearch] = React.useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSearch('')

        // Redirection vers la page de resultat
        router.push(`/${search}/`)
    }


  return (
        <form onSubmit={handleSubmit} method="post">
            <div className='text-3xl flex flex-col items-center'>
                <div className=''>
                    <input 
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className='text-center text-base border border-slate-700 rounded-sm w-[300px] md:w-[600px] px-2 py-2 focus:outline-none' name="word" id="word" placeholder='Effectuez une recherche...' />
                </div>
                <div>
                    <button className='my-4 font-bold border text-xl p-2 text-white transition ease-in-out delay-150 bg-slate-700 hover:bg-slate-900 duration-300 rounded-lg'>Make a search</button>
                </div>
            </div>
        </form>
  )
}
