import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='p-2 mx-4 rounded-md bg-gray-100'>{text}</button>
    </div>
  )
}

export default Button