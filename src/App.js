// 



import React , {useState, useEffect} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  
  
} from 'react-router-dom';

//Component
import Landing from './components/landing/landing'
import PostsList from './components/posts-list/posts-list';
import SubPostsList from './components/posts-list/subPost-list';
import TrendingList from './components/posts-list/trending-list'
import MainstreamList from './components/posts-list/mainstream-list'
import LatestList from './components/posts-list/latest-list'
import FeaturedList from './components/posts-list/featured-list'
import BurgerMenu from './components/header/burgerMenu';
import Navbar from './components/userprofile/cms-nav/nav';
import About from './components/about-us/about-us'
import Contact from './components/contact-us/contact-us'
import ErrorPage from './components/error/error';
import PrivatePolicy from './components/private-policy/private-policy';
import TermUse from './components/private-policy/term-of-uses';
import PublicProfile from './components/public-profile/public-profile';
import Profile from './components/userprofile/cms-profile/profile'
import Timeline from './components/userprofile/cms-timeline/timeline'
import {removeUserLocal} from '../src/utils/common'
import {getExpirAuth} from '../src/utils/common'
import {getExpirUser} from '../src/utils/common'
import UserPublic  from './components/userprofile/user-public/user-public'

import Tnews from './components/userprofile/tnews/tnews'
import TnewsEditPost from './components/userprofile/tnews/tnewsEditpost'

//img
import logo from './components/assets/logo.svg'
import Footer from './footer/footer';
import User from './components/user/user';
import SignUp from './components/user/signup';
import AddPostRoute from '../src/utils/privateRoute'
import ProfileDropDown from '../src/components/userprofile/profile-dropdown/profile-dropdown'
import ProfileDropdownUI from './components/userprofile/profile-dropdown/profile-dropdown-ui';
// import DynamicNav from './utils/dynamicNav';
// import {  } from 'react-router-dom';



export default function App() {
  // let x;
  const [scroll, setScroll] = useState(false);
  const [navActive, setNavActive] = useState(true)
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  
  // let history = useHistory();
//   useEffect(()=>{
//     window.scrollTo(0, 0);
// },[])
const [loading, setLoading] = useState(true)
 useEffect(() => {
  // window.scrollTo(0, 0)
  
   if(getExpirUser().isAuth == true || getExpirUser().isAuth == 'true'){
     setSignIn(true)
   }else{
    setSignIn(false)
   }
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > '100');
   });
   
 }, []); 
//  const handleOnClick = ()=>{
//   setSignOpen(true);

// }
// const handleClose = () => {
//   setSignOpen(false);
// };



const handleSignIn = () => {
  setSignIn(true);
};
//  const handleOnClickSignup = ()=>{
//   // setSignUp(true);
//   history.push('/about')

// }
const handleLogOut = () => {
  // setSignUp(false);
  setSignIn(false);
  removeUserLocal()
};
const onClickHideNav = () =>{
  setNavActive(!navActive)
}


function UserIn(){
  return(

      // <Link to="/"><p style={{cursor:"pointer"}} onClick={handleLogOut}>Log Out </p></Link>
      <ProfileDropdownUI setSignIn={setSignIn}/>
    
  )
}
function GuestIn(){
  return(
      // <div>
      // <Link to="/signin"><p style={{cursor:"pointer"}} >Sign In </p></Link>
      // <Link to="/signup"><p style={{cursor:"pointer"}} >Sign Up</p></Link>
      // </div>
      <div className="sign-navbar-btn">
      <Link className="signin-navbar-btn" to="/signin"><p style={{cursor:"pointer"}} >sign in </p></Link>
      <Link className="signup-navbar-btn" to="/signup"><p style={{cursor:"pointer"}} >sign up</p></Link>
      {/* <Link className="signin-navbar-btn" to="/"><p style={{cursor:"pointer"}} >sign in </p></Link> */}
      {/* <Link className="signup-navbar-btn" to="/"><p style={{cursor:"pointer"}} >sign up</p></Link> */}
      </div>
   
  )
}
function DynamicNav(){
  // const [Auth, setAuth] = useState(localStorage.getItem('isAuth'))
  // const [signinStat, setSigninstat] = useState(signIn)
  // console.log('ads',signin)
  // const [signup, setsignup] = useState('')
  // useEffect(()=>{
  //     // setAuth(localStorage.getItem('isAuth'))

  // if(signIn === true){
  //     // setSigninstat(true)
  //     console.log('ads',signIn)

  // }else{
  //     // setSigninstat(false)
  //     console.log('ads',signIn)
  // }
  // },signIn)

 
  if(signIn){
      return <UserIn/>
  }else{
      return <GuestIn/>
  }
}
function OrgiNav(){
  return(
      <div className={`${navActive ? "" : "inactive"} ${scroll ? "header-scroll" : "header" }`} >
   
        
           
      <div className={`signBlock ${scroll ? "inactive-sign" : "" }`}   >
        
        <DynamicNav signIn={signIn}/>
        <div className='language-switch'>
            <a href='https://www.trustnews.ca'>
              <p>EN</p> 
            </a>
            <p>/</p>
            <a href='https://www.vn.trustnews.ca'>
              <p>VN</p> 
            </a>
        </div>
        
      </div>
 
   

    
    <div>
      <BurgerMenu  onClickHideNav={onClickHideNav} scroll={scroll} burSignIn={setSignIn}/>
    </div>
    <a href="https://trustnews.ca">
    <div className={`${navActive ? "logo" : "logo-inactive"}`}>
      <img src={logo} alt='logo'/>
    </div>
    </a>

    
    

  </div>
  )
}
 
