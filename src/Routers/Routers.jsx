
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CountButton from '../Components/CountButton'

const Routers = () => {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path = '/' element={<CountButton/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers
