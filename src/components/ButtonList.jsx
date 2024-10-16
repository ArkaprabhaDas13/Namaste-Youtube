import React from 'react'
import Button from './Button'

const ButtonList = () => {

  let arr = ['live', 'shorts', 'music', 'gaming', 'sports']

  return (
    <div className='flex '>

      {
        arr.map((item, index)=>(
          <Button text={item} key={index}/>
        ))
      }

    </div>
  )
}

export default ButtonList