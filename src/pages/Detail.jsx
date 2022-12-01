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
<<<<<<< HEAD
    <div>
      
=======
    <div className='m-4 p-4 text-center'>
      <div className='flex justify-center'>
        <img className='w-56' src={cats.url} alt="" />
      </div>
      <h1 className='text-4xl'>{cats.breeds[0].name}</h1>
      <p>{cats.breeds[0].description}</p>
>>>>>>> master
    </div>
  )
}

export default Detail