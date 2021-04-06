import React from 'react';
import {
  Link
} from 'react-router-dom';

import './change-img.css';

import ava01 from '../assets/avatar01.png'
import ava02 from '../assets/avatar02.png'
import ava03 from '../assets/avatar03.png'
import ava04 from '../assets/avatar04.png'
import ava05 from '../assets/avatar05.png'
import ava06 from '../assets/avatar06.png'

function ChangeImg() {
    return (
        <div className='change-img-body'>
            <Link to="/profile">
                <svg className='return-to-profile' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
            </Link>

            <h1>CHANGE YOUR AVATAR</h1>
            
            <p>choose the avatar below</p>
            <div className='change-img-div given-img'>
                <img src={ava01} alt='image 1'/>
                <img src={ava02} alt='image 2'/>
                <img src={ava03} alt='image 3'/>
                <img src={ava04} alt='image 4'/>
                <img src={ava05} alt='image 5'/>
                <img src={ava06} alt='image 6'/>
            </div>

            <p>upload photo</p>
            <div className='change-img-div upload-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </div>

            <div className='change-img-buttons'>
                <div className='button cancel-img'>
                    <p>cancel</p>
                </div>
                <div className='button save-img'>
                    <p>save</p>
                </div>
            </div>
        </div>
    )
}

export default ChangeImg;