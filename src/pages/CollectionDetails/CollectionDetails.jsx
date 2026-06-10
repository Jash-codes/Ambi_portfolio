import "./CollectionDetails.css";

import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";


import { Link } from "react-router-dom";

function CollectionDetails() {

    const { id } = useParams();

    /* =========================
       COLLECTION DATA
    ========================== */

    const collections = {

        royalty: {

            title: "Reflections of Royalty",

            subtitle:
                "Regal handcrafted silk sarees inspired by palace heritage.",

            sarees: [

                {
                    name: "Royal Crimson Silk",

                    image: "/saree1.jpg",

                    description:
                        "Elegant handcrafted silk saree with luxurious zari weaving and royal aesthetics."
                },

                {
                    name: "Golden Heritage Weave",

                    image: "/saree2.jpg",

                    description:
                        "Inspired by traditional palace craftsmanship and timeless elegance."
                }

            ]

        },

        "sun-kissed": {

            title: "Sun-Kissed Heritage",

            subtitle:
                "Golden elegance woven with timeless craftsmanship.",

            sarees: [

                {
                    name: "Sunlit Gold Saree",

                    image: "/saree3.jpg",

                    description:
                        "Warm golden tones blended with luxurious handcrafted weaving."
                },

                {
                    name: "Amber Glow Silk",

                    image: "/saree4.jpg",

                    description:
                        "A rich heritage saree inspired by royal Indian artistry."
                }

            ]

        }

    };

    const collection = collections[id];

    return (

        <>
            <Navbar />

            <section className="collection-details">


                {/* BORDER STRIPS */}

                <div className="royal-border left"></div>

                <div className="royal-border right"></div>

                {/* HEADER */}

                <div className="details-header">

                    <p>
                        Luxury Saree Collection
                    </p>

                    <h1>
                        {collection.title}
                    </h1>

                    <span>
                        {collection.subtitle}
                    </span>

                </div>

                {/* SAREES */}

                <div className="saree-grid">

                    {
                        collection.sarees.map((item, index) => (

                            <div
                                className="saree-card"
                                key={index}
                            >

                                {/* IMAGE */}

                                <div className="saree-image-wrapper">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                </div>

                                {/* CONTENT */}

                                <div className="saree-content">

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                    <a
                                        href="https://wa.me/919999999999"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Inquire on WhatsApp
                                    </a>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </section>

        </>
    );
}

export default CollectionDetails;
// one pic is good

// are collecctions color based 
// mam profile
// collection details
// saree pics AI 
