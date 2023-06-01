import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
 let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}
if (loaded) {

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[1]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[2]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[3]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[4]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[5]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[6]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[7]} />
                </div>
            </div>
        </div>
    );

    } else {

        let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
        let latitude = props.coordinates.lat;
        let longitute = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

    return null;
 }
}