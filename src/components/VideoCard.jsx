import React from 'react'

const VideoCard = ({info}) => {

    // console.log("Info = ", info)

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;

  return (
    <div className='w-72 p-3 m-4'>

        <img className='' src={thumbnails.high.url} alt="thumbnail" />
        
        <div className='flex my-2'>
            <img className='w-8 h-8 mr-2 rounded-[200px]' src={thumbnails.standard.url} alt="" /> 
            <div>
                <h3 className='font-bold'>{title}</h3>
                <ul className='text-gray-500'>
                    <li>{channelTitle}</li>
                    <li>{viewCount} views</li>
                </ul>
            </div>
        </div>
        

    </div>
  )
}

export default VideoCard