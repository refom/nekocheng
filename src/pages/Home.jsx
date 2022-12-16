import React, { useEffect, useState } from 'react'
import CardImage from '../components/CardImage'
import logo from '../assets/logo.png'
import useInfiniteScroll from '../components/useInfiniteScroll'

const url = `https://api.thecatapi.com/v1/images/search?has_breeds=1`
const breeds = 'https://api.thecatapi.com/v1/breeds/'
const key = 'live_oRhFgEwdyFUSs3u18twApqRYyQNFL4ZjhLB5YpyOTv47IVLvyrTCMiQcmswKiAgv'

const Home = () => {
  const [imagesData, setImagesData] = useState([])
  const [breedsData, setBreedsData] = useState([])
  const [loading, setLoading] = useState(true)

  const [inputText, setInputText] = useState("")
  const [selectFilter, setSelectFilter] = useState("breeds")
  const [sortState, setSortState] = useState("none")

  const getImages = (limits) => {
    fetch(url + `&limit=${limits}`, {headers: {'x-api-key': key}})
    .then( response => response.json())
    .then(data => setImagesData(lastData => [...lastData, ...data]) )
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false)
      setIsFetching(false)
    })
  }

  const [isFetching, setIsFetching] = useInfiniteScroll(() => getImages(15))

  const sortMethods = {
    none: { method: (a, b) => null},
    ascending: { method: (a, b) => (a.breeds[0].dog_friendly > b.breeds[0].dog_friendly ? -1 : 1)},
    descending: { method: (a, b) => (a.breeds[0].dog_friendly > b.breeds[0].dog_friendly ? 1 : -1)},
  }

  const getBreeds = () => {
    fetch(breeds, {headers: {'x-api-key': key}})
    .then( response => response.json())
    .then(data => setBreedsData(data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    getImages(15)
    getBreeds()
  }, [])
  
  const searchHandler = (e) => {
    let inputValue = e.target.value.toLowerCase()
    setInputText(inputValue)
  }

  const filteredData = imagesData.filter((item) => {
    let output = false
    if (inputText === "" && selectFilter === "breeds") return item
    if (inputText !== "") {
        output = item.breeds[0].name.toLowerCase().includes(inputText)
        output = item.breeds[0].origin.toLowerCase().includes(inputText)
        output = item.breeds[0].temperament.toLowerCase().includes(inputText)
      }
    if (selectFilter !== "breeds") {
        output = item.breeds[0].id.toLowerCase().includes(selectFilter)
      }
    return output
  }).sort(sortMethods[sortState].method)


  if (loading) {
    return (
      <div className='flex justify-center items-center w-screen h-screen'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 animate-spin">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
        </svg>
        <div>
          <p className='text-2xl ml-4 animate-pulse'>Please Wait</p>
        </div>
      </div>
    )
  }


  console.log(filteredData)
  console.log(breedsData)
  console.log(selectFilter)
  return (
    <>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-5 pb-32 sm:pt-5 sm:pb-40">
        <div className='flex justify-center items-center'>
          <img className='aspect-auto w-48' src={logo} alt="logo" />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            NEKOCHENG WEBSITES TO TELL YOU MORE ABOUT CATS
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            This websites was make to tell cats lover about cats. You can get more information about cat in here. 
            You can search types cat in this world.
          </p>
        </div>
      </div>
    </div>

    <div className='flex justify-around items-center max-h-5'>
      <div className='w-1/3 m-5'>
        <input
          type="text"
          className='w-full p-2.5 border border-gray-700 rounded-md outline-none focus:border-indigo-500'
          placeholder='Search...'
          onChange={searchHandler}/>
      </div>
      <div className="w-1/3 m-5">
        <select
          className="w-full p-2.5 bg-white border border-gray-700 rounded-md outline-none focus:border-indigo-500"
          defaultValue={'breeds'}
          onChange={(e) => setSelectFilter(e.target.value)}
        >
            <option value="breeds">Breeds</option>
            {breedsData?.map((breed) => (
              <option key={breed.id} value={breed.id}>{breed.name}</option>
            ))}
        </select>
      </div>
      <div className="w-1/3 m-5">
        <select
          className="w-full p-2.5 bg-white border border-gray-700 rounded-md outline-none focus:border-indigo-500"
          defaultValue={'none'}
          onChange={(e) => setSortState(e.target.value)}
        >
            <option value="none">Dog Friendly Order</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
        </select>
      </div>
    </div>

    {/* <div className='p-4 flex-wrap items-start flex justify-evenly'> */}
    <div className='w-full p-8 md:columns-3 lg:columns-4 xl:columns-5 sm:columns-2 gap-8'>
      {filteredData.length > 0 && (
        filteredData.map((item, index) => (
          <CardImage key={item.id + index} even={index % 2} cats={item} />
        ))
      )}
    </div>

    {isFetching && (
      <div className='flex justify-center items-center animate-pulse m-10 p-10'>
        Load more images . . .
      </div>
    )}
    </>
  )
}

export default Home