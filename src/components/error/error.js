import React from 'react';
import {Link} from 'react-router-dom';

import './error.css';

import bannerError from '../assets/trustnews-error.jpg';

// import AboutUsCarou from './aboutCarou'

export default function ErrorPage() {
    return(
        <div className='error-body'>
            <img className='error-banner' src={bannerError} alt='error banner'/>
            <h1 className='error-title'>404</h1>
            <h2 className='error-subtitle'>page not found!</h2>
            <p className='error-paragraph'>The page you're looking for isn't available.<br></br>Try your search again or use the <span>'go home'</span> button below.</p>
            <Link className='error-button-tohome' to="/">
                    <p>go home</p>
            </Link>
        </div>
    )
};