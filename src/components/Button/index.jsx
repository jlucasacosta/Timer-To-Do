import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='w-full px-4 py-2 text-[#26263a] bg-[#BFFF00] transition-colors rounded-3xl outline-none cursor-pointer hover:bg-[#a6dd11]'>{text}</button>
  )
}

export default Button