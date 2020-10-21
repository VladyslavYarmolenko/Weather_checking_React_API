import React from 'react';



const Weather = (props) => {
  return(
    <>
     {props.city &&
        <div>
          <p>Местоположение: {props.city}, {props.country}</p>
          <p>Темперартура: {props.temp}</p>
          <p>Давление: {props.pressure}</p>
          <p>Заход солнца: {props.sunset}</p>
        </div>
        }
        {props.error && <p>{props.error}</p>}
    </>
  )
}

export default Weather;