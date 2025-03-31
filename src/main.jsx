import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterApp } from './CounterApp.jsx'

ReactDOM(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
