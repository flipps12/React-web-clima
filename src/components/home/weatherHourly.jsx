import { useEffect } from "react";

export default function WeatherHourly({ data, imageId }) {
    const date = new Date(data.dt * 1000);
    var imageId;

    const clase = `size-16 bg-image-${imageId}`
    return (
        <section className="flex flex-col gap-3 items-center justify-center w-1/6 h-full">
            <div className="text-slate-400 text-base sm:text-lg"> {date.getHours() <= 13 ? date.getHours() + ':00 AM' : (date.getHours() - 12) + ':00 PM' }</div>
            <div id="image" className={clase}>{ }</div>
            {/* <div className="">{ data.weather[0].description }</div> */}
            <div className="text-3xl font-semibold">{ Math.round(data.temp) }°</div>
        </section>
    )
}