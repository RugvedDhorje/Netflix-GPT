import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[200px] pr-4 '>
      <img className='rounded-sm' src={IMG_CDN_URL+posterPath} alt="poster" />
    </div>
  )
}

export default MovieCard
