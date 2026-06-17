import "./About.css";

import owner from "../../assets/owner.png";

function About() {

  return (

    <section
      className="about-section"
      id="about"
    >

      <div className="about-container">

        {/* LEFT CONTENT */}

        <div className="about-content">

          <span className="about-subtitle">
            FOUNDER • CURATOR • VISIONARY
          </span>

          <h2>
            Sujata Pai
          </h2>

          <div className="royal-divider"></div>

          <p>
            Ambi by Sujata Pai is a celebration of timeless
            Indian craftsmanship, heritage textiles, and
            elegant luxury.
          </p>

          <p>
            Every collection is thoughtfully curated to
            honour tradition while embracing contemporary
            sophistication.
          </p>

          <p>
            With decades of passion for design and culture,
            Sujata Pai has transformed Ambi into a destination
            where every saree tells a story.
          </p>

          <div className="royal-quote">

            <span>❝</span>

            There is luxury in simplicity

            <span>❞</span>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="about-image-wrapper">

          <div className="royal-frame">

            <img
              src={owner}
              alt="Sujata Pai"
            />

          </div>

        </div>

      </div>
    </section>

  );
}

export default About;