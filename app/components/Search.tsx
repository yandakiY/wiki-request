'use client'

import React from 'react'

export default function Search() {
  return (
    <div className='text-3xl p-2 flex flex-col'>
        <input className='text-center text-xl border p-2 focus:outline-none' type="text" name="word" id="word" placeholder='Effectuez une recherche et optenez les reponses de Wiki' />
        <button className='my-4 mx-16 font-bold border text-xl p-2 text-white transition ease-in-out delay-150 bg-slate-700 hover:bg-slate-900 duration-300 rounded-lg'>Rechercher</button>
    </div>
  )
}
