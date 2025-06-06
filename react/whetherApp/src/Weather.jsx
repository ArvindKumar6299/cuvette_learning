import React , {useEffect, useState} from 'react';
import axios from 'axios';


const Whether = ()=>{

    const [city, setCity] = useState('');
    const [weatherData , setWeatherData] = useState(null);


    function handleInputChange(event){
        setCity(event.target.value);
    }

    const fetchData = async()=>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25a24bd007eea1dfe4f9a678a82e90d0&units=metric`);
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        fetchData();
    }, []);

   

    function handleSubmit(e){
       e.preventDefault();
       fetchData();
    }


    return(
        <div>
        <h1 >Whether App</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter city name'
            value={city} onChange={handleInputChange} />

            <button type='submit'>Get Whether</button>
        </form>


        {weatherData ? (
            <>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}*C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like: {weatherData.main.feels_like}*C</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Wind Speed : {weatherData.wind.speed}m/s</p>
            </>
        ) : (
            <p>Loading weather data...</p>
        )}
        </div>
    )
}

export default Whether;



