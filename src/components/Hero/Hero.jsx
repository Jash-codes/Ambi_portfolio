import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {

  return (

    <section id="home" className="hero">

      {/* DARK OVERLAY */}

      <div className="hero-overlay"></div>

      {/* GOLDEN GLOW */}

      <div className="gold-glow glow-1"></div>
      <div className="gold-glow glow-2"></div>

      {/* CONTENT */}

      <motion.div

        className="hero-content"

        initial={{ opacity:0, y:50 }}

        animate={{ opacity:1, y:0 }}

        transition={{
          duration:1.4
        }}
      >

        {/* LOGO */}

        <motion.img
          src="/logo.png"
          alt="Ambi Logo"
          className="hero-logo"

          initial={{ opacity:0, scale:0.8 }}

          animate={{ opacity:1, scale:1 }}

          transition={{
            duration:1.2
          }}
        />

        {/* SMALL TAGLINE */}

        <p className="hero-tagline">
          HERITAGE • ELEGANCE • ROYALTY
        </p>

        {/* MAIN TITLE */}

        <h1>
          Ambi by
          <span> Sujata Pai</span>
        </h1>

        {/* QUOTE */}

        <p className="hero-quote">
          “There is luxury in simplicity”
        </p>

        {/* DESCRIPTION */}

        <p className="hero-description">

          A timeless showcase of handcrafted sarees,
          woven with heritage, elegance,
          and royal artistry.

        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <a
            href="#collections"
            className="explore-btn"
          >
            Explore Collections
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hero-whatsapp"
          >
            WhatsApp Inquiry
          </a>

        </div>

      </motion.div>

      {/* SCROLL INDICATOR */}

      <div className="scroll-indicator">

        <span></span>

      </div>

    </section>
  );
}

export default Hero;