import React from 'react'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Navigation />
      <div>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
