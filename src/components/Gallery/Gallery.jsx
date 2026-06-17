import "./Gallery.css";

const galleryItems = [
  {
    image: "gallery1.jpg",
    title: "Traditional Weaving",
    category: "Craftsmanship",
  },
  {
    image: "/gallery/workshop2.jpg",
    title: "Silk Thread Preparation",
    category: "Workshop",
  },
  {
    image: "/gallery/workshop3.jpg",
    title: "Master Artisans",
    category: "Heritage",
  },
  {
    image: "/gallery/workshop4.jpg",
    title: "Handloom Excellence",
    category: "Weaving",
  },
  {
    image: "/gallery/workshop5.jpg",
    title: "Dyeing Process",
    category: "Creation",
  },
  {
    image: "/gallery/workshop6.jpg",
    title: "Community Activities",
    category: "Culture",
  },
];

function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-header">
        <span>Behind The Craft</span>

        <h2>Our Heritage Gallery</h2>

        <p>
          A glimpse into our workshops, skilled artisans,
          traditional weaving methods, and the passion
          behind every saree we create.
        </p>
      </div>

      <div className="gallery-grid">

        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">

              <span>{item.category}</span>

              <h3>{item.title}</h3>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;