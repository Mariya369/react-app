import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
 let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates] );

function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
}
function load() {
    let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
    let latitude = props.coordinates.lat;
    let longitute = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

}

if (loaded) {

    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index <7) {
                        return (
                            <div className="col" key={index}>
                
                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                        );
                    } else {
                        return null;
                    }
                })}
                
            </div>
        </div>
    );

    } else {
        load(); 
    return null;
 }
}