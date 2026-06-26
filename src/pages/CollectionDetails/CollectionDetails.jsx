import "./CollectionDetails.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";

function CollectionDetails() {

  const { id } = useParams();

  const collections = {

    sunkissed: {
      title: "Sunkissed",
      subtitle:
        "Golden elegance woven with timeless craftsmanship.",

      sarees: [
        {
          name: "Sunkissed Saree 01",
          image: "/saree1.jpg"
        },
        {
          name: "Sunkissed Saree 02",
          image: "/saree2.jpg"
        },
        {
          name: "Sunkissed Saree 03",
          image: "/saree3.jpg"
        },
        {
          name: "Sunkissed Saree 04",
          image: "/saree4.jpg"
        },
        {
          name: "Sunkissed Saree 05",
          image: "/saree5.jpg"
        },
        {
          name: "Sunkissed Saree 06",
          image: "/saree6.jpg"
        }
      ]
    },

    cloudburst: {
      title: "Cloudburst",
      subtitle:
        "Dreamy textures inspired by luminous skies and heritage artistry.",

      sarees: [
        {
          name: "Cloudburst Saree 01",
          image: "/cloud1.jpg"
        },
        {
          name: "Cloudburst Saree 02",
          image: "/cloud2.jpg"
        },
        {
          name: "Cloudburst Saree 03",
          image: "/cloud3.jpg"
        },
        {
          name: "Cloudburst Saree 04",
          image: "/cloud4.jpg"
        },
        {
          name: "Cloudburst Saree 05",
          image: "/cloud5.jpg"
        },
        {
          name: "Cloudburst Saree 06",
          image: "/cloud6.jpg"
        }
      ]
    }

  };

  const collection = collections[id];

  if (!collection) {
    return (
      <>
        <Navbar />
        <div className="not-found">
          Collection Not Found
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="collection-details">

        {/* LEFT FRAME */}
        <div className="side-frame">
          <img
            src="/border-strip.png"
            alt="Royal Border"
          />
        </div>

        {/* CONTENT */}
        <div className="collection-content">

          <div className="details-header">

            <span>
              AMBI COLLECTION
            </span>

            <h1>
              {collection.title}
            </h1>

            <p>
              {collection.subtitle}
            </p>

          </div>

          <div className="saree-grid">

            {collection.sarees.map((saree, index) => (

              <div
                className="saree-card"
                key={index}
              >

                <div className="saree-image">

                  <img
                    src={saree.image}
                    alt={saree.name}
                  />

                </div>

                <div className="saree-info">

                  <h3>
                    {saree.name}
                  </h3>

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-btn"
                  >
                    <FaWhatsapp />
                    WhatsApp Inquiry
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT FRAME */}
        <div className="side-frame">
          <img
            src="/border-strip.png"
            alt="Royal Border"
          />
        </div>

      </section>
    </>
  );
}

export default CollectionDetails;