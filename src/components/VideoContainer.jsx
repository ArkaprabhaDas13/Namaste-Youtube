import React from 'react'
import {useEffect} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'


const VideoContainer = () => {

  useEffect(async ()=>{

    const data = await fetch(YOUTUBE_VIDEOS_API) 
    console.log(data)

  }, [])


  return (
    <div>
        
        VideoContainer

    </div>
  )
}

export default VideoContainer