import React from 'react'
import { IWeather } from '../models';

interface weatherProps {
    weather: IWeather
}

const WeatherCart = ({ weather }: weatherProps) => {
    console.log(weather);
    

    const date = weather.dt_txt.substring(0, 10);
    const temp = weather.main.temp.toString();
    const feelsLike = weather.main.feels_like.toString();
    const wind = weather.wind.speed.toString();
    const windDeg = weather.wind.deg.toString();
    const skyState = weather.weather[0].main.toLowerCase();
    const humidity = weather.main.humidity.toString();
    const skyImg = `${skyState}.png`;
    let windDirection;
    
    if(+windDeg >= 315 || +windDeg < 44) {
        windDirection = "North"
    } else if (+windDeg >= 45 && +windDeg < 134) {
        windDirection = "East"
    } else if (+windDeg >= 135 && +windDeg < 225){
        windDirection = "South"
    } else {
        windDirection = "West"
    };


  return (
    <div className="bg-white shadow-2xl p-2 m-2 rounded-2xl border-2 border-gray-50">
                        <div className="flex flex-col">
                            <div className='border-b-2 border-black'>
                                <h2 className="font-bold text-gray-600 text-center pb-2">{date}</h2>
                            </div>
                            <div className="my-6">
                                <div className="flex flex-row space-x-4 items-center ">
                                    <div id="icon" className='bg-black rounded-2xl border-2 border-lime-50 opacity-80'>
                                        <span>
                                            <img src={`weatherIcon/${skyImg}`} alt="" className='w-20 p-1.5' />
                                        </span>
                                    </div>
                                    <div id="temp">
                                        <h4 className="temp-description text-4xl">{temp.substr(0, 4)}&deg;C</h4>
                                        <p className="temp-option text-xs text-gray-700 pl-4">Feels like {feelsLike.substr(0,2)}&deg;C</p>
                                        <p className="temp-option text-xs text-gray-700 pl-4">Humidity {humidity}%</p>
                                        <p className="temp-option text-xs text-gray-700 pl-4">Wind: {wind}m.s </p>
                                        <p className="temp-option text-xs text-gray-700 pl-8">Deg: {windDirection}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                                <span className="text-indigo-600 text-xs font-medium">{skyState}</span>
                            </div>
                        </div>
                    </div>
  )
}
export default WeatherCart
