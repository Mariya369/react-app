import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data);
}
console.log(props);

    let apiKey = "28913bc91722d453416f8f629fbd6b7d";
    let latitude = props.coordinates.lat;
    let longitute = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">
                        19º </span> 
                        <span className="WeatherForecast-temperature-min">
                         10º</span>  
                        </div>
                </div>
                
            </div>
        </div>
    );
}