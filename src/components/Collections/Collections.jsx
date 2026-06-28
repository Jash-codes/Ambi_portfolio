import "./Collections.css";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <section
      id="collections"
      className="collections"
    >
      <div className="collections-header">

        <span>AMBI COLLECTIONS</span>

        <h2>Our Collections</h2>

        <p>
          Discover handcrafted collections inspired by
          heritage, artistry and timeless elegance.
        </p>

      </div>

      {/* SUNKISSED */}

      <div className="collection-card">

        <div className="collection-image">

          <img
            src="/sunkissed.jpeg"
            alt="Sunkissed Collection"
          />

        </div>

        <div className="collection-content">

          <span className="collection-label">
            COLLECTION I
          </span>

          <h3>
            Sunkissed
          </h3>

          <p>
            Inspired by royal courtyards, antique gold
            embroidery, sunlit architecture and timeless
            Indian craftsmanship, the Sunkissed Collection
            celebrates warmth, richness and regal femininity
            through earthy tones, heritage motifs and
            luxurious handcrafted weaves.
          </p>

          <div className="palette-title">
            Color Palette
          </div>

          <div className="palette">

            <span style={{ background: "#556246" }}></span>

            <span style={{ background: "#DDB8BE" }}></span>

            <span style={{ background: "#202130" }}></span>

            <span style={{ background: "#F0E7D7" }}></span>

            <span style={{ background: "#D08B72" }}></span><br></br>

            <span style={{ background: "#A6533B" }}></span>

            <span style={{ background: "#D7A62D" }}></span>

            <span style={{ background: "#C1272D" }}></span>

          </div>

          <Link
            to="/collection/sunkissed"
            className="explore-btn"
          >
            Explore Collection
          </Link>

        </div>

      </div>

      {/* CLOUDBURST */}

      <div className="collection-card">

        <div className="collection-image">

          <img
            src="/cloudburst.jpeg"
            alt="Cloudburst Collection"
          />

        </div>

        <div className="collection-content">

          <span className="collection-label">
            COLLECTION II
          </span>

          <h3>
            Cloudburst
          </h3>

          <p>
            Inspired by clouds, pearls, moonlit reflections
            and ethereal elegance, the Cloudburst Collection
            blends soft textures and luminous tones to create
            a serene, graceful and contemporary expression
            of luxury.
          </p>

          <div className="palette-title">
            Color Palette
          </div>

          <div className="palette">

            <span style={{ background: "#F8F6F2" }}></span>

            <span style={{ background: "#EAE6DE" }}></span>

            <span style={{ background: "#C79660" }}></span>

            <span style={{ background: "#111111" }}></span>

          </div>

          <Link
            to="/collection/cloudburst"
            className="explore-btn"
          >
            Explore Collection
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Collections;