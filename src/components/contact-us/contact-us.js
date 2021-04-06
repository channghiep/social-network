import React from 'react';

import './contact-us.css';

import bannercontactus from '../assets/banner-contactus.png';

export default function Contact() {
    return(

        <div>
            <div className="filler-banner-contactus"></div>
            <img className="banner-contactus" src={bannercontactus} alt="banner-contact-us"></img>
            <div className="intro-contactus">
                <h1 className>Contact Us</h1>
                <p>Our mission is to create a sustainable opportunity for writers and journalists
                to report fast, relevant and trustworthy news. Help us support open and honest journalism
                by subscribing to our news. Our annual membership fee supports our writers and our small
                commission percentage goes directly back to managing our initiatives for open journalism.</p>
            </div>
            <h1 className="h1-contactus">To subscribe to our news letters or learn more about <span>Trust News</span>,<br></br>please send your inquiry below.</h1>
            <div className="form-contactus">
                <div className="first-contactus">
                    <label for="firstname">first name</label>
                    <input type="firt name" id="firstname" name="firstname"/>
                </div>
                <div className="last-contactus">
                    <label for="lastname">last name</label>
                    <input type="last name" id="lastname" name="lastname"/>
                </div>
                <div className="email-contactus">
                    <label for="email">email address</label>
                    <input type="your.email@trustnews.com" id="email" name="email"/>
                </div>
                <div className="subject-contactus">
                    <label for="subject">subject</label>
                    <input type="subject" id="subject" name="subject"/>
                </div>
                <div className="message-contactus">
                    <label for="message">message</label>
                    <input type="message" id="message" name="message"/>
                </div>
                <button>submit</button>
            </div>
            
        </div>
        
        )
    };
