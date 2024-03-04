import React from 'react';
import '../index.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';


const CardExampleCard = ({weatherData}) => (
    <Card>
      <Card.Content>
          <Card.Header className="header">Your City Name: {weatherData.name}</Card.Header>
          <p>{moment().format('dddd')}: {moment().format('LL')}</p>
          <p>Temprature: {weatherData.main.temp} &deg;F</p>
          <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
          <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
          <p>Description: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
      </Card.Content>
    </Card>
  )
  
  export default CardExampleCard;
