import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-introduction">
        <img
          src="https://media.istockphoto.com/id/816887384/photo/about-us.jpg?s=612x612&w=0&k=20&c=2X8lobqw8nUWHMshyfcExb7jmF73u9XzIBAsVMjLFv4=" // Replace with your image URL
          alt="About Us"
          className="about-image"
        />
        <p className="about-text">
          Welcome to our website! We are dedicated to providing top-notch services and creating innovative solutions. Our team of experts is committed to delivering exceptional results and ensuring customer satisfaction.
        </p>
      </section>
      <section className="about-details">
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize the industry with cutting-edge technology and creative solutions. We strive to exceed expectations and drive progress in everything we do.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
          <li>Excellence</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
