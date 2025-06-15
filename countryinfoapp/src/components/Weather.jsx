import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)
    const apiKey = import.meta.env.VITE_WEATHER_KEY

    useEffect(() => {
        if(!capital) return

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`

        axios.get(url).then(response => {
            setWeather(response.data)
        })
    }, [capital, apiKey])

    if(!weather) return <p>Loading weather...</p>

    return (
        <di>
        <h2>Weather in {capital}</h2>
        <p>Temperature {weather.main.temp} Celsius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
        />
        <p>Wind {weather.wind.speed} m/s</p>
        </di>
    )
}

export default Weather