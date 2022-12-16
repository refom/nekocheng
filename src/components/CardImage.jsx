import React from 'react'
import { Link } from 'react-router-dom'

const CardImage = ({ cats, even }) => {
  return (
    <Link to='/detail' state={{ cat: cats }}>
      <div className='inline-block w-full py-6 cursor-pointer'>
        <div className={`relative h-64  ${even == 0 ? "md:h-96" : "md:h-64"} w-full overflow-hidden`}>
          <img className='absolute w-full h-full object-cover rounded-xl shadow-xl' src={cats.url} />
        </div>
      </div>
    </Link>
  )
}

export default CardImage