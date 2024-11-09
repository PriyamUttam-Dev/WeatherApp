import { useContext, useEffect, useState } from 'react';
import './App.css'
import { WeatherContext } from './Context/WeatherData'
import Landing from './components/Pages/Landing';

function App() {
  const [count, setCount] = useState(0)
  const weatherData  = useContext(WeatherContext)

  return (
    <div className='h-screen w-full bg-color1 relative'>
     <Landing/>
    </div>
  )
}

export default App
