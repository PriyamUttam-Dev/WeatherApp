import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WeatherProvider from './Context/WeatherData.jsx'

createRoot(document.getElementById('root')).render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
   
  
)
