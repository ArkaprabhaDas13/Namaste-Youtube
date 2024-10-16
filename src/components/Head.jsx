import React from 'react'
import { useSelector } from 'react-redux'
import {toggleMenu} from '../utils/appSlice'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

const Head = () => {
  
  const toggle = useSelector(store=>store.app?.isMenuOpen)
  
  const dispatch = useDispatch();
  
  const toggleHandler = ()=>{
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-4'>

        <div className='flex col-span-1'>
            <img onClick={()=>toggleHandler()} className='h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="hamburger menu icon" />
            <img className='h-8 mx-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Youtube logo" />
        </div>


        <div className='col-span-10 text-center'>
            <input className='w-[50%] py-2 px-4 border border-gray-400 rounded-l-[30px]' type="text" />
            <button className='p-2 px-4 border border-gray-400 rounded-r-full bg-gray-50 hover:bg-slate-300'>Search</button>
        </div>


        <div className='col-span-1'>
            <img className='h-8' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user icon" />

        </div>

    </div>
  )
}

export default Head