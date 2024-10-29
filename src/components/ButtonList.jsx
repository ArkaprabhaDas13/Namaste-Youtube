import React from 'react'
import Button from './Button'

const ButtonList = () => {

  let arr = ['live', 'shorts', 'music', 'gaming', 'sports', 'Formula1', 'Computer Science', 'Shark Tank', 'Podcasts', 'Ashish Chanchalani', 'Music', 'Driving']

  return (
    <div className='flex ml-16 py-5'>

      {
        arr.map((item, index)=>(
          <Button text={item} key={index}/>
        ))
      }

    </div>
  )
}

export default ButtonList