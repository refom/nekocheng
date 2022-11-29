import React from 'react'

const CardImage = ({ url }) => {
  return (
    <div className="flex">
      <img className='m-5 w-[480px] h-[672px] md:w-[320px] md:h-[448px] sm:w-[160px] sm:h-[224px] rounded-xl shadow-xl object-cover' src={url} />
    </div>
  )
}

export default CardImage