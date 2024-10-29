import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen)       // THIS is called EARLY RETURN where we dont need to return/show anything on the page
    return null;

  return (
    <div className='border border-gray-300 w-[15%] p-5'>
        
        
        <ul>
            <Link to='/'><h1 className='font-bold mb-3'>Home</h1></Link>
            <h1 className='font-bold mb-3'>Shorts</h1>
            <h1 className='font-bold mb-3'>Channels</h1>
        </ul>


        <h1 className='font-bold mb-3'>Subscriptions</h1>
        
        <ul>
            <li className='mb-3'>Music</li>
            <li className='mb-3'>Sport</li>
            <li className='mb-3'>Gaming</li>
            <li className='mb-3'>Movies</li>
        </ul>

    </div>
  )
}

export default Sidebar