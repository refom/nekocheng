import React from 'react'
import { useLocation } from 'react-router-dom'
import CardImage from '../components/CardImage'

const Detail = () => {
  const location = useLocation()
  const cats = location.state.cat
  console.log(location)
  console.log(cats)

  if (cats == null) {
    return (
      <div className='flex justify-center'>
        Nothing in here
      </div>
    )
  }

  return (
    <div className='flex justify-center items-center gap-x-4'>
      <img className='w-56' src={cats.url} alt="" />
      {cats.breeds[0].name}
    </div>
  )
}

export default Detail