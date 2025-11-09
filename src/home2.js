import React from "react";
import { Link } from 'react-router-dom';
import './Homepage2.css';

function Home() {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Welcome to Your Home Away From Home</h1>
        <p>Comfort, Safety, and Community</p>
        <Link to="/booking" className="cta-button">Book Now</Link>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>Located in the heart of the city, our Paying Guest accommodations offer a comfortable and safe stay with all the amenities you need. We pride ourselves on creating a community where everyone feels at home.</p>
      </section>

      <section className="featured-rooms">
        <h2>Our Rooms</h2>
        <div className="room-cards">
          <div className="room-card">
            <img src="room1.jpg" alt="Room 1" />
            <h3>Deluxe Room</h3>
            <p>A spacious room with all modern amenities.</p>
          </div>
          <div className="room-card">
            <img src="room2.jpg" alt="Room 2" />
            <h3>Single Room</h3>
            <p>Perfect for solo travelers looking for comfort.</p>
          </div>
          <div className="room-card">
            <img src="room3.jpg" alt="Room 3" />
            <h3>Shared Room</h3>
            <p>An affordable option for those who don't mind sharing.</p>
          </div>
        </div>
      </section>

      <section className="amenities-section">
        <h2>Amenities</h2>
        <div className="amenities">
          <div className="amenity">
            <i className="icon-wifi"></i>
            <p>Free Wi-Fi</p>
          </div>
          <div className="amenity">
            <i className="icon-meal"></i>
            <p>Meals Included</p>
          </div>
          <div className="amenity">
            <i className="icon-laundry"></i>
            <p>Laundry Service</p>
          </div>
          <div className="amenity">
            <i className="icon-security"></i>
            <p>24/7 Security</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Guests Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Staying here was a wonderful experience. The staff are friendly and the facilities are excellent."</p>
            <h3>- John Doe</h3>
          </div>
          <div className="testimonial">
            <p>"A home away from home indeed! I felt safe and comfortable during my entire stay."</p>
            <h3>- Jane Smith</h3>
          </div>
        </div>
      </section>

      <section className="location-section">
        <h2>Find Us Here</h2>
        <div className="map">
          {/* Embed Google Map */}
        </div>
        <p>We are located near major landmarks and public transport. Easy to find, easy to commute.</p>
      </section>

      <footer>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social-media">
          {/* Add social media icons */}
        </div>
      </footer>
    </div>
  );
}

export default Home;
