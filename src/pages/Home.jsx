import React, { useEffect, useState } from 'react'
import CardImage from '../components/CardImage'

const url = `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1`

const Home = () => {
  const [imagesData, setImagesData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getImages = () => {
    fetch(url, {
      headers: {'x-api-key': 'live_oRhFgEwdyFUSs3u18twApqRYyQNFL4ZjhLB5YpyOTv47IVLvyrTCMiQcmswKiAgv'}
    })
    .then( response => {
      return response.json()
    })
    .then(data => {
      setImagesData(lastData => [...lastData, ...data])
      setLoading(false)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getImages()
  }, [])

  if (isLoading) {
    return (
      <div className='flex justify-center items-center text-black'>
        <svg className='animate-spin'>Please Wait</svg>
      </div>
    )
  }

  console.log("Cats Data")
  console.log(imagesData)
  return (
    <div className='p-4 flex flex-wrap justify-center items-start'>
      {imagesData.length > 0 && (
        imagesData.map((item) => (
          <CardImage key={item.id} cats={item} />
        ))
      )}
    </div>
  )
}

export default Home