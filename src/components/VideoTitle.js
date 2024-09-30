import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='px-12 py-3 text-lg rounded-lg text-black bg-white hover:bg-opacity-85'> ▷ Play</button>
        <button className='bg-gray-500 bg-opacity-40 px-12 py-3 text-lg rounded-lg text-white mx-2 hover:bg-opacity-60'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
