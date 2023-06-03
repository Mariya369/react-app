import React, { useState, useEffect } from "react";


export default function FormattedDate(props) {
   const [time, setTime] = useState(" ");

   useEffect(() => {
    const interval = setInterval(() => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        const FormattedTime = `${hours}:${minutes}:${seconds}` ;
        setTime(FormattedTime);
    }, 1000);

    return () => clearInterval(interval);
   }, []);

    return <div>{time}</div> ;
}