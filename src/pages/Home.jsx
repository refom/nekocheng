import React, { useEffect, useState } from 'react'
import CardImage from '../components/CardImage'

const url = `https://api.thecatapi.com/v1/images/search?limit=10`

const Home = () => {
  const [imagesData, setImagesData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getImages = () => {
    fetch(url)
    .then( response => {
      return response.json()
    })
    .then(data => {
      console.log("Just data")
      console.log(data)
      setImagesData(lastData => [...lastData, ...data])
      setLoading(false)
    })
  }

  useEffect(() => {
    getImages()
  }, [])

  if (isLoading) {
    console.log("from loading")
    console.log(imagesData.length)
    return (
      <div className='flex justify-center items-center text-black'>
        <h1>Please Wait</h1>
      </div>
    )
  }

  console.log("from after loading")
  console.log(imagesData)
  return (
    <div className='p-4 flex flex-wrap justify-center items-start'>
      {imagesData.length > 0 && (
        imagesData.map((item) => (
          <CardImage key={item.id} url={item.url} />
        ))
      )}
    </div>
  )
}

export default Home