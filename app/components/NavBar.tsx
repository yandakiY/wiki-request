import Link from 'next/link'
import React from 'react'


export default function NavBar() {

    
  return (
    <nav className='sticky top-0 z-0 text-white bg-slate-800 border-b-2 py-4 px-2 flex flex-col md:flex-row justify-between items-center'>
        <div>
            <h1 className='text-2xl md:text-4xl font-bold'>Wiki-Request</h1>
        </div>

        <div>
            <ul className='flex flex-row gap-8 md:gap-6'>
                <Link href={"/"}>About me</Link>
                <Link href={"/"}>Contacts</Link>
            </ul>
        </div>
    </nav>
  )
}
