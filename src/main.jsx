import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './component/Home'
import { BrowserRouter } from 'react-router-dom'
import Router_dom from './Router_dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Home/>
    <Router_dom/>
    </BrowserRouter>
  </React.StrictMode>,
)

