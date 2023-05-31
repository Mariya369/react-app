import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <section className="columns">
    <div className="main">
        <div className="float-left">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
   <div className="float-left">
    <WeatherTemperature celsius={props.data.temperature} />
   </div>
   </div>
   <div className="sidebar-first">
   <h1>{props.data.city}</h1>
  <ul>
   <li>
   <FormattedDate date={props.data.date} />
   </li>
   <li className="description">{props.data.description}</li>
  </ul>
  </div>
   <div className="sidebar-second">
       <ul>
           <li>Precipitation: 15%</li>
           <li>Humidity: {props.data.humidity}%</li>
           <li>Wind: {props.data.wind} km/h</li>
       </ul>
   </div>
   </section>
</div>
   );
}