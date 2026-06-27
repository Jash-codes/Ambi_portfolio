import "./CollectionDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import collectionsData from "../../data/collections.json";

function CollectionDetails() {
  const { id } = useParams();
  const [selectedSaree, setSelectedSaree] = useState(null);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    if (collectionsData[id]) {
      setCollection(collectionsData[id]);
    }
  }, [id]);

  if (!collection) {
    return <div className="not-found">Collection Not Found</div>;
  }

  return (
    <>
      <Navbar />

      <section className="collection-details">
        {/* Left Repeating Frame */}
        <div className="side-frame left" />

        {/* Main Content */}
        <div className="collection-content">
          <div className="details-header">
            <span>AMBI COLLECTION</span>
            <h1>{collection.title}</h1>
            <p>{collection.subtitle}</p>
          </div>

          <div className="saree-grid">
            {collection.sarees.map((saree) => (
              <div
                key={saree.id}
                className="saree-card"
                onClick={() => setSelectedSaree(saree)}
              >
                <div className="saree-image">
                  <img src={saree.image} alt={saree.name} />
                </div>
                <div className="saree-info">
                  <h3>{saree.name}</h3>
                  <p className="price">{saree.price}</p>
                  <button className="view-btn">Quick View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Repeating Frame */}
        <div className="side-frame right" />
      </section>

      {/* Popup Modal */}
      {selectedSaree && (
        <div className="modal-overlay" onClick={() => setSelectedSaree(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSaree(null)}>
              <FaTimes />
            </button>

            <div className="modal-image">
              <img src={selectedSaree.image} alt={selectedSaree.name} />
            </div>

            <div className="modal-info">
              <h2>{selectedSaree.name}</h2>
              <p className="modal-price">{selectedSaree.price}</p>
              <p className="modal-desc">{selectedSaree.desc}</p>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn-modal"
              >
                <FaWhatsapp /> Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CollectionDetails;