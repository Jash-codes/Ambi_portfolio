import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* VIDEO */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">

        <img
          src="/logo.png"
          alt="Ambi Logo"
          className="hero-logo"
        />

        <p className="hero-quote">
          “There is luxury in simplicity”
        </p>

        <a
          href="#collections"
          className="hero-btn"
        >
          Explore Collections
        </a>

      </div>

    </section>
  );
}

export default Hero;