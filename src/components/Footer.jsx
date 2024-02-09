import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
  <div className="waves">
    <div className="wave" id="wave1" />
    <div className="wave" id="wave2" />
    <div className="wave" id="wave3" />
    <div className="wave" id="wave4" />
  </div>
  <ul className="social-icon">
    <li className="social-icon__item"><a className="social-icon__link" href="#">
        <ion-icon name="logo-facebook" />
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
        <ion-icon name="logo-twitter" />
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
        <ion-icon name="logo-linkedin" />
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
        <ion-icon name="logo-instagram" />
      </a></li>
  </ul>
  
  <p>©2021 Nadine Coelho | All Rights Reserved</p>
</footer>
    </div>
  )
}

export default Footer