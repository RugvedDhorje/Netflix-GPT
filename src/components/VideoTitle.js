import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-500 bg-opacity-50 px-12 py-3 text-lg rounded-lg text-white'> ▶ Play</button>
        <button className='bg-gray-500 bg-opacity-50 px-12 py-3 text-lg rounded-lg text-white mx-2'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
