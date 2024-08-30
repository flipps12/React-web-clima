import { Fragment } from "react"


export default function WeatherDetails({icon, weatherData, name, unit}) {
    return (
        <div className='flex gap-3 items-center'>
            <i className={ icon + " fa-solid text-3xl text-gray-500" }></i>
            <div>
                <span className='flex gap-2 text-gray-500 text-2xl items-center'>{ name }</span>
                <p className='text-2xl text-gray-400 font-extrabold'>{ weatherData } { unit }</p>
            </div>
        </div>
    )
}