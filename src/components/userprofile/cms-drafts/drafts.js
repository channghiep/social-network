// 
import React from 'react';
import {
    Link
  } from 'react-router-dom';

import './drafts.css';

import dropArrow from '../assets/arrow_dropdown_grey.svg';

function Drafts() {
    return (
        <div className='cms-drafts-body'>
            <Link to="/profile/posts">
                <svg className='return-to-posts' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
            </Link>

            <h1>DRAFTS</h1>

            <div className='cms-drafts-table'>
                <div className='cms-drafts-table-grid drafts-table-items'>
                    <p>posts</p>
                    <div className='drafts-items-category'>
                        <p>category</p>
                        <img src={dropArrow} alt='dropdown arrow'/>
                    </div>
                    <p>last edited</p>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19.479 2l-7.479 12.543v5.924l-1-.6v-5.324l-7.479-12.543h15.958zm3.521-2h-23l9 15.094v5.906l5 3v-8.906l9-15.094z"/>
                    </svg>
                </div>

                <div className='cms-drafts-table-grid drafts-table-post'>
                    <p className='drafts-table-name'>Federal governmen orders supplies to give two doses of COVID-19 vaccine when it's ready</p>
                    <p className='drafts-table-category'>politics</p>
                    <p className='drafts-table-date'>08 / 21 / 2018</p>
                    <svg width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0
                         .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0
                          .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Drafts;