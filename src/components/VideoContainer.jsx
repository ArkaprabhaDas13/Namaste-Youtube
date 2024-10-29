import React from 'react' 
import {useEffect, useState} from 'react'
import {YOUTUBE_VIDEOS_API} from '../utils/constants'
import VideoCard from './VideoCard'
import { AdVideoCard } from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFunction();
  }, [])

  
  const fetchFunction = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    
    setVideos(json.items)
    console.log(json)
  }


  return (
    <div className='flex flex-wrap justify-center'>
        
      {videos[0] && <AdVideoCard info={videos[0]}/>} 

      { 
        videos.map((video)=>(
          <Link to={'/watch?v='+video.id} key={video.id}> <VideoCard info={video}/> </Link>
          // <Link to={'/watch/'+video.id} key={video.id}><VideoCard info={video} /></Link>
        ))

      }

    </div>
  )
}

export default VideoContainer