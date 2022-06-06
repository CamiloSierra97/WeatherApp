import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [position, setPosition] = useState()
  const [weather, setWeather] = useState()
  const [units, setUnits] = useState('Switch to ')
  const API_KEY = '49c7c564cadca82ba7ddccfa38936a19'

  useEffect(() => {
    if (position !== undefined) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position?.lat}&lon=${position?.lon}&appid=${API_KEY}`
      axios.get(url)
        .then(res => setWeather(res.data))
    }
  }, [position])

  console.log(weather)

  const getPosition = () => {

    const success = pos => {
      let lat = pos?.coords.latitude
      let lon = pos?.coords.longitude
      setPosition({ lon, lat })
    }
    navigator.geolocation.getCurrentPosition(success);
  }

  return (
    <div className="App">
      <Weather weather={weather} />
      <button className="location" onClick={getPosition}>
        Get location
      </button>
    </div>
  )
}

export default App
