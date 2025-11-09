import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './contact.css'
import call from './photos/phone-call.png'
import eml from './photos/email.png'
import whatspp from './photos/whatsapp.png'
import { HashLink } from "react-router-hash-link";
 



function Contact()
{
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[message,setmessage]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/adduser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email,message }),
        });
        if (response.ok) {
            alert('Message sent successfully');
        } else {
            alert('Error');
        }
    };   

    return (
        <>
<div className="contactcontainer">
    <div className="contactheading">
        <h1>
            Contact Us
        </h1>
    </div>
 
    <div className="formdiv">
        <div className="contactcontent">
        <p>If you have any questions, feel free to reach out to us!</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="formitem" >

            <label>Name:</label>
            <input type="text" onChange={(e)=>{setname(e.target.value)}}></input>
            </div>
            <div className="formitem">
            <label>Email:</label>
            <input type="email" onChange={(e)=>{setemail(e.target.value)}}></input>
            </div>

            <div className="msg">
            <div className="formitem">
            <label>Message:</label>
            <input type="text" onChange={(e)=>{setmessage(e.target.value)}} placeholder="Type Your Question Here"></input>
            </div>
            </div>

            <div className="contactbuttondiv">
            <button type="submit"  className="contactformbutton">Submit</button>
            </div>

        </form>
         
    </div>

    <div className="othercontact">
        <div className="othercontactheading">
        <h2>Other Contact Methods</h2>
        </div>


<div className="othercontactlists">
        <div className="othermethods">
            <img src={call} alt="call us" className="callicon"/>   
            <h2>Call Us</h2>
            <h2>+91-761-961-3392</h2>
            <p>We can answer your call at any time</p>
            
        </div>
        <div className="othermethods">
        <img src={eml} alt="call us" className="callicon"/> 
            <h2>Email Us</h2>
            <h2>vijaydappili360@gmail.com</h2>
            <p>We will respond at any time</p>
            
        </div>
        <div className="othermethods">
        <img src={whatspp} alt="call us" className="callicon"/> 
            <h2>Message Us</h2>
            <h2>+91-761-961-3392</h2>
            <p>We will respond at any time</p>
            
        </div>

        
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
export default Contact;