import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import Weather from './components/Weather'

function App() {
  const [position, setPosition] = useState(false)
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(true)
  const API_KEY = '49c7c564cadca82ba7ddccfa38936a19'

  useEffect(() => {
    if (position !== undefined) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${API_KEY}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          setLoading(false)
        })
        .catch(err => console.log(err))
    }
  }, [position])

  const getPosition = () => {

    const success = pos => {
      let lat = pos?.coords.latitude
      let lon = pos?.coords.longitude
      setPosition({ lon, lat })
    }

    navigator.geolocation.getCurrentPosition(success);
  }

  const [toggle, setToggle] = useState(true)

  const toggleText = () => {
      setToggle(!toggle)
  }

  const functions = () => {
    getPosition();
    toggleText();
  }

  return (
    <div className="App">
      {
        loading ?
          <Loader toggle={toggle} toggleText={toggleText} />
          :
          <Weather weather={weather} />
      }
      <button className="location" onClick={functions}>
        Get location
      </button>
    </div>
  )
}

export default App
