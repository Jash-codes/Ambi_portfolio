import "./Footer.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

function Footer() {

  return (

    <footer
      id="footer"
      className="footer"
    >

      <div className="footer-container">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="footer-left">

          {/* GLOW */}

          <div className="footer-left-glow"></div>

          {/* CONTENT */}

          <div className="footer-left-content">

            <p className="footer-small-text">
              Luxury Saree Concierge
            </p>

            <h2>
              Connect With
              Ambi
            </h2>

            <span>
              Personalized assistance for
              collections, saree availability,
              boutique visits, and styling support.
            </span>

            {/* BUTTON */}

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp-btn"
            >

              <FaWhatsapp />

              Chat on WhatsApp

            </a>

            {/* SOCIALS */}

            <div className="footer-socials">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="mailto:ambi@gmail.com"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="footer-right">

          {/* TOP GOLD LINE */}

          <div className="footer-gold-line"></div>

          {/* BRAND */}

          <div className="footer-brand">

            <img
              src="/logo.png"
              alt="Ambi Logo"
            />

            <div>

              <h2>
                Ambi by Sujata Pai
              </h2>

              <p>
                Crafted with heritage,
                elegance, and timeless simplicity.
              </p>

            </div>

          </div>

          {/* DETAILS */}

          <div className="footer-details">

            {/* ADDRESS */}

            <div className="footer-item">

              <div className="footer-icon">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h4>
                  Boutique Address
                </h4>

                <p>
                  83, Eldams Rd,
                  Sriram Colony,
                  Teynampet,
                  Chennai,
                  Tamil Nadu 600018
                </p>

              </div>

            </div>

            {/* PHONE */}

            <div className="footer-item">

              <div className="footer-icon">

                <FaPhoneAlt />

              </div>

              <div>

                <h4>
                  Contact
                </h4>

                <p>
                  044 4502 6080
                </p>

              </div>

            </div>

            {/* HOURS */}

            <div className="footer-item">

              <div className="footer-icon">

                <FaClock />

              </div>

              <div>

                <h4>
                  Boutique Hours
                </h4>

                <p>
                  Open Daily — 11 AM Onwards
                </p>

              </div>

            </div>

          </div>

          {/* LINKS */}

          <div className="footer-links">

            <a href="#collections">
              Collections
            </a>

            <a href="#about">
              About
            </a>

            <a href="#gallery">
              Gallery
            </a>

            <a href="#home">
              Home
            </a>

          </div>

          {/* COPYRIGHT */}

          <div className="footer-bottom">

            <span>
              © 2026 Ambi by Sujata Pai.
              All Rights Reserved.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;