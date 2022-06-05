import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [position, setPosition] = useState()
  const [weather, setWeather] = useState()
  const API_KEY = '49c7c564cadca82ba7ddccfa38936a19'

  useEffect(() => {
    if (position !== undefined) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position?.lat}&lon=${position?.lon}&appid=${API_KEY}`
      axios.get(url)
        .then(res => setWeather(res.data))
    }
  }, [position])

  console.log(weather)

  let options = {
    enableHighAccuracy: true,
    timeout: 8000,
    maximunAge: 0
  }

  let error = () => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getPosition = () => {

    const success = pos => {
      let lat = pos?.coords.latitude
      let lon = pos?.coords.longitude
      setPosition({ lon, lat })
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  return (
    <div className="App">
      <Weather weather={weather} />
      <button className="location" onClick={getPosition}>
        Get location
      </button>
      <button className="switch">
        Switch to metric
      </button>
    </div>
  )
}

export default App
