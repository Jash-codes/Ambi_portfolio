import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTruck, FaClock } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-watermark">
        <img src="/logo.png" alt="Ambi Logo" className="watermark-logo" />
      </div>

      <div className="footer-container">
        <div className="footer-content">

          {/* STUDIO ADDRESS */}
          <div className="footer-column">
            <h3>STUDIO INFO </h3>
            <div className="contact-info">
              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <p>
                  83, Eldams Rd, Sriram Colony, <br></br>
                  Vannia Teynampet, Lubdhi Colony, <br></br>
                  Teynampet, Chennai, Tamil Nadu 600018
                </p>
              </div>

              <div className="info-item">
                <FaPhone className="icon" />
                <p>044 4502 6080</p>
              </div>

              <div className="info-item">
                <FaEnvelope className="icon" />
                <p>ambibysujatapai@gmail.com</p>
              </div>

              <div className="info-item">
                <FaClock className="icon" />
                <p>
                  Mon - Sat : 11:00 AM - 6:00 PM<br />
                  Sunday Holiday
                </p>
              </div>
            </div>
          </div>

          {/* QUICK MENU */}
          <div className="footer-column">
            <h3>QUICK MENU</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#about">About Designer</a></li>
              <li><a href="#about2">About Ambi</a></li>
            </ul>
          </div>

          {/* SHIPPING STANDARDS */}
          <div className="footer-column">
            <h3>SHIPPING STANDARDS</h3>
            <div className="shipping-info">
              <FaTruck className="shipping-icon" />
              <div>
                <strong>Ships Across India &amp; Worldwide</strong>
              </div>
            </div>
          </div>

          {/* REACH US - MAP */}
          <div className="footer-column map-column">
            <h3>REACH US</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7389.2882590036115!2d80.25014777484259!3d13.03770438728377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c14ad70e2f%3A0x169f9a469f8eb739!2sAmbi%20by%20Sujata%20Pai!5e1!3m2!1sen!2sin!4v1782570341495!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
                width="100%"
                height="190"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Floating WhatsApp Button
        <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="whatsapp-float">
          <FaWhatsapp /> Chat on WhatsApp
        </a> */}

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ambi by Sujata Pai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;