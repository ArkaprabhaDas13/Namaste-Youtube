import React from 'react'
import Button from './Button'

const ButtonList = () => {

  let arr = ['live', 'shorts', 'music', 'gaming', 'sports']

  return (
    <div className='flex justify-between'>

      {
        arr.map((item)=>(
          <Button text={item}/>
        ))
      }

    </div>
  )
}

export default ButtonList