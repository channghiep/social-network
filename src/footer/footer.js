import React from 'react'
import {Link} from 'react-router-dom';

import './footer.css'
import footerLogo from '../components/assets/trustnews_logo_white.svg'
import twitterIcon from '../components/assets/twitter_icon.svg'
import facebookIcon from '../components/assets/facebook_icon.svg'
import instagramIcon from '../components/assets/instagram_icon.svg'
import youtubeIcon from '../components/assets/youtube_icon.svg'
import androidIcon from '../components/assets/android_icon.svg'
import appleIcon from '../components/assets/apple_icon.svg'

// import down1 from '../components/assets/down1.png'
// import down2 from '../components/assets/down2.png'
export default function Footer(){
    return(
        <div className="footer">
            <a className="footerLogo" href='/'>
                <img src={footerLogo} alt='Trust News logo' width='200px'/>
            </a>

            <div className="footerGrid">
                <div className='downloadApp'>
                    <p className="subheading">Our app will be available soon on</p>
                    <div className='downloadApple'>
                        <img src={appleIcon} alt="Apple logo"/>
                        {/* <p>DOWNLOAD FROM</p> */}
                        <p>APPLE APP STORE</p>
                    </div>
                    <div className='downloadGoogle'>
                        <img src={androidIcon} alt="Google Play logo"/>
                        {/* <p>DOWNLOAD FROM</p> */}
                        <p>GOOGLE PLAY STORE</p>
                    </div>
                </div>
                <div className='aboutUs'>
                    <p className="subheading">About Us</p>
                        <a className="footerLink" href='/'>Company Information</a>
                        <a className="footerLink" href='/'>Site Map</a>
                        <Link to='/terms-of-use' className="footerLink">Terms of Use</Link>
                        <Link to='/privacy-policy' className="footerLink">Privacy Policy</Link>
                        <a className="footerLink" href='/'>Advertise</a>
                </div>
                <div className='contactUs'>
                    <p className="subheading">Contact Us</p>
                    <a className="footerLink" href='/'>Job Opportunity</a>
                    <a className="footerLink" href='/'>Contact Form</a>
                </div>
                <div className='FAQs'>
                    <p className="subheading">FAQs</p>
                    <a className="footerLink" href='/'>Help Center</a>
                </div>

                <div className='newsletter'>
                    <p>Our Newsletter</p>
                    <form action="/">
                        <input type="text" id="emailfooter" name="email" value="enter your email"/>
                        <button className='subcribe'>
                            <p>subcribe</p>
                        </button>
                    </form>
                </div>
            </div>

            {/* <p className="subheading">Our new mobile apps and features coming soon.</p> */}
            <div className='footerEnd'>
                <p style={{color:'white'}}>© Trustnews. All Rights Reserved.</p>
                <div className='socialmedia'>
                    <a href='facebook.com'>
                        <img src={facebookIcon} alt='Facebook logo'/>
                    </a>
                    <a href='twitter.com'>
                        <img src={twitterIcon} alt='Twitter logo'/>
                    </a>
                    <a href='instagram.com'>
                        <img src={instagramIcon} alt='Instagram logo'/>
                    </a>
                    <a href='youtube.com'>
                        <img src={youtubeIcon} alt='Youtube logo'/>
                    </a>
                </div>
            </div>
        </div>
    )
}