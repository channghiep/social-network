import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import { Button, Modal } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import {setUserLocal} from '../../utils/common'
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Axios from 'axios'
import signUpImg from '../assets/signup-banner.jpg'
import userPageLogo from '../assets/Group20.svg'
import googlelogin from '../assets/googlelogin.svg'
import facebooklogin from '../assets/facebooklogin.svg'
import twitterlogin from '../assets/twitterlogin.svg'
import googleIcon from '../assets/google-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'
import appleIcon from '../assets/apple_icon.svg'
import zxcvbn from 'zxcvbn'
import './signUp.css'
import {
  useHistory
} from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha'
let SHA256 =  require('crypto-js/sha256')
let BaseHex = require('crypto-js/enc-hex')
let validator = require("email-validator");
// import { useForm  } from 'react-hook-form'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

// const [username, setUsername] = useState()  

export default function SignUp(props){
  // const username = useFormInput('');
  const [show, setShow] = useState(false)
  let history = useHistory();
  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);
  const handleOpenUI = () => {
    history.push(`/${user.userName}`)
  }
  const handleOpenCMS = () => {
    history.push('/profile')
  }
  
  const [error, setError] = useState()
  const [pass, setPass] = useState()
  const [score, setScore] = useState()
  const [suggestions, setSuggestions] = useState([])
  const [user, setUser] = useState({
    companyName:'',
    firstName: '',
    middleName: '',
    lastName:'',
    displayName: '',
    userName: '',
    password:'',
    confirm:'',
    email:'',
    dateOfBirth: ''

  })
  // const [firstname, setFirstname] = useState()  
  // const [midname, setMidname] = useState()  
  // const [lastname, setLastname] = useState()  
  // const [username, setUsername] = useState()  
  // const [displayname, setDisplayname] = useState()  
  // const [password, setPassword] = useState()  
  // const [email, setEmail] = useState()  
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  const onPassChange = (e) => {
    const password = e.target.value
    const evaluation = zxcvbn(password)
    console.log(evaluation)
    // user.password = password
    setScore(evaluation.score)
    setSuggestions(evaluation.feedback.suggestions)
    setPass(password)
  }
  // const handleChangeUsername = e => {
  //   setUsername(e.target.value)
  // }
  // const handleChangeFirstname = e => {
  //   setFirstname(e.target.value)
  // }
  // const handleChangeMidname = e => {
  //   setMidname(e.target.value)
  // }
  // const handleChangeLastname = e => {
  //   setLastname(e.target.value)
  // }
  // const handleChangeDisplayname = e => {
  //   setDisplayname(e.target.value)
  // }
  // const handleChangePassword = e => {
  //   setPassword(e.target.value)
  // }
  // const handleChangeEmail= e => {
  //   setEmail(e.target.value)
  // }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(validator.validate(user.email)){

      Axios.get(`https://api-dev.trustnews.ca/chkCred?userName="${user.userName}"&emailAddr="${user.email}"`).then(response =>{
        // console.log(response.data)
        if(response.data.userName == "usable" && response.data.emailAddr == "usable"){
          console.log("good")
          console.log(score)
          if(score >= 3){
              if(pass === user.confirm){
                user.password = BaseHex.stringify(SHA256(pass))
                // console.log(user)
                Axios.post('https://dev1.trustnews.ca/signup',{
                  companyName: user.companyName,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
                dateOfBirth: user.dateOfBirth,
                avatarURI: user.avatarURI,
                displayName: user.displayName,
                userName:  user.userName,
                password: user.password,
                email: user.email
                }).then(response =>{
                  console.log(response)
                  setError('you have successfully signed up !')
                  setUserLocal(response.data.isAuth, response.data.custID, response.data.secClear,86400000)
                  
                  props.onClickSignUp()
                  handleModalShow()
                })
              }else{
          
                setError('password does not match')
              }
          }else{
            setError('password is not strong enough')
          }
         
        }if(response.data.userName == "usable" && response.data.emailAddr == "exists"){
          // console.log("email no good")
          setError('email exists')
        }if(response.data.userName == "exists" && response.data.emailAddr == "usable"){
          // console.log("username no good")
          setError('username exists')
        }if(response.data.userName == "exists" && response.data.emailAddr == "exists"){
          // console.log("both no good")
          setError('Both username and email exist')
        }
      }).catch(error => {
        if (error.response.status === 401) setError(error.response.data.err);
        else setError("Something went wrong. Please try again later.")
      }
      )

 
    }else{
      setError('Wrong email')
      
    }

   
   
    // setUser(
    //  {
    //    username: username       
    //  }
    // )
    // console.log(user)
  }
  const [human, setHuman] = useState(false)
  function onChange(value){
    // console.log('Captcha value:', value)
    Axios.post('test.dev1.trustnews.ca/captcha',{humanKey: value.toString()}).then(response =>{
      setHuman(response.data)
    })
  }
  function HandleCaptcha(){
    return(
      human ? <div>
          <div className="signInBut signInButton" onClick={handleSubmit} style={{cursor:"pointer"}}>
                  <p>sign up</p>
                </div>
                {/* <div className='signInBox-thirdparty'>
                    <p className="signInBox-subtext">or sign in with</p>
                    <div className="signInBut signInGoogle" >
                      <img src={googleIcon} alt='google icon'/>
               
                    </div>
                    <div className="signInBut signInFacebook" >
                      <img src={facebookIcon} alt='facebook icon'/>
             
                    </div>
                    <div className="signInBut signInTwitter">
                      <img src={twitterIcon} alt='twitter icon'/>
                   
                    </div>
 
                </div> */}
      </div> :
      <div style={{overflow:'hidden', marginBottom:'30px'}}>
        <ReCAPTCHA sitekey="6LfmYdcZAAAAAKaAy0EOn5zTRnwqB2jjjaCcIxSn" onChange={onChange} />
      </div> 
    )
    
  }
  
    // return(
    //     <div>
    //         {/* <Dialog fullScreen open={props.open} TransitionComponent={Transition}> */}
             

    //             <IconButton style={{color:"black"}} edge="start" color="inherit" onClick={props.clickClose} aria-label="close">
    //             <CloseIcon />
    //             </IconButton>
    //           <div>

    //             <div className="signInPage">
    //               <div className="signInBanner">
    //                 <img src={userSideImg} alt="sideImg"/>
    //               </div>
    //               <div className="signInBox">
    //                 <div>
    //                   <img src={userPageLogo} alt="userLogo"/>
    //                   <p>sign up</p>
    //                 </div>
    //                 <form >
    //                 <div className="signUpForm">
    //                     <div className="item1">
    //                         <label for="username">username</label>
    //                         <input type="text" id="username" value={user.userName} name='userName' onChange={handleChange} />
    //                     </div>
                    
    //                     <div className="item2">
    //                         <label for="firstname">first name</label>
    //                         <input type="text" id="firstname" value={user.firstName} name='firstName' onChange={handleChange}/>
    //                     </div>
    //                     <div className="item3">
    //                         <label for="middlename">middle name</label>
    //                         <input type="text" id="middlename" value={user.middleName} name='middleName'onChange={handleChange}/>
    //                     </div>
    //                     <div className="item4">
    //                         <label for="lastname">last name</label>
    //                         <input type="text" id="lastname" value={user.lastName} name='lastName' onChange={handleChange}/>
    //                     </div>
    //                     <div className="item5">
    //                         <label for="birth">date of birth</label>
    //                         <input type="date" id="birth" name="birth"/>
    //                     </div>
    //                     <div className="item6">
    //                         <label for="displayname">display name</label>
    //                         <input type="text" id="displayname" value={user.displayName} name='displayName' onChange={handleChange}/>
    //                     </div>
      
    //                     <div className="item7">
    //                         <label for="email">email</label>
    //                         <input type="email" id="email" value={user.email} name="email" onChange={handleChange}/>
    //                     </div>
    //                     <div className="item8">
    //                         <label for="password">password</label>
    //                         <input type="password" id="password" value={user.password} name="password" onChange={handleChange}/>
    //                     </div>    
    //                     <div className="item9">  
    //                         <label for="password">confirm</label>
    //                         <input type="password" id="password" value={user.confirm} name="confirm" onChange={handleChange}/>
    //                     </div>
    //                 </div>
    //                 <div>

    //                 <button type="submit" value="Signup" onClick={handleSubmit}>Signup</button>
    //                 </div>
    //                 </form>

    //                 {/* <div className="signInButton" style={{cursor:"pointer"}}>
    //                 sign up
    //                 </div> */}
    //                 <p>or</p>
    //                 <div className="signInBut">
    //                   <img src={googlelogin} alt="googlelogin"/>
    //                 </div>
    //                 <div className="signInBut">
    //                   <img src={facebooklogin} alt="facebooklogin"/>
    //                 </div>
    //                 <div className="signInBut">
    //                   <img src={twitterlogin} alt="twitterlogin"/>
    //                 </div>
    //                 <div className="signInBut"></div>
    //                 {/* <div className="signInButton" style={{cursor:"pointer"}} onClick={() =>{inputUserName()}}>
    //                 sign in
    //                 </div>
    //                 <div className="signInButton" style={{cursor:"pointer"}} onClick={() =>{inputUserName()}}>
    //                 sign in with Google
    //                 </div> */}
    //                 {/* <p style={{fontSize:"0.75rem"}}>{error}</p> */}
    //               </div>
    //             </div>
                


              
    //           </div>

        

    //     {/* </Dialog> */}
    //     </div>
    // )


    return(
      // <div>
      
            <div>

            <div className="signUpPage">
                <div className="signUpBanner">
                  <img src={signUpImg} alt="signUpImg"/>
                </div>
                <div className="signUpBox">
                  <div>
                    <p className='signUp-maintext'>SIGN UP</p>
                  </div>
                  {/* <form> */}
                  <div className="signUpForm">
                      <div className="signup-row signup-row1">
                        <div className="signup-input item1">
                            <label for="username">username</label>
                            {/* <input type="text" id="username" name="username"/> */}
                            <input type="text" id="username" value={user.userName} name='userName' onChange={handleChange} />
                        </div>
                        <div className="signup-input item2">
                            <label for="displayname">display name</label>
                            {/* <input type="text" id="displayname" name="displayname"/> */}
                            <input type="text" id="displayname" value={user.displayName} name='displayName' onChange={handleChange}/>
                        </div>
                      </div>

                      <div className="signup-row signup-row2">
                        <div className="signup-input item3">
                            <label for="displayname">first name</label>
                            {/* <input type="text" id="firstname" name="firstname"/> */}
                            <input type="text" id="firstname" value={user.firstName} name='firstName' onChange={handleChange}/>
                        </div>
                        <div className="signup-input item4">
                            <label for="displayname">middle name</label>
                            {/* <input type="text" id="middlename" name="middlename"/> */}
                            <input type="text" id="middlename" value={user.middleName} name='middleName'onChange={handleChange}/>
                        </div>
                        <div className="signup-input item5">
                            <label for="displayname">last name</label>
                            {/* <input type="text" id="lastname" name="lastname"/> */}
                            <input type="text" id="lastname" value={user.lastName} name='lastName' onChange={handleChange}/>
                        </div>
                      </div>

                      <div className="signup-row signup-row3">
                        <div className="signup-input item6">
                            <label for="birthday">date of birth</label>
                            {/* <input type="date" id="birthday" name="birthday"/> */}
                            <input type="date" id="birth"  name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange}/>
                        </div>
                        <div className="signup-input item7">  
                            <label for="email">email</label>
                            {/* <input type="text" id="email" name="email"/> */}
                            <input type="email" id="email" value={user.email} name="email" onChange={handleChange}/>
                        </div>
                      </div>
                      
                      <div className="signup-row signup-row4">
                        <div className="signup-input item8">
                            <label for="password">password</label>
                            {/* <input type="password" id="password" name="password"/> */}
                            <input type="password" id="password" value={pass} name="password" onChange={onPassChange}/>
                          
                        </div>    
                        <div className="signup-input item9">  
                            <label for="password">confirm</label>
                            {/* <input type="password" id="password" name="password"/> */}
                            <input type="password" id="password" value={user.confirm} name="confirm" onChange={handleChange}/>
                        </div>
                      </div>
                      {/* <button type="submit" value="Signup" onClick={handleSubmit}>Signup</button> */}
                  </div>
                  {/* </form> */}
                  <div>
                  <ul className='signup-errors'>
                        {suggestions.map((s,index) =>
                          <li key={index}>{s}</li>
                          )}
                        <li style={{fontSize:"1rem"}}>{error}</li>
                  </ul>
                  </div>
                 
                  <HandleCaptcha/>      
                
                     
                  {/* <div className="signInBut signInButton" onClick={handleSubmit} style={{cursor:"pointer"}}>
                    <p>sign up</p>
                  </div>
                  <div className='signInBox-thirdparty'>
                      <p className="signInBox-subtext">or sign in with</p>
                      <div className="signInBut signInGoogle" >
                        <img src={googleIcon} alt='google icon'/>
                    
                      </div>
                      <div className="signInBut signInFacebook" >
                        <img src={facebookIcon} alt='facebook icon'/>
                 
                      </div>
                      <div className="signInBut signInTwitter">
                        <img src={twitterIcon} alt='twitter icon'/>
                      
                      </div>
   
                  </div> */}



                  
                  {/* <div className="signInButton" style={{cursor:"pointer"}} onClick={() =>{inputUserName()}}>
                  sign in
                  </div>
                  <div className="signInButton" style={{cursor:"pointer"}} onClick={() =>{inputUserName()}}>
                  sign in with Google
                  </div> */}
              
                 
                </div>
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
                  <div>
              <Modal className='signin-modal' show={show} onHide={handleModalClose}>
                  <p>go to</p>
                  <Button variant="secondary" onClick={handleOpenUI}>
                  Go to your home page
                  </Button>
                  <Button variant="primary" onClick={handleOpenCMS}>
                  Go to your profile
                  </Button>
              </Modal>
            </div>
      

    
      </div>
  )
}