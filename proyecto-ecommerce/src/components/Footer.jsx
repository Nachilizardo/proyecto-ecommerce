import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
          <div className="pagos">
            <p>Medios de pagos</p>
            <img src="./assets/imgfooter/visa.png" alt="" />
            <img src="./assets/imgfooter/mastercard.png" alt=""/>
            <img src="./assets/imgfooter/american_express.png" alt=""/>
            <img src="./assets/imgfooter/Paypal.png" alt=""/>
          </div>
          <div className="red-social">
            <p>Siguenos en nuestras redes</p>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-spotify"></i>
          </div>
        </div>
        <div className="copyright">
          Copyright&copy; 2023 - Todos los derechos reservados
        </div>
    </footer>
  )
}

export default Footer
