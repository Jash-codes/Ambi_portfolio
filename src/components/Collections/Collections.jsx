import "./Collections.css";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <section id="collections" className="collections">

      <div className="collections-header">
        <span>AMBI COLLECTIONS</span>
        <h2>Our Collections</h2>
        <p>
          Discover handcrafted saree stories woven with heritage,
          elegance and timeless artistry.
        </p>
      </div>

      {/* SUNKISSED */}

      <div className="collection-showcase">

        <div className="collection-main">
          <img
            src="/collections/sunkissed-cover.jpg"
            alt="Sunkissed Collection"
          />

          <div className="collection-overlay">
            <h3>Sunkissed</h3>

            <Link
              to="/collection/sunkissed"
              className="explore-btn"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        <div className="collection-side">

          <div className="side-image">
            <img
              src="/collections/sunkissed1.jpg"
              alt=""
            />
          </div>

          <div className="side-image">
            <img
              src="/collections/sunkissed2.jpg"
              alt=""
            />
          </div>

          <div className="side-image">
            <img
              src="/collections/sunkissed3.jpg"
              alt=""
            />
          </div>

        </div>

      </div>

      {/* CLOUDBURST */}

      <div className="collection-showcase">

        <div className="collection-main">
          <img
            src="/collections/cloudburst-cover.jpg"
            alt="Cloudburst Collection"
          />

          <div className="collection-overlay">
            <h3>Cloudburst</h3>

            <Link
              to="/collection/cloudburst"
              className="explore-btn"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        <div className="collection-side">

          <div className="side-image">
            <img
              src="/collections/cloudburst1.jpg"
              alt=""
            />
          </div>

          <div className="side-image">
            <img
              src="/collections/cloudburst2.jpg"
              alt=""
            />
          </div>

          <div className="side-image">
            <img
              src="/collections/cloudburst3.jpg"
              alt=""
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Collections;