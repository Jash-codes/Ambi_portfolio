import Navbar from "../../components/Navbar/Navbar";

import Hero from "../../components/Hero/Hero";

import Collections from "../../components/Collections/Collections";

import About from "../../components/About/About";

import Gallery from "../../components/Gallery/Gallery";

import Footer from "../../components/Footer/Footer";

// import RoyalSpark from "../../components/RoyalSpark/RoyalSpark";

// import LatestCollections from "../../components/LatestCollections/LatestCollections";

function Home() {

  return (

    <>

      {/* <RoyalSpark /> */}
      <Navbar />

      <Hero />

      {/* <LatestCollections /> */}

      <Collections />

      <About />

      <Gallery />

      <Footer />
    </>
  );
}

export default Home;