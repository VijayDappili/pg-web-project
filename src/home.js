import React from "react";
import {Link} from 'react-router-dom';
import bg from './video/firstvideo.mp4';
import bg2 from './video/Welcome.mp4';
import bg3 from './video/roomshare.mp4';
import bg4 from './video/food.mp4';
import { HashLink } from "react-router-hash-link";
import './home.css'

function Home(){
    return(
        <>

     <div className="homevideo">
        <div>
            <video className="backgroundvideo1" autoPlay loop muted>
                <source src={bg} type="video/mp4"/>
            </video>
            </div>

           

            
            
              
        </div>  
<div className="bg2">
        <video className="backgroundvideo2" autoPlay loop muted>
                <source src={bg2} type="video/mp4"/>
            </video>
           {/* <h1 className="heading">☏ 7619613392
                <br></br>
                <br></br>
                Manager:Ramana Reddy

            </h1>*/}
            </div>


            <div className="bg3">
            <video className="backgroundvideo3" autoPlay loop muted>
                <source src={bg3} type="video/mp4"/>
            </video>
            </div>

            <div className="bg4">
            <video className="backgroundvideo4" autoPlay loop muted>
                <source src={bg4} type="video/mp4"/>
            </video>
            </div>

        <div className="homecontent">

        <h1>home</h1>
       
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

export default Home;