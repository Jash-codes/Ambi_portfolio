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
            ABOUT DESIGNER
          </span>

          <h2>
            Sujata Pai
          </h2>

          <div className="royal-divider"></div>

          <p>
            Sujata Pai is a self-taught Fashion and Interior Designer, and also an excellent
            cook. At heart, she calls herself a creative soul. Her design style is deeply
            inspired by the raw beauty found in every region—the music, the food, the way
            the sunlight hits differently in each place—and how all of it stirs different
            emotions.
          </p>

          <p>
            She has a natural gift for capturing these emotions and translating them into
            styling for her clients—whether it’s customizing a unique outfit or creating a
            beautiful living space. Her creativity also shines through in her cooking, where
            she brings the same emotional depth and imagination.
          </p>

          <p>
            For Sujata, every creation begins with a spark of emotion. She then imagines the
            final outcome and the happiness it will bring to her clients. Her clients come
            from all age groups and genders, all seeking something unique—styling that
            reflects who they are, with great quality, perfect fit, and fine finishing. True to
            her motto:
            “There is Luxury in Simplicity.”
            ❤
          </p>

          <p>
            Over the years, Sujata has taken part in many shows and exhibitions. Now, she
            also works as a freelance consultant, collaborating with weavers, brands, and
            exhibition organisers to help them optimise their product presentation and
            improve their sales.</p>

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