import "./Navbar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const isCollectionPage = location.pathname.includes("/collection/");

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <Link
          to="/"
          className="nav-logo"
        >
          <img
            src="/logo.png"
            alt="Ambi"
          />
        </Link>

        {/* DESKTOP LINKS */}

        <ul className="nav-links">

          <li>
            <a href={isCollectionPage ? "/" : "#home"}>Home</a>
          </li>

          <li>
            <a href={isCollectionPage ? "/#collections" : "#collections"}>
              Collections
            </a>
          </li>

          <li>
            <a href={isCollectionPage ? "/#about" : "#about"}>
              About
            </a>
          </li>

          {/* <li>
            <a href={isCollectionPage ? "/#gallery" : "#gallery"}>
              Gallery
            </a>
          </li> */}

          <li>
            <a href={isCollectionPage ? "/#footer" : "#footer"}>
              Contact
            </a>
          </li>

        </ul>

        {/* RIGHT */}

        <div className="nav-right">

          {isCollectionPage && (

            <Link
              to="/"
              className="back-home-btn"
            >
              ← Back
            </Link>

          )}

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* MOBILE */}

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <a
          href={isCollectionPage ? "/" : "#home"}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href={isCollectionPage ? "/#collections" : "#collections"}
          onClick={() => setMenuOpen(false)}
        >
          Collections
        </a>

        <a
          href={isCollectionPage ? "/#about" : "#about"}
          onClick={() => setMenuOpen(false)}
        >
          About Designer
        </a>

        <a
          href={isCollectionPage ? "/#about2" : "#about2"}
          onClick={() => setMenuOpen(false)}
        >
          About Ambi
        </a>

        <a
          href={isCollectionPage ? "/#footer" : "#footer"}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        {isCollectionPage && (

          <Link
            to="/"
            className="mobile-back"
            onClick={() => setMenuOpen(false)}
          >
            ← Back Home
          </Link>

        )}

        {/* <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="mobile-whatsapp"
        >
          <FaWhatsapp />
          WhatsApp
        </a> */}

      </div>

    </nav>

  );

}

export default Navbar;