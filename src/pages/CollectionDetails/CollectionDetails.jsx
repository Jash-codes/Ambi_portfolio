import "./CollectionDetails.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Collections() {

  const collections = [

    {
      id: "royalty",

      title: "Reflections of Royalty",

      subtitle:
      "Regal handcrafted silk sarees inspired by palace heritage.",

      image: "/royal-collection.jpg",
    },

    {
      id: "sun-kissed",

      title: "Sun-Kissed Heritage",

      subtitle:
      "Golden elegance woven with timeless craftsmanship.",

      image: "/sun-collection.jpg",
    }

  ];

  return (

    <section
      id="collections"
      className="collections"
    >

      {/* LEFT BORDER */}

      <div className="royal-strip left"></div>

      {/* RIGHT BORDER */}

      <div className="royal-strip right"></div>

      {/* SECTION TITLE */}

      <div className="collections-header">

        <p>
          Luxury Saree Archives
        </p>

        <h2>
          Royal Collections
        </h2>

      </div>

      {/* COLLECTION SHOWCASE */}

      {
        collections.map((item,index)=>(

          <motion.div

            className={`royal-collection ${
              index % 2 !== 0
              ?
              "reverse"
              :
              ""
            }`}

            key={index}

            initial={{ opacity:0, y:80 }}

            whileInView={{ opacity:1, y:0 }}

            transition={{ duration:1 }}

            viewport={{ once:true }}
          >

            {/* IMAGE SIDE */}

            <div className="collection-image-wrapper">

              <div className="image-glow"></div>

              <img
                src={item.image}
                alt={item.title}
                className="collection-image"
              />

            </div>

            {/* CONTENT SIDE */}

            <div className="collection-content">

              <span className="collection-number">
                0{index + 1}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.subtitle}
              </p>

              <Link
                to={`/collection/${item.id}`}
                className="collection-btn"
              >
                Enter The Gallery
              </Link>

            </div>

          </motion.div>

        ))
      }

    </section>
  );
}

export default Collections;