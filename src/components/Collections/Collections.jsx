import "./Collections.css";

import { Link } from "react-router-dom";

function Collections() {

  const collections = [

    {
      id:"royalty",
      title:"Reflections of Royalty",

      image:"/royal-collection.jpg",

      description:
      "Handcrafted sarees inspired by regal heritage."
    },

    {
      id:"sun-kissed",

      title:"Sun-Kissed Heritage",

      image:"/sun-collection.jpg",

      description:
      "Elegant weaves touched by golden tradition."
    }

  ];

  return (

    <section
      id="collections"
      className="collections"
    >

      {/* TITLE */}

      <div className="section-header">

        <p>Royal Saree Collections</p>

        <h2>
          Timeless Heritage
        </h2>

      </div>

      {/* COLLECTION GRID */}

      <div className="collection-grid">

        {
          collections.map((item,index)=>(

            <Link
              to={`/collection/${item.id}`}
              className="collection-card"
              key={index}
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
              />

              {/* OVERLAY */}

              <div className="collection-overlay">

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>

                <span>
                  Explore Collection
                </span>

              </div>

            </Link>

          ))
        }

      </div>

    </section>
  );
}

export default Collections;