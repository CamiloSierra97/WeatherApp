import React from 'react'


const Weather = ({ weather }) => {


    const fahrenheit = (Math.round((weather?.main.temp - 273.15) * (9 / 5)))

    const fahrenheitMax = (Math.round((weather?.main.temp_max - 273.15) * (9 / 5)))

    const fahrenheitMin = (Math.round((weather?.main.temp_min - 273.15) * (9 / 5)))

    console.log(typeof(weather?.weather[0].main)) 

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
                                        {weather?.description}
                                    </p>
                                </li>
                                <li className="type">
                                    <p className="temperature">
                                        Temperature: {fahrenheit}&#176; F
                                    </p>
                                </li>
                                <li className="type">
                                    <p className="max_temp">
                                        Max. Temperature: {fahrenheitMax} &#176; F
                                    </p>
                                </li>
                                <li className="type">
                                    <p className="min_temp">
                                        Min. Temperature: {fahrenheitMin} &#176; F
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

            </aside>
        </div>
    )
}

export default Weather