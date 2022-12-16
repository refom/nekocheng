import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from "./pages/Home"
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App