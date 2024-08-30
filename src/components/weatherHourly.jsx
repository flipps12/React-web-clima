import { useEffect } from "react";

export default function WeatherHourly({ data, imageId }) {
    const date = new Date(data.dt * 1000);
    var imageId;

    // useEffect(() => {
    //     const imageElement = document.getElementById('image');
    //     if (data.weather[0].main === 'Clouds') {
    //         imageElement.classList.toggle('bg-image-4');
    //     } else if (data.weather[0].main === 'Clear') {
    //         imageElement.classList.toggle('bg-image-1');
    //     }
    // }, [imageId]);

    const clase = `size-16 bg-image-${imageId}`
    return (
        <section className="flex flex-col gap-3 items-center justify-center w-1/6 h-full">
            <div className="text-slate-400 text-xl"> {date.getHours()}:00</div>
            <div id="image" className={clase}>{ }</div>
            {/* <div className="">{ data.weather[0].description }</div> */}
            <div className="text-3xl font-semibold">{ Math.round(data.temp) }°</div>
        </section>
    )
}