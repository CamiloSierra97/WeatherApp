import React, { useState } from 'react'


const Weather = ({ weather }) => {

    const fahrenheit = (Math.floor((weather?.main.temp - 273.15) * (9 / 5) + 32))

    const fahrenheitMax = (Math.floor((weather?.main.temp_max - 273.15) * (9 / 5) + 32))

    const fahrenheitMin = (Math.floor((weather?.main.temp_min - 273.15) * (9 / 5) + 32))

    const celsius = (Math.floor(weather?.main.temp - 273.15))

    const celsiusMax = (Math.floor(weather?.main.temp_max - 273.15))

    const celsiusMin = (Math.floor(weather?.main.temp_min - 273.15))

    const [units, setUnits] = useState(true)

    const [unitsText, setUnitsText] = useState('F')

    const toggleUnits = () => setUnits(!units)

    const toggleText = () => setUnitsText(!unitsText)

    const display = () => {
        toggleUnits();
        toggleText()
    }


    return (
        <div className='app_container'>
            <h1 className="title">
                Weather in your location
            </h1>
            <aside className="image">
                <div className="container">
                    <div className="sunny">
                        <span className="sun">
                            <ul className="rain">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </span>
                        <span className="sunx">
                            <ul className="rain__2">
                                <li>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </span>
                        <section className="card">
                            <ul className="data">
                                <li className="type">
                                    <h2 className="city">
                                        {weather?.name}
                                    </h2>
                                </li>
                                <li className="type">
                                    <h3 className="country">
                                        {weather?.sys.country}
                                    </h3>
                                </li>
                                <li className="type">
                                    <h3 className="status">
                                        {weather?.weather[0].main}
                                    </h3>
                                </li>
                                <li className="type">
                                    <p className="description">
                                        {weather?.weather[0].description}
                                    </p>
                                </li>
                                <li className="type">
                                    <p className="temperature">
                                        Temperature: {units ? fahrenheit : celsius} &#176;{unitsText ? 'F' : 'C'}
                                    </p>
                                </li>
                                <li className="type">
                                    <p className="max_temp">
                                        Max. Temperature: {units ? fahrenheitMax : celsiusMax} &#176;{unitsText ? 'F' : 'C'}
                                    </p>
                                </li>
                                <li className="type">
                                    <p className="min_temp">
                                        Min. Temperature: {units ? fahrenheitMin : celsiusMin} &#176;{unitsText ? 'F' : 'C'}
                                    </p>
                                </li>
                            </ul>
                            <button className="switch" onClick={display}>
                                {
                                    unitsText ? 'Switch to metric' : 'Switch to imperial'
                                }
                            </button>
                        </section>
                    </div>
                </div>
            </aside>

        </div>
    )
}

export default Weather