// import React, {useState, useEffect} from 'react'
// // import { Route, Redirect, Switch } from 'react-router-dom'
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Link,
    
//   } from 'react-router-dom';

// import PostsList from '../components/posts-list/posts-list';
// import SubPostsList from '../components/posts-list/subPost-list';
// import TrendingList from '../components/posts-list/trending-list'
// import LatestList from '../components/posts-list/latest-list'
// import FeaturedList from '../components/posts-list/featured-list'
// import BurgerMenu from '../components/header/burgerMenu';
// // import Profile from '../components/userprofile/profile'
// import About from '../components/about-us/about-us'
// import Contact from '../components/contact-us/contact-us'

// import logo from '../components/assets/logo.svg'
// import Footer from '../footer/footer';
// import User from '../components/user/user';
// import SignUp from '../components/user/signup';

// export default function LandingRoute({component: Component}){
//     const [scroll, setScroll] = useState(false);
//     const [navActive, setNavActive] = useState(true)
//     const [signIn, setSignIn] = useState(false)
//     const [signUp, setSignUp] = useState(false)
    
//     // let history = useHistory();
  
//    useEffect(() => {
//      window.addEventListener("scroll", () => {
//        setScroll(window.scrollY > '100');
//      });
//    }, []); 
//   //  const handleOnClick = ()=>{
//   //   setSignOpen(true);
  
//   // }
//   // const handleClose = () => {
//   //   setSignOpen(false);
//   // };
//   const handleSignIn = () => {
//     setSignIn(true);
//   };
//   //  const handleOnClickSignup = ()=>{
//   //   // setSignUp(true);
//   //   history.push('/about')
  
//   // }
//   const handleCloseSignup = () => {
//     setSignUp(false);
//   };
//   const onClickHideNav = () =>{
//     setNavActive(!navActive)
//   }
  
  
//   function UserIn(){
//     return(
  
//         <Link to="/signin"><p style={{cursor:"pointer"}} >Log Out </p></Link>
      
//     )
//   }
//   function GuestIn(){
//     return(
//         <div>
//         <Link to="/signin"><p style={{cursor:"pointer"}} >Sign In </p></Link>
//         <Link to="/signup"><p style={{cursor:"pointer"}} >Sign Up</p></Link>
//         </div>
     
//     )
//   }
//   function DynamicNav(){
//     // const [Auth, setAuth] = useState(localStorage.getItem('isAuth'))
//     // const [signinStat, setSigninstat] = useState(signIn)
//     // console.log('ads',signin)
//     // const [signup, setsignup] = useState('')
//     useEffect(()=>{
//         // setAuth(localStorage.getItem('isAuth'))
  
//     if(signIn == true){
//         // setSigninstat(true)
//         console.log('ads',signIn)
  
//     }else{
//         // setSigninstat(false)
//         console.log('ads',signIn)
//     }
//     },signIn)
  
   
//     if(signIn){
//         return <UserIn/>
//     }else{
//         return <GuestIn/>
//     }
//   }

//     return(
//         <Route path='/'>
      
//              <div className={`${navActive ? "" : "inactive"} ${scroll ? "header-scroll" : "header" }`} >
             
//              <div className={`signBlock ${scroll ? "inactive-sign" : "" }`}   >
     
//                <DynamicNav signIn={signIn}/>
//              </div>

           
//            <div>
//              <BurgerMenu  onClickHideNav={onClickHideNav} scroll={scroll}/>
//            </div>
//            <Link to="/">
//            <div className={`${navActive ? "logo" : "logo-inactive"}`}>
//              <img src={logo} alt='logo'/>
//            </div>
//            </Link>
           
           

//          </div>
         
//          <div className="body">

//            <Switch>
//              <Route path='/' component={Component}/>
//              <Route path='/signin'>
//                  <User onClickSignIn={handleSignIn}/>
//                </Route>
//              <Route path='/signup' component={SignUp}/>

//              <Route path='/postslist/:categoryTypeID'>
//                <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
//                  <PostsList/>
//                </div>
                 
//              </Route> 
//              <Route path='/subpostslist/:topicTypeID'>
//                <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
//                  <SubPostsList/>
//                </div>
                 
//              </Route> 
//              <Route path='/trendinglist'>
//                <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
//                  <TrendingList/>
//                </div>
                 
//              </Route> 
//              <Route path='/latestlist'>
//                <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
//                  <LatestList/>
//                </div>
                 
//              </Route> 
//              <Route path='/featuredlist'>
//                <div style={{paddingTop:"150px", maxWidth: "1200px",margin:"auto"}}>
//                  <FeaturedList/>
//                </div>
                 
//              </Route> 
//              <Route path='/about' component={About}/>
//              <Route exact path='/contact' component={Contact}/>
             

//              {/* <Route exact path='/post' component={Posts}/>
       
//              <Route path='/compose' component={Compose}/>
//              <Route path='/drafts' component={Drafts}/>
//              <Route path='/change-password' component={ChangePw}/>
//              <Route path='/change-profile-img' component={ChangeImg}/>
//              <Route path='/edit-profile' component={EditProfile}/> */}
             

//            </Switch>
//          </div>

//            <Footer/>

//         </Route>
//     )
// }