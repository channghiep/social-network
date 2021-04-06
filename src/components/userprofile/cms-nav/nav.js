// import React from 'react';
// import {NavLink} from 'react-router-dom';

// import './nav.css';

// import logoImg from '../assets/cms-logo.svg';

// function Navbar() {
//     return (
//         <div className='navbar'>
//             <div className='nav-logo'>
//                 <img src={logoImg} alt='logo image'/>
//             </div>
//             <NavLink style={{textDecoration:'none',color:'#FFF'}} exact activeClassName="navbar-items-active" className="navbar-items" to="/profile/posts">
//                 <div className="navbar-item item-1">
//                     <svg width="24" height="24" viewBox="0 0 24 24">
//                         <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z"/></svg>
//                     <p>posts</p>
//                 </div>
//             </NavLink>
//             <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="navbar-items-active" className="navbar-items" to="/profile">
//                 <div className="navbar-item item-2">
//                     <svg width="24" height="24" viewBox="0 0 24 24">
//                         <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
//                         7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
//                         2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
//                     <p>profile</p>
//                 </div>
//             </NavLink>
//             <p className="copyright-text">© Trustnews. All Rights Reserved.</p>
//         </div>
//     )
// }

// export default Navbar;

import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';

import './nav.css';

import logoImg from '../assets/cms-logo.svg';
import logoImgsmall from '../assets/cms-logo-small.svg';
import {getExpirUser} from '../../../utils/common'

function CMSbar() {
    let history = useHistory();
    // const secLvl = localStorage.getItem('secClear')
    function DynamicNavCMS(){
        if(getExpirUser() == null){
            history.push(`/signin`)
        }else{
        if(getExpirUser().secClear == 10){
            return(
                <div className='cms-tab'>
                <div className='cms-tab-logo'>
                    <img className='cms-logo' src={logoImg} alt='logo image'/>
                    <img className='cms-small-logo' src={logoImgsmall} alt='logo image small'/>
                </div>
                <NavLink style={{textDecoration:'none',color:'#FFF'}} exact activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/posts">
                    <div className="cms-tab-item item-1">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z"/></svg>
                        <p>Posts</p>
                    </div>
                </NavLink>
                <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile">
                    <div className="cms-tab-item item-2">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
                            7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                            2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                        <p>Profile</p>
                    </div>
                </NavLink>
    
                {/* <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile">
                    <div className="cms-tab-item item-2">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
                            7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                            2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                        <p>Approval</p>
                    </div>
                </NavLink> */}
    
                {/* <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile">
                    <div className="cms-tab-item item-2">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
                            7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                            2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                        <p>Reviews</p>
                    </div>
                </NavLink> */}
    
                {/* <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile">
                    <div className="cms-tab-item item-2">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
                            7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                            2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                        <p>Timeline</p>
                    </div>
                </NavLink> */}
                
                {/* <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/timeline">
                    <div className="cms-tab-item item-2">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
                            7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                            2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                        <p>New Feeds</p>
                    </div>
                </NavLink> */}

                {/* <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/timeline">
                    <div className="cms-tab-item item-2">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
                            7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                            2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                        <p>Follows</p>
                    </div>
                </NavLink> */}
                <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/tnews">
                    <div className="cms-tab-item item-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"/></svg>
                        <p>T-news Articles</p>
                    </div>
                </NavLink>
                <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/external">
                    <div className="cms-tab-item item-2">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z"/></svg>
                        <p>External Articles</p>
                    </div>
                </NavLink>

                <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/administration">
                    <div className="cms-tab-item item-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 1v17h24v-17h-24zm22 15h-20v-13h20v13zm-6.599 4l2.599 3h-12l2.599-3h6.802z"/></svg>
                        <p>Administration</p>
                    </div>
                </NavLink>
                {/* <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/featureapproval">
                    <div className="cms-tab-item item-2">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z"/></svg>
                        <p>Feature News Approval</p>
                    </div>
                </NavLink> */}
                
                
                <p className="copyright-text">© Trustnews. All Rights Reserved.</p>
            </div>
            )
        }else{
            return(
                <div className='cms-tab'>
                <div className='cms-tab-logo'>
                    <img className='cms-logo' src={logoImg} alt='logo image'/>
                    <img className='cms-small-logo' src={logoImgsmall} alt='logo image small'/>
                </div>
                <NavLink style={{textDecoration:'none',color:'#FFF'}} exact activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/posts">
                    <div className="cms-tab-item item-1">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z"/></svg>
                        <p>Posts</p>
                    </div>
                </NavLink>
                <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile">
                    <div className="cms-tab-item item-2">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 
                            7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 
                            2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                        <p>Profile</p>
                    </div>
                </NavLink>

                {/* <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/timeline">
                    <div className="cms-tab-item item-2">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.829 6c-.412 1.165-1.524 2-2.829 2-1.656 0-3-1.344-3-3s1.344-3 3-3c1.305 0 2.417.835 2.829 2h13.671c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5h-4.671c-.412 1.165-1.524 2-2.829 2-1.305 0-2.417-.835-2.829-2h-4.671c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h13.671c.412-1.165 1.524-2 2.829-2 1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.305 0-2.417-.835-2.829-2h-13.671c-2.484 0-4.5-2.016-4.5-4.5s2.016-4.5 4.5-4.5h4.671c.412-1.165 1.524-2 2.829-2 1.305 0 2.417.835 2.829 2h4.671c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5h-13.671zm6.171 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>
                        <p>Timeline</p>
                    </div>
                </NavLink>

                <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/timeline">
                    <div className="cms-tab-item item-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.29 14.646c0 .748-.607 1.354-1.354 1.354-.749 0-1.356-.606-1.356-1.354 0-.747.607-1.353 1.355-1.353.748.001 1.355.606 1.355 1.353zm-2.71-5.237v2.004c2.521.025 4.567 2.068 4.592 4.587h2.008c-.026-3.629-2.965-6.566-6.6-6.591zm0-1.404c4.407.02 7.98 3.581 7.993 7.995h2.007c-.012-5.513-4.48-9.981-10-10v2.005z"/></svg>
                        <p>New Feeds</p>
                    </div>
                </NavLink>

                <NavLink style={{textDecoration:'none',color:'#FFF'}} activeClassName="cms-tab-items-active" className="cms-tab-items" to="/profile/timeline">
                    <div className="cms-tab-item item-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                        <p>Follows</p>
                    </div>
                </NavLink> */}
                
                <p className="copyright-text">© Trustnews. All Rights Reserved.</p>
            </div>
            )
        }
    }
    }

    return (
        <DynamicNavCMS/>
    )
}

export default CMSbar;