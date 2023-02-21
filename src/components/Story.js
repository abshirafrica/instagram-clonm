import React from 'react'

const Story = ({name, image}) => {
  return (
    <div>
        
        <img src={image} alt="image" className='w-14 h-14 object-cover border border-blue-500 cursor-pointer p-[2px] rounded-full'/>
        <h1 className='text-xs w-16 truncate text-center flex'>{name}</h1>
      
    </div>
  )
}

export default Story
