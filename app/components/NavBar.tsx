import React from 'react'


export default function NavBar() {
  return (
    <nav className='border-b-2 mx-4 my-4 flex flex-col md:flex-row justify-between items-center'>
        <div>
            <h1 className='text-2xl md:text-4xl font-bold'>Wiki-Request</h1>
        </div>

        <div>
            <ul className='flex flex-row gap-8 md:gap-6'>
                <li>About me</li>
                <li>Contacts</li>
            </ul>
        </div>
    </nav>
  )
}
