import React, { useEffect, useState } from 'react'
import CardImage from '../components/CardImage'

const url = `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1`

const Home = () => {
  const [imagesData, setImagesData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [inputText, setInputText] = useState("")
  const [searchData, setSearchData] = useState([])

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

  const searchHandler = (e) => {
    let inputValue = e.target.value.toLowerCase()
    setInputText(inputValue)
  }

  useEffect(() => {
    getImages()
  }, [])

  useEffect(() => {
    setSearchData(() => {
      return imagesData.filter((item) => {
        if (inputText === "") return item
        else item.breeds[0]?.name.toLowerCase().includes(inputText)
      })
    })
  }, [inputText, imagesData])

  if (isLoading) {
    return (
      <div className='flex justify-center items-center text-black'>
        <svg className='animate-spin'>Please Wait</svg>
      </div>
    )
  }

  console.log("Cats Data")
  console.log(imagesData)
  console.log("Input Text")
  console.log(inputText)
  console.log("Search Data")
  console.log(searchData)
  return (
    <div className='p-4 flex justify-center items-start'>
      <div className='flex w-1/2 border border-purple-200 rounded m-4'>
        <input
          type="text"
          className='block w-full px-3 py-1.5 text-black border rounded-md'
          placeholder='Search...'
          onChange={searchHandler}/>
      </div>
      <div className='p-4 flex flex-wrap items-start'>
        {searchData.length > 0 && (
          searchData.map((item) => (
            <CardImage key={item.id} cats={item} />
          ))
        )}
      </div>
    </div>
  )
}

export default Home