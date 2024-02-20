import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Footer = () => {
  const city=useSelector((state)=>state.auth.city)

  const [weather, setWeather] = useState(null);
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
//     <div>
//       <footer className="footer">
//   <div className="waves">
//     <div className="wave" id="wave1" />
//     <div className="wave" id="wave2" />
//     <div className="wave" id="wave3" />
//     <div className="wave" id="wave4" />
//   </div>
 
  
//   <p style={{marginTop:"3rem"}}>©2024 Nadine Coelho | All Rights Reserved </p>  <p>{weather?.name }  {weather?.main?.temp}</p>
//   <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="" style={{fontSize:"5px"}} />
// </footer>
//     </div>
<div class="pg-footer">
<footer class="footer-distributed">

<div class="footer-left">

  <h3>Company<span>logo</span></h3>

  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    <a href="#">Pricing</a>
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">Company Name © 2015</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+1.555.555.5555</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@company.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

  </div>

</div>

</footer>
  </div>
  )
}

export default Footer