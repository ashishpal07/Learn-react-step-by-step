import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import { AppBar } from './components/AppBar'

// lazy loading it beneficial in loading dashboard and render and then
// we click on any routes then that will render or load
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App () {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path='/dashboard'
            element={
              <Suspense fallback={'loading...'}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path='/'
            element={
              <Suspense fallback={'loading...'}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
