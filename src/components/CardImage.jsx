import React from 'react'
import { Link } from 'react-router-dom'

const CardImage = ({ cats }) => {
  return (
    <Link to='/detail' state={{ cat: cats }}>
      <div className="flex m-5 shadow-xl cursor-pointer">
        <img className='w-36 h-44 rounded-xl object-cover' src={cats.url} />
      </div>
    </Link>
  )
}

export default CardImage