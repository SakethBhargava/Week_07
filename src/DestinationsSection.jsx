// DestinationsSection.js

import React from "react";
import "./Destinations.css";

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination destination-paris">
        <div className="destination-item">
          <img src="/paris.jpg" alt="Paris" />
          <h3>Paris</h3>
          <p>The city of love and lights.</p>
        </div>
      </div>
      <div className="destination destination-london">
        <div className="destination-item">
          <img src="/london.jpeg" alt="London" />
          <h3>London</h3>
          <p>The capital city of England.</p>
        </div>
      </div>
      <div className="destination destination-rome">
        <div className="destination-item">
          <img src="/rome.jpeg" alt="Rome" />
          <h3>Rome</h3>
          <p>The eternal city of history and culture.</p>
        </div>
      </div>
      <div className="destination destination-india">
        <div className="destination-item">
          <img src="/india.jpeg" alt="India" />
          <h3>India</h3>
          <p>The land of diversity and spirituality.</p>
        </div>
      </div>
      <div className="destination destination-bali">
        <div className="destination-item">
          <img src="/bali.jpeg" alt="Bali" />
          <h3>Bali</h3>
          <p>The island of gods and paradise beaches.</p>
        </div>
      </div>
      {/* Add more destinations as needed */}
    </section>
  );
};

export default DestinationsSection;
