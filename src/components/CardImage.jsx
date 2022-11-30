import React from 'react'
import { Link } from 'react-router-dom'

const CardImage = ({ cats }) => {
  return (
    <Link to='/detail' state={{ cat: cats }}>
      <div className="flex m-5 shadow-xl cursor-pointer">
        <img className='w-[480px] h-[672px] md:w-[320px] md:h-[448px] sm:w-[160px] sm:h-[224px] rounded-xl object-cover' src={cats.url} />
      </div>
    </Link>
  )
}

export default CardImage