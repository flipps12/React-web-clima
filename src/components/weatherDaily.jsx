import { Fragment } from "react";
import { getDayOfPresent } from "../hooks/useDate";

export default function WeatherDaily({ data, imageId }) {

    const fecha = new Date(data.dt * 1000);

    return (
        <div className="flex">
            <div className={`size-16 bg-image-${imageId}`}></div>
            <div>
                <p className="font-semibold text-lg">{getDayOfPresent(fecha)}</p>
                <p className="font-bold text-xl">Min: {data.temp.min}° - Max: {data.temp.max}°</p>
            </div>
            <p className="flex flex-1 justify-end items-center text-center">Lluvia:<br></br> {data.pop * 100}%</p>
        </div>
    )
}