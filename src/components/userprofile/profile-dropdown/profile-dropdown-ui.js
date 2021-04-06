// import React, {useState} from 'react';
// import {Link ,useHistory} from 'react-router-dom'
// import profileSmall from '../assets/profile-small.png';
// import arrowBlack from '../assets/arrow_dropdown_black.svg';
// import './profile-dropdown.css'
// import {removeUserLocal} from '../../../utils/common'
// export default function ProfileDropdownUI(props) {
//     let history = useHistory()
//     const [drop, setDrop] = useState(false)
//     function handleDropBut(){
//         setDrop(!drop)
//     }
//     function handleLogout(){
//         removeUserLocal()
//         setDrop(!drop)
//         props.setSignIn(false)
//         history.push('/')
//     }
//     return (
//         <div className="profile-dropdown">
//             <img src={profileSmall} alt='profile small'/>
//             <img src={arrowBlack} alt='black arrow' onClick={handleDropBut}/>
//             <div className={`${drop ? "drop-active" : "drop-inactive"}`}>
//                 <ul>
//                     <li>
//                         <Link  to='/profile'>CMS</Link>
//                     </li>
//                     <li style={{cursor:"pointer"}} onClick={handleLogout}>LogOut</li>
//                 </ul>
//             </div>
//         </div>
//   );
// }

import React, {useState} from 'react';
import {Link ,useHistory} from 'react-router-dom'
import profileSmall from '../assets/profile-small.png';
import arrowBlack from '../assets/arrow_dropdown_black.svg';
import './profile-dropdown.css'
import {removeUserLocal} from '../../../utils/common'
export default function ProfileDropdownUI(props) {
    let history = useHistory()
    const [drop, setDrop] = useState(false)
    function handleDropBut(){
        setDrop(!drop)
    }
    function handleLogout(){
        removeUserLocal()
        setDrop(!drop)
        props.setSignIn(false)
        history.push('/')
    }
    return (
        <div className="profile-dropdown">
            <img src={profileSmall} alt='profile small'/>
            <img src={arrowBlack} alt='black arrow' onClick={handleDropBut}/>
            <div className={`${drop ? "drop-active" : "drop-inactive"}`}>
                <ul>
                    <li>
                        <Link  to='/profile'>Profile</Link>
                    </li>
                    <li style={{cursor:"pointer"}} onClick={handleLogout}>Log out</li>
                </ul>
            </div>
        </div>
  );
}

