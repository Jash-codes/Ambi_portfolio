import "./Navbar.css";
import { useState } from "react";

import {
    HiOutlineMenuAlt3,
    HiOutlineX
} from "react-icons/hi";

import { FaWhatsapp } from "react-icons/fa";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

            {/* LOGO */}

            <div className="nav-logo">

                <img
                    src="/logo.png"
                    alt="Ambi Logo"
                />

            </div>

            {/* DESKTOP NAVIGATION */}

            <ul className="nav-links">

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#collections">Collections</a>
                </li>

                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#gallery">Gallery</a>
                </li>

                <li>
                    <a href="#footer">Contact</a>
                </li>

            </ul>

            {/* RIGHT SIDE */}

            <div className="nav-right">

                {/* WHATSAPP BUTTON */}

                <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-btn"
                >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
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

            <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>

                <button
                    className="back-home-btn"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });

                        setMenuOpen(false);
                    }}
                >
                    ← Back To Home
                </button>

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