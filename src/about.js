import React from "react";
import { Link } from "react-router-dom";
import './about.css';
import { HashLink } from "react-router-hash-link";
import about from './photos/aboutus.jpg'
import story from './photos/ourstory.jpg'
function About()
{
    return(
        <>
        <div className="container">
            <div className="aboutheading">
            
            <img src={about}  alt="aboutus image"  className="aboutusimg" />
            </div>

            <div className="aboutcontent">
                <div className="aboutwelcome">
                    <p>Welcome to our PG accommodation, your home away from home. Nestled in a prime location, our PG offers a perfect blend of comfort, convenience, and community.</p>
                </div>


                <div className="story">
                    <div>
                <img src={story}  alt="aboutus image"  className="storyimg" />
                </div>

                  <div>  <h2>Our Story</h2>
                    <p>Our PG was founded with a vision to provide a welcoming and supportive environment for students and professionals. We understand the challenges of living away from home and strive to create a space where you can feel comfortable, safe, and cared for.</p>
                    </div>A
                </div>

                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>We are committed to offering high-quality amenities and services to ensure a pleasant and hassle-free stay for our residents. Our mission is to provide a clean, safe, and friendly environment where you can focus on your studies or work without any worries.</p>
                </div>

                <div className="offer">

                    <h2>What We Offer</h2>
                    <p><strong>Comfortable Accommodation: </strong>Our rooms are designed to offer a cozy and comfortable living experience.</p>
<p><strong>Essential Amenities:</strong> We provide washing machines, geysers, fresh drinking water, free WiFi, and more to make your stay convenient.</p>
<p><strong>Secure Living:</strong> Our PG is equipped with CCTV cameras to ensure your safety.</p>
<p><strong>Daily Cleaning:</strong> We maintain high standards of cleanliness with daily cleaning services.</p>
<p><strong>Prime Location:</strong> Located near shopping malls, coaching centers, and public transport, our PG offers easy access to everything you need.</p>
                </div>

                <div className="support">
                    <h2>Cummunity And Support</h2>
                    <p>At our PG, we believe in fostering a sense of community. We organize regular events and activities to help you connect with fellow residents and build lasting friendships. Our friendly staff is always available to assist you with any concerns or needs.</p>
                </div>

                <div className="join">
                    <h2>join Us</h2>
                    <p>Whether you're a student, a working professional, or just someone looking for a comfortable place to stay, our PG is the perfect choice. Join us and experience the best in PG living. We look forward to welcoming you to our community!</p>
                </div>

                <div className="aboutcontact">
                    <h2>Contact Us</h2>
                    <p>For more information or to schedule a visit, please don't hesitate to reach out to us. We're here to help you find your new home.</p>
                </div>


                


            </div>
            
           

            
            
        </div>
        
          <div className="footerlinks">
        <div className="footerlist">
            <Link to="/about">About</Link>
            </div>
          <div className="footerlist" >  
          <ol>  <li><Link to="/service">Services</Link></li>
         <li>  <HashLink to="/service#servicesblock">Amenities</HashLink></li>
         <li>  <HashLink to="/service#foodid">Food menu</HashLink></li>
         <li>  <HashLink to="/service#foodtimeingid">Food Timeing</HashLink></li>
           </ol>
          </div>
         <div className="footerlist">   <Link to="/contact">Contact</Link></div>
         </div>
        </>
    )
}
export default About;