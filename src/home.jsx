import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Loading from './components/loading';
import WeatherHourly from './components/weatherHourly';
import WeatherDetails from './components/weatherDetails';
import WeatherDaily from './components/weatherDaily';

const getIdImage = (data) => {
    console.log(data.weather[0].main)
    if (data.weather[0].main === 'Clouds') return 4
    else if (data.weather[0].main === 'Clear') return 1 //continuar con imagenes yd demas
    else if (data.weather[0].main === 'Rain') return 3
}

export default function Home() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://propxy-clima-app.vercel.app/api/v1/weather/-34.6571198&-58.7326569&&es")
            .then(response => {
                setWeatherData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return (<Loading />);
    if (error) return <p>Error: {error.message}</p>;

    console.log('Daily: ', weatherData.daily[0])

    const date = new Date(JSON.stringify(weatherData.current.dt, null, 2) * 1000);

    return (
        <div className='w-screen h-screen bg-gray-900 text-white'>
            {/* <h3 className='inline-block'>Actual: </h3>
            <h3>{JSON.stringify(weatherData.timezone, null, 2)}</h3>
            <div className='inline-block'> {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} </div> */}

            <div className='flex flex-col sm:flex-row sm:justify-between sm:m-10'>
                <div className=''>
                    <div className='flex h-32 mx-4 my-8'>
                        <div className='flex flex-col flex-1 justify-between h-full'>
                            <div>
                                <h3 className='text-3xl'>Itu. EJ</h3>
                                <p className='text-gray-500 text-lg'>Precipitaciones: {JSON.stringify(weatherData.hourly[0].pop, null, 2) * 100}%</p>
                            </div>
                            <h3 className='text-4xl font-bold'>{Math.round(JSON.stringify(weatherData.current.temp, null, 2))}°</h3>
                        </div>
                        <div className='flex flex-col justify-center items-end'>
                            <div className={' size-28 bg-image-' + getIdImage(weatherData.current)}></div>
                            <p className='text-center text-gray-300 text-xl'>{JSON.stringify(weatherData.current.weather[0].description, null, 2)}</p>
                        </div>
                    </div>
                    <article className='flex justify-center w-screen h-52 bg-gray-800 rounded-3xl sm:w-[56vw]'>
                        <WeatherHourly data={weatherData.hourly[1]} imageId={getIdImage(weatherData.hourly[1])}></WeatherHourly>
                        <WeatherHourly data={weatherData.hourly[7]} imageId={getIdImage(weatherData.hourly[7])}></WeatherHourly>
                        <WeatherHourly data={weatherData.hourly[13]} imageId={getIdImage(weatherData.hourly[13])}></WeatherHourly>
                        <WeatherHourly data={weatherData.hourly[19]} imageId={getIdImage(weatherData.hourly[19])}></WeatherHourly>
                        <WeatherHourly data={weatherData.hourly[25]} imageId={getIdImage(weatherData.hourly[25])}></WeatherHourly>
                    </article>
                    <article className='grid grid-cols-2 grid-rows-2 w-screen h-52 bg-gray-800 rounded-3xl mt-4 px-6 py-3  sm:w-[56vw]'>
                        <WeatherDetails icon={"fa-wind"} weatherData={weatherData.current.wind_speed} name={"Viento:"} unit={"m/s"}></WeatherDetails>
                        <WeatherDetails icon={"fa-droplet"} weatherData={weatherData.current.humidity} name={"Húmedad:"} unit={"%"}></WeatherDetails>
                        <WeatherDetails icon={"fa-sun"} weatherData={weatherData.current.uvi} name={"UV indice:"}></WeatherDetails>
                        <WeatherDetails icon={"fa-temperature-half"} weatherData={weatherData.current.temp} name={"Temperatura:"} unit={"°"}></WeatherDetails>
                    </article>
                </div>
                <article className='flex flex-col w-screen bg-gray-800 rounded-3xl mt-4 px-6 py-3  sm:w-[35vw]'>
                    <WeatherDaily data={weatherData.daily[0]} imageId={getIdImage(weatherData.daily[0])}></WeatherDaily>
                    <WeatherDaily data={weatherData.daily[1]} imageId={getIdImage(weatherData.daily[1])}></WeatherDaily>
                    <WeatherDaily data={weatherData.daily[2]} imageId={getIdImage(weatherData.daily[2])}></WeatherDaily>
                    <WeatherDaily data={weatherData.daily[3]} imageId={getIdImage(weatherData.daily[3])}></WeatherDaily>
                    <WeatherDaily data={weatherData.daily[4]} imageId={getIdImage(weatherData.daily[4])}></WeatherDaily>
                    <WeatherDaily data={weatherData.daily[5]} imageId={getIdImage(weatherData.daily[5])}></WeatherDaily>
                </article>
            </div>
        </div>
    );
}