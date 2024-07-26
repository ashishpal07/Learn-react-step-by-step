import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { CardDetails } from './components/CardDetails'

function App () {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/char-details/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

export default App
