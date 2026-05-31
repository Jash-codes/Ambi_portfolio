import "./Collections.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Collections() {

  const collections = [

    {
      id:"royalty",

      title:"Reflections of Royalty",

      subtitle:
      "Regal handcrafted silk sarees inspired by timeless palace heritage.",

      image:"/royal-collection.jpg"
    },

    {
      id:"sun-kissed",

      title:"Sun-Kissed Heritage",

      subtitle:
      "Golden elegance woven with handcrafted sophistication.",

      image:"/sun-collection.jpg"
    }

  ];

  return (

    <section
      id="collections"
      className="collections"
    >

      {/* HEADER */}

      <motion.div

        className="collections-header"

        initial={{ opacity:0, y:60 }}

        whileInView={{ opacity:1, y:0 }}

        transition={{ duration:1 }}

        viewport={{ once:true }}
      >

        <p>
          Luxury Saree Collections
        </p>

        <h2>
          Timeless Royal Elegance
        </h2>

      </motion.div>

      {/* COLLECTION GRID */}

      <div className="collections-grid">

        {
          collections.map((item,index)=>(

            <motion.div

              className="collection-card"

              key={index}

              initial={{ opacity:0, y:80 }}

              whileInView={{ opacity:1, y:0 }}

              transition={{ duration:1 }}

              viewport={{ once:true }}
            >

              {/* IMAGE */}

              <div className="collection-image-wrapper">

                <div className="image-overlay"></div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="collection-image"
                />

              </div>

              {/* CONTENT */}

              <div className="collection-content">

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
                  Explore Collection
                </Link>

              </div>

            </motion.div>

          ))
        }

      </div>

    </section>
  );
}

export default Collections;