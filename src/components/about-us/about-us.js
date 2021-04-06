import React from 'react';

import './about-us.css';

import bannerabtussmall from '../assets/banner-aboutus-small.png';

import AboutUsCarou from './aboutCarou'

export default function About() {
    return(
        <div>
            <div className="carousel-aboutus">
                <AboutUsCarou/>
            </div>
            {/* <img className="banner-aboutus" src={bannerabtus} alt="banner-about-us"></img> */}
            <div className="brand-intro">
                <h1 className="h1-aboutus">About us</h1>
                <br></br>
                <p>
                    <span className="brand-name">Trust News </span>
                    is the first-ever peer-reviewed news platform where curated
                    articles meet audience-generated journalism. In today’s age where there is a growing influence of investors,
                    government, and companies over journalism and news, it has become evermore important that we have transparency around news reporting.
                </p>
                <br></br>
                <p>
                    <span className="brand-name">Trust News </span>
                    provides reliable and trustworthy news by enabling the exchange of value directly between journalists
                    and readers through blockchain technology. This approach empowers journalists to continue their work and
                    readers to receive trustworthy news. We also invite our readers to participate as contributing writers, creating
                    an opportunity to provide trusted and insightful stories.
                </p>
                <br></br>
                <p>We believe that our efforts help in providing a pathway to grow reliable and insightful news in today’s world of
                journalism.</p>
                <br></br>
                <h1 className="h1-aboutus">Join the movement. Be a part of our community.</h1>
                <br></br>
                <p>We refer to our contributing writers as citizen journalists. Readers who are interested in sharing their news article
                can apply to be citizen journalists. Upon joining, writers are equipped with their own personal pages on the platform to
                write and share their articles. All participating writers can connect with each other to provide support, share comments
                and provide feedback on the validity of their news reporting. This creates an online community where crowd-sourced content
                is closely monitored by the members as a means to ensure that the reporting is reliable. All published articles can be shared
                through social media channels.</p>
                <br></br>Together with our community, we are committed to careful, honest and trustworthy reporting.
                <p>If you are interested in joining our open journalism initiative, we would love for you to enroll in our community.</p>
            </div>
            <div className="brand-calltoaction">
                <img src={bannerabtussmall} alt="banner-about-us-small"></img>
                <h1 className="h1-calltoaction">To inquire about your interest, please contact us.</h1>
                <button className="abtus-calltoaction">learn more</button>
            </div>
        </div>
    )
};