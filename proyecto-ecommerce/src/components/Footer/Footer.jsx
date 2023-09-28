import React from 'react'
import './footer.css'
import PAGO from '../../assets/mercadopago.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
          <div className="pagos">
            <p>Payment methods</p>
            <img src={PAGO} alt="mercado-pago" />
          </div>
          <div className="red-social">
            <p>Follow us on our social networks</p>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-spotify"></i>
          </div>
        
        <div className="copyright">
          Copyright&copy; 2023 - All rights reserved
        </div>
        </div>
    </footer>
  )
}

export default Footer
