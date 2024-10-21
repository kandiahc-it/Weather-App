import weather from './weather_logo.png'
//import background from './cold-sea-cloudy-sky.jpg'
import Windspeed from './windspeed_logo.png'
import Humidity from './humidity_logo.png'
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [search,setSearch]=useState("chennai");
  const [cityname,setCityname]=useState(null);

  const weatherapp=async()=>{
    const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a5ef46f46ab7a195127376b2d07dde9c&units=metric`);
    const d=await r.json();
    console.log(d);
    setCityname(d);
  }
  useEffect(()=>{
    weatherapp();
  },[search]);
  return (
    <div className="App">
    <div className='Main'>
      <div className='Box'>
        <div className='search'>
          <input type='text-field' className='searchbar' placeholder='Enter the city Name' onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div className='temperature'>
          <img src={weather} alt='' className='weatherlogo'/>
          <h1>{cityname?.name}</h1>
          <h1 className='tempdata'>Temperature: {cityname?.main?.temp} °C</h1>
        </div>
        <div className='second_box'>
        <div className='humidity'>
          <img src={Humidity} alt='' className='humiditylogo'/>
          <h1>Humidity:  {cityname?.main?.humidity} %</h1>
        </div>
        <div className='windspeed'>
          <img src={Windspeed} alt='' className='windspeedlogo'/>
          <h1>Wind Speed: {cityname?.wind?.speed} Km/h</h1>
          <h1></h1>
        </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default App;
