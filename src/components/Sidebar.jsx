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
            <Link to='/'><h1 className=''>Home</h1></Link>
            <h1 className=''>Shorts</h1>
            <h1 className=''>Subscriptions</h1>
        </ul>


        <h1 className='font-bold'>Subscriptions</h1>
        
        <ul>
            <li>Music</li>
            <li>Sport</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

    </div>
  )
}

export default Sidebar