//  useEffect(()=>{
//   this.ref.burger.className = {nav};
//  });
 console.log('nav',signIn)
 console.log(getExpirUser().isAuth)
  return (
    <Router basename="/">
      <div className="App">
      {/* <ReCAPTCHA sitekey="6LfmYdcZAAAAAKaAy0EOn5zTRnwqB2jjjaCcIxSn" onChange={onChange} /> */}
        <div className="wrapper">
            
            {/* <div className={`${navActive ? "" : "inactive"} ${scroll ? "header-scroll" : "header" }`} >
     
             
                <div className={`signBlock ${scroll ? "inactive-sign" : "" }`}   >

                  <DynamicNav signIn={signIn}/>
                </div>
           
             

              
              <div>
                <BurgerMenu  onClickHideNav={onClickHideNav} scroll={scroll}/>
              </div>
              <Link to="/">
              <div className={`${navActive ? "logo" : "logo-inactive"}`}>
                <img src={logo} alt='logo'/>
              </div>
              </Link>
              
              

            </div> */}
                <Switch>
                  <Route exact path='/'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/signin'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/signup'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/postslist/:categoryTypeID'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/subpostslist/:topicTypeID'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/trendinglist'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/latestlist'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/featuredlist'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/mainstream'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/about'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/contact'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/error'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/privacy-policy'>
                      <OrgiNav/>
                  </Route>
                  <Route exact path='/terms-of-use'>
                      <OrgiNav/>
                  </Route>
          
                  
                  <Route path='/profile'>
                      <Navbar/>
                      <ProfileDropDown setSignIn={setSignIn}/>
                  </Route>
                  <Route exact path='/:userName'>
                      <OrgiNav/>
                  </Route>
              </Switch>
            <div className="body">
              {/* //route */}
              {/* <div style={{position:"fixed", zIndex:1000}}>
              <PostsList/>
              </div> */}
              <Switch>
                <Route exact path='/' >
                <Landing setScroll={setScroll}/>  </Route>
                <Route path='/signin'>
                    <User onClickSignIn={handleSignIn}/>
                  </Route>
                <Route path='/signup'>
                  <SignUp onClickSignUp={handleSignIn}/>
                  </Route>
                {/* <Route path="/signIn" component={SignIn}/>
                           <Route exact path="/userPost" component={UserPosts}/> */}
                <Route path='/postslist/:categoryTypeID'>
                  <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
                    <PostsList setScroll={setScroll}/>
                  </div>
                    
                </Route> 
                <Route path='/subpostslist/:topicTypeID'>
                  <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
                    <SubPostsList setScroll={setScroll}/>
                  </div>
                    
                </Route> 
                <Route path='/trendinglist'>
                  <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
                    <TrendingList setScroll={setScroll}/>
                  </div>
                    
                </Route> 
                <Route path='/latestlist'>
                  <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
                    <LatestList setScroll={setScroll}/>
                  </div>
                    
                </Route> 
                <Route path='/featuredlist'>
                  <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
                    <FeaturedList setScroll={setScroll}/>
                  </div>
                    
                </Route> 
                <Route path='/mainstream'>
                  <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
                    <MainstreamList setScroll={setScroll}/>
                  </div>
                    
                </Route> 
                <Route path='/about' component={About}/>
                
            

                <Route exact path='/contact' component={Contact}/>
                
                <Route exact path='/privacy-policy' component={PrivatePolicy}/>
                <Route exact path='/terms-of-use' component={TermUse}/>
                <AddPostRoute path='/profile' component={Profile}/>
                <Route exact path='/error' component={ErrorPage}/>
                <Route path='/:userName'>
                <PublicProfile setScroll={setScroll}/>

                  </Route>
                <Route path='*' component={ErrorPage}/>
                

                {/* <Route path='/tnews'>
                  <div>

                  <Tnews/> 
                  </div>
                </Route>  */}
                {/* <Route exact path='/tnewseditpost'>
                  <TnewsEditPost/> 
                </Route>  */}
                
                {/* <Route exact path='/post-detail/:id'>
                  <

                </Route> */}
              </Switch>
            </div>
            {/* <div className="footer"> */}
            <Switch>
                  <Route exact path='/'>
                      <Footer/>
                  </Route>
                  <Route exact path='/signin'>
                      {/* <Footer/> */}
                  </Route>
                  <Route exact path='/signup'>
                      {/* <Footer/> */}
                  </Route>
                  <Route exact path='/postslist/:categoryTypeID'>
                      <Footer/>
                  </Route>
                  <Route exact path='/subpostslist/:topicTypeID'>
                      <Footer/>
                  </Route>
                  <Route exact path='/trendinglist'>
                      <Footer/>
                  </Route>
                  <Route exact path='/mainstream'>
                      <Footer/>
                  </Route>
                  <Route exact path='/latestlist'>
                      <Footer/>
                  </Route>
                  <Route exact path='/featuredlist'>
                      <Footer/>
                  </Route>
                  <Route exact path='/about'>
                      <Footer/>
                  </Route>
                  <Route exact path='/contact'>
                      <Footer/>
                  </Route>
                  <Route exact path='/privacy-policy'>
                      <Footer/>
                  </Route>
                  <Route exact path='/terms-of-use'>
                      <Footer/>
                  </Route>
                  <Route path='/profile'>
                     
                  </Route>
                  <Route exact path='/error' />
                  <Route exact path='/:userName'>
                      <Footer/>
                  </Route>
            
               
                <Route path='*' />
                  
             
              </Switch>
             
            {/* </div> */}
        </div>
      </div>
    
    </Router>
      
  );
}