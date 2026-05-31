import "./Collections.css";

function Collections() {

  const collections = [
    {
      title:"Sun-Kissed Heritage",
      image:"https://images.unsplash.com/photo-1583391733981-8498402d2a73?q=80&w=1974"
    },
    {
      title:"Reflections of Royalty",
      image:"https://images.unsplash.com/photo-1610030469668-4f3f64fef3d1?q=80&w=1974"
    }
  ]

  return (
    <section id="collections" className="collections">

      <h2>Collections</h2>

      <div className="collection-grid">

        {collections.map((item,index)=>(
          <div className="collection-card" key={index}>

            <img src={item.image} alt="" />

            <div className="card-content">
              <h3>{item.title}</h3>

              <button>
                View Gallery
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Collections;