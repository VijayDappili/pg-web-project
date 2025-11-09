import React from "react";
import {Link} from 'react-router-dom';
import './service.css'
import wash from './photos/washing.png'
import gey from './photos/geyser.webp'
import filt from './photos/filter.webp'
import wif from './photos/wifi.png'
import cle from './photos/clean.jpg'
import cc from './photos/cctv.webp'
import { HashLink } from "react-router-hash-link";

function Service()

{

    const array=[{
        Image:wash,
           title: 'Washing Machine',
        description: 'Easy and convenient laundry services.'
    },
    {
        Image:gey,
         title: 'Geyser',
        description: 'Hot water available 24/7.'
    },
    {
        Image:filt,
         title: 'Fresh Drinking Water',
        description: 'Pure and fresh drinking water at all times.'

    },
    {
        Image:wif,
         title: 'Free WiFi',
        description: 'Stay connected with our high-speed internet.'
    },
    {
        Image:cle,
        title: 'Daily Cleaning',
       description: 'Daily cleaning ensures a consistently clean environment.'
   },
   {
    Image:cc,
    title: 'CC TV',
   description: 'Secure living with our all-encompassing CCTV surveillance'
},
   

]


const foodarray=[
{
    day:'Monday',
    BreakFast:'Upma',
    Lunch:'Dal, Rice',
    Dinner:'Chena curry,Roti,Rice,Dal'
},
{
    day:'Tuesday',
    BreakFast:'Idli',
    Lunch:'xxx',
    Dinner:'xxx'
},
{
    day:'Wednesday',
    BreakFast:'Puri',
    Lunch:'xxx',
    Dinner:'Egg Curry,Biriyani Rice'
},
{
    day:'Thursday',
    BreakFast:'Pulihora',
    Lunch:'xxx',
    Dinner:'Roti,Ladiesfinger fry'
},
{
    day:'Friday',
    BreakFast:'Dosa',
    Lunch:'xxx',
    Dinner:'xxx'
},{
    day:'Saturday',
    BreakFast:'Puha',
    Lunch:'xxx',
    Dinner:'xxx'
},{
    day:'Sunday',
    BreakFast:'Chapathi',
    Lunch:'xxx',
    Dinner:'Chiken curry,Masala Rice'
}
]
    
    return(
        <>
<div className="servicelist" id="servicesblock">

    <div className="listheading">
        <h1>OUR AMENITIES</h1>


    </div>
    <div className="listitems">
        {
            array.map((i,index)=>(
                <div className="amenity" key={index}>
                    {i.Image&& <img src={i.Image} alt={i.title} className="serviceimage"/> }
                    <h2>{i.title}</h2>
                    <p>{i.description}</p>

                </div>
            ))
        }
    </div>
</div>
        


<div className="foodcontainer" id="foodid" >
    <div className="foodheading">
        <h1>Weekly Menu Plan</h1></div>

    <div className="foodcontent">

        {foodarray.map((j,index)=>(
            <div className="day" key={index}>
                <h2>{j.day}</h2>
                <table className="foodtable">
                    <tr className="tr"><td><strong>BreakFast:</strong></td>
                    <td>{j.BreakFast}</td></tr>
                    <tr className="tr"><td><strong>Lunch:</strong></td>
                    <td>{j.Lunch}</td></tr>
                    <tr className="tr"><td><strong>Dinner:</strong></td>
                    <td>{j.Dinner}</td></tr>
                </table>
               {/* <p><strong>BreakFast:</strong>{j.BreakFast}</p>
                <p><strong>Lunch:</strong>{j.Lunch}</p>
                <p><strong>Dinner:</strong>{j.Dinner}</p>*/}

            </div>
        ))}

    </div>
     </div>
{/**food timings div begins */}
     <div className="foodtiming" id="foodtimeingid">
        <div className="foodtimingheading">
            <h1>Food Timings</h1>
        </div>

        <div className="foodtimingcontent">
           <table className="foodtimingtable"  >   
            <tr>
                <td> <h2>Breakfast:</h2></td>
                <td><h3>7:30-10:00</h3></td>
            </tr>

            <tr>
                <td> <h2>Lunch:</h2></td>
                <td><h3>12:00-2:30</h3></td>
            </tr>

            <tr>
                <td> <h2>Dinner:</h2></td>
                <td><h3>7:00-9:30</h3></td>
            </tr>
           </table>
        </div>
     </div>

     <div className="rules">
        <div className="rulesheading">
            <h2>Rules & Regulations</h2>
        </div>

        <div className="rulescontent">
            <ul>
                <li className="ruleitem">
                    Rule 1
                </li>
                <li className="ruleitem">
                    Rule 2
                </li>
                <li className="ruleitem">
                    Rule 3
                </li>
                <li className="ruleitem">
                    Rule 4
                </li>
                <li className="ruleitem">
                    Rule 4
                </li>
                <li className="ruleitem">
                    Rule 5
                </li>
                <li className="ruleitem">
                    Rule 6
                </li>
                <li className="ruleitem">
                    Rule 7
                </li>
                <li className="ruleitem">
                    Rule 8
                </li>
            </ul>

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
export default Service;