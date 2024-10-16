import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import {useParams} from 'react-router-dom'


const Watch = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const watchParam = searchParams.get('v')
  console.log("Watch Param = ", watchParam)

  // const params = useParams();
  // console.log("Params = ", params)

  const dispatch = useDispatch();
  useEffect(()=>{
    
    dispatch(closeMenu())
    
  }, [])
  
  const toggle = useSelector(store=>store.app?.isMenuOpen)
  console.log("Watch toggle = ", toggle)

  
  return (
    <div className='w-screen h-screen'>

      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${watchParam}?si=XbnE396wyCsG0UA5?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
  )
}

export default Watch