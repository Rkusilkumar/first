import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './container/home'

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="#" elment={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
