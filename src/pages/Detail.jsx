import React from 'react'
import { useLocation } from 'react-router-dom'
import CardImage from '../components/CardImage'

const Detail = () => {
  const location = useLocation()
  const cats = location.state?.cat
  console.log(location)
  console.log(cats)

  if (cats == null) {
    return (
      <div className='flex justify-center items-center w-screen h-screen'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl animate-bounce'>
          Nothing in here
        </h1>
      </div>
    )
  }

  return (
    <div className='relative text-center p-10'>
      <div className='mx-auto max-w-3xl pt-5 pb-32 sm:pt-5 sm:pb-40'>
        <div className='flex justify-center items-center'>
          <img className='aspect-auto w-1/2 rounded-xl' src={cats.url} alt="" />
        </div>
        
        <div className='m-2'>
          <h1 className='text-4xl font-bold tracking-tight mb-2'>
            {cats.breeds[0].name}
          </h1>
          <h1 className='text-2xl tracking-tight mb-2'>
            {cats.breeds[0]?.alt_names}
          </h1>
          <p>
            {cats.breeds[0].description}
          </p>
        </div>

        <div className='mt-10 grid grid-cols-2 gap-4'>
          <h1 className='text-2xl font-bold tracking-tight'>Temperament</h1>
          <p className='text-xl'>{cats.breeds[0].temperament}</p>
          <h1 className='text-2xl font-bold tracking-tight'>Origin</h1>
          <p className='text-xl'>{cats.breeds[0].origin}</p>
          <h1 className='text-2xl font-bold tracking-tight'>Life Span</h1>
          <p className='text-xl'>{cats.breeds[0].life_span} years</p>
          <h1 className='text-2xl font-bold tracking-tight'>Dog Friendly</h1>
          <p className='text-xl'>{cats.breeds[0].dog_friendly > 3 ? "Yes" : "Possible"}</p>
        </div>
        
        <div className='flex justify-center items-center mt-20'>
          <a
            className='text-2xl font-bold tracking-tight text-center'
            href={cats.breeds[0].wikipedia_url}
          >
            More information . . .
          </a>
        </div>
      </div>

    </div>
  )
}

export default Detail