import React from 'react'
import ReactDOM from 'react-dom/client'
import AppClass from './AppClass'
import AppFunction from './AppFunction'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppClass />
    <AppFunction />
  </React.StrictMode>
)
