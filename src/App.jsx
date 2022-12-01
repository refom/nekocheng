import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App