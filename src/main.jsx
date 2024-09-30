import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <Router>

    <StrictMode>
      <App />
    </StrictMode>

  </Router>


)
