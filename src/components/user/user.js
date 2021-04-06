




import React, {useState, useEffect} from 'react';


import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Axios from 'axios'
import {setUserLocal} from '../../utils/common'
import googleIcon from '../assets/google-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import appleIcon from '../assets/apple_icon.svg'
import { Button, Modal } from 'react-bootstrap';
import {getExpirUser} from '../../utils/common'



import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useHistory
  } from 'react-router-dom';
  
//component
import SignIn from './signIn'
import UserPosts from './userPosts'
//css
import './user.css'
//img
import signinSideImg from '../assets/signin-banner.jpg'
import userPageLogo from '../assets/Group20.svg'
import googlelogin from '../assets/googlelogin.svg'
import facebooklogin from '../assets/facebooklogin.svg'
import twitterlogin from '../assets/twitterlogin.svg'
import ReCAPTCHA from 'react-google-recaptcha'

let SHA256 =  require('crypto-js/sha256')
let BaseHex = require('crypto-js/enc-hex')



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function User(props) {
  // if(localStorage.getItem('isAuth')==true){
  //   handleModalShow()
  // }
  const [loading, setLoading] = useState(false);
  // const [openUPT, setOpenUPT] = useState(false)
  // const [userName, setUserName] = useState('')
  // const [passWord, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [userN, setUserN] = useState()
  let history = useHistory();
  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  //Force to enter userName
  const [showEnterUser, setShowEnterUser] = useState(false)
  const handleModalEnterUNClose = () => setShowEnterUser(false);
  const handleModalEnterUNShow = () => setShowEnterUser(true);

  /////////

  const handleOpenUI = () => {
    if(getExpirUser().secClear === 10){
      // history.push('/')
      console.log(userN)
      history.push(`/`)
    }else{
      history.push(`/${userN}`)
    }
   
  }
  const handleOpenCMS = () => {
    history.push('/profile')
  }
  const handleOpenCMSEditProfile = () => {
    history.push('/profile')
  }

  const [user, setUser] = useState([])
  const [error, setError] = useState('')
  
 
  useEffect(() => {
    // Update the document title using the browser API
    
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const custId = params.get('custID');
    const secClear = params.get('secClear');
    const isAuth = params.get('isAuth');
    // alert(params.get('custID'))
      custId && secClear && isAuth && setUserLocal(isAuth, custId, secClear,86400000)
    if(isAuth === 'true'){
      // handleModalShow()

      Axios.get(`https://api-dev.trustnews.ca/uzrName?custID=${custId}`).then(response =>{
        if(response.data[0].userName == ''){
          console.log('Hello')
          handleModalEnterUNShow()

        }else{
          handleModalShow()
        }
      })

    } 
  },[]);


  // useEffect(() => {
  //   // Update the document title using the browser API
    
  //   const search = window.location.search;
  //   const params = new URLSearchParams(search);
  //   const custId = params.get('custId');
  //   const secClear = params.get('secClear');
  //   const isAuth = params.get('isAuth');
 
  //     custId && secClear && isAuth && setUserLocal(isAuth, custId, secClear,86400000)
  //   if(isAuth === 'true'){
  //     handleModalShow()
  //   } 
  // },[]);



  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  } 
  const username = useFormInput('');
  const password = useFormInput('');
  // const handleOnClick = ()=>{
  //     setOpenUPT(true);
 
  // }
  // const handlelistClose = () => {
  //     setOpenUPT(false);
  //     props.clickClose();
  //   };
  //   const fecthData = async() => {
  //     console.log(userName)
  //     let pass = BaseHex.stringify(SHA256({passWord}))
  //     console.log(pass)
  //     const response = await Axios.get(`https://api-dev.trustnews.ca/uzr?userName="${userName}"`);
  //     console.log(response.data)
  //     setUser(response.data)
  // }
  const handleLogin = () => {
    
    setError(null);
    setLoading(true);
    let pass = BaseHex.stringify(SHA256(password.value))
    // console.log(pass)
    Axios.post('https://dev1.trustnews.ca/login', { user: username.value, password: pass}).then(response => {
      setLoading(false);
      console.log(response)
      // props.history.push('/about');
      if(response.data.isAuth == true){
          setUserLocal(response.data.isAuth, response.data.custID, response.data.secClear,86400000)
          // console.log(localStorage.getItem('isAuth'))
          setUserN(response.data.userName)
          props.onClickSignIn()
          handleModalShow()
      }else{
        console.log(response)
        setError("blank")
      }
 
    }).catch(error => {
      console.log(error)
      setLoading(false)
      // console.log(error.response.data)
      if (error.response.status === 401) setError(error.response.data.err);
      else setError("Something went wrong. Please try again later.");
    })
  }

  const [human, setHuman] = useState(true)
  function onChange(value){
    // console.log('Captcha value:', value)
    Axios.post('test.dev1.trustnews.ca/captcha',{humanKey: value.toString()}).then(response =>{
      setHuman(response.data)
    })
  }
  function HandleCaptcha(){
    return(
      // <div className="signInBut signInButton" style={{cursor:"pointer"}} onClick={handleLogin}>
      //     enter</div>
      human ? 
            <div>
            <div className="signInBut signInButton" style={{cursor:"pointer"}} onClick={handleLogin}>
              enter
            </div> 
            {/* onClick={handleGoogleLogin} */}
                   <div className='signInBox-thirdparty'>
                   <p className="signInBox-subtext">or sign in with</p>
                   <div className="signInBut signInGoogle" >
                     <img src={googleIcon} alt='google icon'/>
              
                   </div>
                   {/* onClick={handleFacebookLogin} */}
                   <div className="signInBut signInFacebook" >
                     <img src={facebookIcon} alt='facebook icon'/>
                  
                   </div>
                   <div className="signInBut signInTwitter" onClick={handleTwitterLogin}>
                     <img src={twitterIcon} alt='twitter icon'/>
               
                   </div>
               </div>
               </div>
            : 
            <ReCAPTCHA sitekey="6LfmYdcZAAAAAKaAy0EOn5zTRnwqB2jjjaCcIxSn" onChange={onChange} />
    )
    
  }
 
  const handleGoogleLogin = () => {
    // Axios.get('https://dev1.trustnews.ca/google').then(response => {
    //   console.log(response)
    // })
    window.location = 'https://test.dev1.trustnews.ca/google'
  }
  const handleFacebookLogin = () => {
    // Axios.get('https://dev1.trustnews.ca/facebook').then(response => {
    //   console.log(response)
    // })
    window.location = 'https://dev1.trustnews.ca/facebook'
  }
  const handleTwitterLogin = () => {
    // Axios.get('https://dev1.trustnews.ca/facebook').then(response => {
    //   console.log(response)
    // })
    window.location = 'https://dev1.trustnews.ca/twitter'
  }
  return (
    // <Router>
         <div>
        
        {/* <Dialog fullScreen open={props.open} TransitionComponent={Transition}> */}
             
              <div>

                {/* <div className="signInPage">
                  <div className="signInBanner">
                    <img src={userSideImg} alt="sideImg"/>
                  </div>
                  <div className="signInBox">
                    <div>
                      <img src={userPageLogo} alt="userLogo"/>
                      <p>login</p>
                    </div>
                    <form>
                      <label for="username">username</label><br/>
                      <input type="text" id="username" {...username} /><br/>
                      <label for="password">password</label><br/>
                      <input type="password" {...password}/>
                    </form>

                    <div className="signInButton" style={{cursor:"pointer"}} onClick={handleLogin}>
                    sign in
                    </div>
                    <p>or</p>
                    <div className="signInBut">
                      <img src={googlelogin} alt="googlelogin"/>
                    </div>
                    <div className="signInBut">
                      <img src={facebooklogin} alt="facebooklogin"/>
                    </div>
                    <div className="signInBut">
                      <img src={twitterlogin} alt="twitterlogin"/>
                    </div>
                    <div className="signInBut"></div>
                    <p style={{fontSize:"0.75rem"}}>{error}</p>
                  </div>
                </div> */}

                <div className="signInPage">
                  <div className="signInBanner">
                    <img src={signinSideImg} alt="signInSideImg"/>
                  </div>
                  <div className="signInBox">
                    <div>
                      {/* <img src={userPageLogo} alt="userLogo"/> */}
                      <p className="signInBox-maintext">SIGN IN</p>
                    </div>
                    {/* <form>
                      <label for="username">username</label><br/>
                      <input type="text" id="username" name="username" onChange={event => setUserName(event.target.value)}/><br/>
                      <label for="password">password</label><br/>
                      <input type="password" id="password" name="password" onChange={event => setPassword(event.target.value)}/>
                    </form> */}
                    <form>
                      <label for="username">username</label><br/>
                      <input type="text" id="username" {...username} /><br/>
                      <label for="password">password</label><br/>
                      <input type="password" {...password}/>
                    </form>

                    {/* <div className="signInBut signInButton" style={{cursor:"pointer"}} onClick={() =>{inputUserName()}}>
                      <p>sign in</p>
                    </div> */}
                    {/* <div className="signInBut signInButton" style={{cursor:"pointer"}} onClick={handleLogin}>
                    enter
                    </div> */}
                    <HandleCaptcha/>
                    <p className="signInBox-errortext" style={{fontSize:"1rem"}}>{error}</p>

               

                </div>
                

                </div>
              
              </div>
              {/* <div>

                <UserPosts open={openUPT} clickClose={handlelistClose}/>
            </div> */}
            <div>
              <Modal className='signin-modal' show={show} onHide={handleModalClose} backdrop="static" keyboard={ false }>
                  <p>You logged in successfully!</p>
                  <Button variant="secondary" onClick={handleOpenUI}>
                    Go to your home page
                  </Button>
                  <Button variant="primary" onClick={handleOpenCMS}>
                    Go to your profile
                  </Button>
              </Modal>
            </div>

            <div>
              <Modal className='signin-modal' show={showEnterUser} onHide={handleModalClose} backdrop="static" keyboard={ false }>
                  {/* <p>You logged in successfully!</p>
                  <Button variant="secondary" onClick={handleOpenUI}>
                    Stay on this page
                  </Button>
                  <Button variant="primary" onClick={handleOpenCMS}>
                    Go to your profile
                  </Button> */}
                  <p>You will have to go to edit profile and pick a username to have your personal page</p>
                  <Button variant="primary" onClick={handleOpenCMSEditProfile}>
                    Go to your profile
                  </Button>
              </Modal>
            </div>
                
                    {/* <div className="post-rating">
                        Rated: {props.contentRating}
                        </div>
                        <div className="post-meta">
                        #{props.category}, #{props.topic}, #{props.region}, #{props.language}
                    </div> */}
             
                    <div>
                       {/* <Switch> */}
                           {/* <Route path="/signIn" component={SignIn}/>
                           <Route path="/userPost" component={UserPosts}/> */}
                           
                       {/* </Switch> */}
                    </div>
        
{/* 
        </Dialog> */}
        </div>
    // </Router>
  );
}
