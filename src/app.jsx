import React from "react";
import Header from "./header";
import HeroSection from "./Herosection";
import DestinationsSection from "./DestinationsSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
