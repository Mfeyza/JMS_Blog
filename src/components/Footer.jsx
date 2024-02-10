import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Footer = () => {
  const city=useSelector((state)=>state.auth.city)
  console.log(useSelector((state)=>state.auth.city))
  const [weather, setWeather] = useState("İstanbul");
  const [error, setError] = useState("");

  const getWeather = async () => {
    const APIkey = process.env.REACT_APP_API_KEY1;
    const cityName = city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=tr&units=metric&appid=${APIkey}`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError("");
    } catch (error) {
      console.error("Bir hata oluştu!", error);
      setError("Bir hata oluştu!");
      setWeather(null); 
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

 

  return (
    <div>
      <footer className="footer">
  <div className="waves">
    <div className="wave" id="wave1" />
    <div className="wave" id="wave2" />
    <div className="wave" id="wave3" />
    <div className="wave" id="wave4" />
  </div>
 
  
  <p style={{marginTop:"3rem"}}>©2024 Nadine Coelho | All Rights Reserved </p>  <q>{weather?.name } : {weather?.main?.temp}</q>
  <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="" style={{fontSize:"5px"}} />
</footer>
    </div>
  )
}

export default Footer