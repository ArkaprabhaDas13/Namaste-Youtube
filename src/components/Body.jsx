import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'

const Body = () => {

  const toggle = useSelector(store=>store.app.isMenuOpen)

  return (
    <div className='flex'>

        <Sidebar/>
        <MainContainer/>

    </div>
  )
}

export default Body