import "./Navbar.css";

import { useState } from "react";

import {
  HiOutlineMenuAlt3,
  HiOutlineX
} from "react-icons/hi";

import { FaWhatsapp } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const isCollectionPage =
    location.pathname.includes("/collection/");

  return (

    <nav className="navbar">

      {/* LOGO */}

      <Link
        to="/"
        className="nav-logo"
      >

        <img
          src="/logo.png"
          alt="Ambi Logo"
        />

      </Link>

      {/* DESKTOP NAVIGATION */}

      <ul className="nav-links">

        <li>

          {
            isCollectionPage
              ?
              <a href="/">
                Home
              </a>
              :
              <a href="#home">
                Home
              </a>
          }

        </li>

        <li>

          {
            isCollectionPage
              ?
              <a href="/#collections">
                Collections
              </a>
              :
              <a href="#collections">
                Collections
              </a>
          }

        </li>

        <li>

          {
            isCollectionPage
              ?
              <a href="/#about">
                About
              </a>
              :
              <a href="#about">
                About
              </a>
          }

        </li>

        <li>

          {
            isCollectionPage
              ?
              <a href="/#gallery">
                Gallery
              </a>
              :
              <a href="#gallery">
                Gallery
              </a>
          }

        </li>

        <li>

          {
            isCollectionPage
              ?
              <a href="/#footer">
                Contact
              </a>
              :
              <a href="#footer">
                Contact
              </a>
          }

        </li>

      </ul>

      {/* RIGHT SIDE */}

      <div className="nav-right">

        {/* WHATSAPP */}

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >

          <FaWhatsapp />

          <span>
            WhatsApp
          </span>

        </a>

        {/* MOBILE MENU BUTTON */}

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ?
              <HiOutlineX />
              :
              <HiOutlineMenuAlt3 />
          }

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        {/* BACK HOME BUTTON */}

        <Link
          to="/"
          className="back-home-btn"
          onClick={() => setMenuOpen(false)}
        >
          ← Back To Home
        </Link>

        {/* MOBILE LINKS */}

        {
          isCollectionPage
            ?
            <>
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="/#collections"
                onClick={() => setMenuOpen(false)}
              >
                Collections
              </a>

              <a
                href="/#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="/#gallery"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </a>

              <a
                href="/#footer"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </>
            :
            <>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="#collections"
                onClick={() => setMenuOpen(false)}
              >
                Collections
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </a>

              <a
                href="#footer"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </>
        }

        {/* MOBILE WHATSAPP */}

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="mobile-whatsapp"
        >

          <FaWhatsapp />

          Chat on WhatsApp

        </a>

      </div>

    </nav>
  );
}

export default Navbar;