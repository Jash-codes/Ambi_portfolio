import "./LatestCollections.css";

const featured = {
  image: "Saree.jpg",
  title: "Royal Kanchipuram",
  desc: "Handwoven silk sarees adorned with timeless zari artistry."
};

const topCollections = [
  {
    image: "Saree.jpg",
    title: "Temple Heritage"
  },
  {
    image: "Saree.jpg",
    title: "Bridal Elegance"
  },
  {
    image: "Saree.jpg",
    title: "Golden Weaves"
  }
];

const bottomCollections = [
  {
    image: "Saree.jpg",
    title: "Wedding Silk"
  },
  {
    image: "saree1.jpg",
    title: "Royal Zari"
  },
  {
    image: "saree1.jpg",
    title: "Vintage Collection"
  },
  {
    image: "/latest/saree8.jpg",
    title: "Designer Edition"
  }
];

function LatestCollections() {
  return (
    <section className="latest-section">

      <div className="latest-header">
        <span>NEW ARRIVALS</span>
        <h2>Latest Collections</h2>
        <p>
          Discover our newest handwoven masterpieces crafted with
          heritage, elegance, and timeless beauty.
        </p>
      </div>

      <div className="latest-layout">

        <div className="featured-card">
          <img
            src={featured.image}
            alt={featured.title}
          />

          <div className="featured-overlay">
            <h3>{featured.title}</h3>

            <p>{featured.desc}</p>

            <button>
              Explore Collection
            </button>
          </div>
        </div>

        <div className="side-cards">

          {topCollections.map((item, index) => (

            <div className="small-card" key={index}>
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="small-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default LatestCollections;