import React, {useState,useEffect} from 'react';
import {Link ,useHistory} from 'react-router-dom'
import profileSmall from '../assets/profile-small.png';
import defaultImg from '../assets/defaultImg.jpg'
import arrowBlack from '../assets/arrow_dropdown_black.svg';
import './profile-dropdown.css'
import {removeUserLocal} from '../../../utils/common'
import {getExpirUser} from '../../../utils/common'
import Axios from 'axios'

export default function ProfileDropdown(props) {
    let history = useHistory()
    const [drop, setDrop] = useState(false)
    const [userI,setUserI] = useState({
        customer:{
            custID: '',
            fName: "",
            mName: "",
            lName: "",
            likes: '',
            followers: '',
            articles:'',
            dob: "",
            userName: "",
            displayName: "",
            avatarURI: "",
            bioTeaser: "",
            bio: ""
        },
        phone: [],
        email: [],
        address: []
    })
    function handleDropBut(){
        setDrop(!drop)
    }
    function handleLogout(){
        removeUserLocal()
        props.setSignIn(false)
        history.push('/')
    }
    useEffect(()=>{
        const fecthData = async () => {
            const response = await Axios.get(`https://api-dev.trustnews.ca/profile?custID=${getExpirUser().custId}`);
                setUserI(response.data)
     
        }
        fecthData();
        
    },[])
    console.log(userI.customer.userName)
    function DynamicDrop(){
        if(getExpirUser() == null){
            history.push('/signin')
        }else{
        if(getExpirUser().secClear == 10){
            return (
                <div className="profile-dropdown">
                    <img src={profileSmall} alt='profile small'/>
                    <img className='profile-dropdown-arrow' src={arrowBlack} alt='black arrow' onClick={handleDropBut}/>
                    <div className={`${drop ? "drop-active" : "drop-inactive"}`}>
                        <ul>
                            <li>
                                <Link  to='/'>Home</Link>
                            </li>
                            {/* <li>
                                <Link to={`/${userI.customer.userName}`}>My UI</Link>
                            </li> */}
                            <li style={{cursor:"pointer"}} onClick={handleLogout}>Log out</li>
                        </ul>
                    </div>
                </div>
          );
        }else{
            return (
                <div className="profile-dropdown">
                    <img src={profileSmall} alt='profile small'/>
                    <img className='profile-dropdown-arrow' src={arrowBlack} alt='black arrow' onClick={handleDropBut}/>
                    <div className={`${drop ? "drop-active" : "drop-inactive"}`}>
                        <ul>
                            <li>
                                <Link  to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to={`/${userI.customer.userName}`}>My UI</Link>
                            </li>
                            <li style={{cursor:"pointer"}} onClick={handleLogout}>Log out</li>
                        </ul>
                    </div>
                </div>
          );
        }
    }
    }
    return(
        <DynamicDrop/>
    )
}

