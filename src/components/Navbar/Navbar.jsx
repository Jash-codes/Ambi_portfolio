import "./Navbar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const isCollectionPage =
    location.pathname.includes("/collection/");

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="nav-logo">
        <img src="/logo.png" alt="Ambi Logo" />
      </Link>

      {/* DESKTOP LINKS */}
      <ul className="nav-links">

        <li>
          <a href={isCollectionPage ? "/" : "#home"}>
            Home
          </a>
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

        <li>
          <a href={isCollectionPage ? "/#gallery" : "#gallery"}>
            Gallery
          </a>
        </li>

        <li>
          <a href={isCollectionPage ? "/#footer" : "#footer"}>
            Contact
          </a>
        </li>

      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {isCollectionPage && (
          <Link
            to="/"
            className="back-home-btn"
          >
            Back Home
          </Link>
        )}

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#collections" onClick={() => setMenuOpen(false)}>
          Collections
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </a>

        <a href="#footer" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="mobile-whatsapp"
        >
          <FaWhatsapp />
          WhatsApp
        </a>

      </div>

    </nav>
  );
}

export default Navbar;