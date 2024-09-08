import React from "react";
import Card from "../../../components/site/card";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Discover Amazing Content</h1>
      <p className="home-subtitle">
        Explore our beautifully designed cards showcasing the latest trends!
      </p>
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
};

export default Home;
