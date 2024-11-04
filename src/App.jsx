import { useContext, useEffect, useState } from 'react';
import './App.css'
import { WeatherContext } from './Context/WeatherData'

function App() {
  const [count, setCount] = useState(0)
  const weatherData  = useContext(WeatherContext)

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default App
