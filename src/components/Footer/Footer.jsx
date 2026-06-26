import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">

      {/* Decorative Frame */}

      <img
        src="/wappborderframe.png"
        alt="Frame"
        className="footer-frame"
      />

      <div className="footer-container">

        {/* ===========================
            LOGO
        =========================== */}

        <div className="footer-logo-section">

          <img
            src="/logo.png"
            alt="Ambi Logo"
            className="footer-logo"
          />

          <h2>
            Ambi by Sujata Pai
          </h2>

        </div>

        {/* ===========================
            INFO
        =========================== */}

        <div className="footer-info">

          <div className="info-box">

            <FaMapMarkerAlt />

            <div>

              <h4>Address</h4>

              <p>
                83, Eldams Road,
                <br />
                Sriram Colony,
                <br />
                Teynampet,
                Chennai - 600018
              </p>

            </div>

          </div>

          <div className="info-box">

            <FaPhoneAlt />

            <div>

              <h4>Contact</h4>

              <p>
                044 4502 6080
              </p>

            </div>

          </div>

          <div className="info-box">

            <FaEnvelope />

            <div>

              <h4>Email</h4>

              <p>
                ambibysujatapai@gmail.com
              </p>

            </div>

          </div>

          <div className="info-box">

            <FaClock />

            <div>

              <h4>Studio Hours</h4>

              <p>
                11:00 AM – 6:00 PM
                <br />
                Sunday Holiday
              </p>

            </div>

          </div>

        </div>

        {/* ===========================
            NAVIGATION
        =========================== */}

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#collections">
            Collections
          </a>

          <a href="#about">
            About Designer
          </a>

          <a href="#about2">
            About Ambi
          </a>

        </div>

        {/* ===========================
            SOCIAL
        =========================== */}

        <div className="footer-social">

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

        </div>

        {/* ===========================
            COPYRIGHT
        =========================== */}

        <div className="footer-bottom">

          © {new Date().getFullYear()} Ambi by Sujata Pai.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;