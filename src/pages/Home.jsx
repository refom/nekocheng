import React, { useEffect, useState } from 'react'
import CardImage from '../components/CardImage'

const url = `https://api.thecatapi.com/v1/images/search?has_breeds=1`

const Home = () => {
  const navigation = [
    { name: 'HOME', href: '#' },
    { name: 'OPTION', href: '#' },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [imagesData, setImagesData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [inputText, setInputText] = useState("")
  const [searchData, setSearchData] = useState([])

  const getImages = (limits) => {
    fetch(url + `&limit=${limits}`, {
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
    getImages(15)
  }, [])

  const filteredData = imagesData.filter((item) => {
    if (inputText === "") return item
    else return item.breeds[0].name.toLowerCase().includes(inputText)
  })

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
  console.log(filteredData)
  return (
    <>
    <div className='flex justify-center'>
      <div className='flex w-1/2 border border-purple-200 rounded m-8'>
        <input
          type="text"
          className='block w-full px-3 py-1.5 text-black border rounded-md'
          placeholder='Search...'
          onChange={searchHandler}/>
      </div>
    </div>

    <div className='p-4 flex-wrap items-start flex justify-around'>
      {filteredData.length > 0 && (
        filteredData.map((item) => (
          <CardImage key={item.id} cats={item} />
        ))
      )}
    </div>

    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              
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
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Home