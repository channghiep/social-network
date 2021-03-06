
import './burgerMenu.css'
import Axios from 'axios'
import Grid from '@material-ui/core/Grid'
import trendingIcon from '../assets/trending_icon.svg'
import latestIcon from '../assets/latestnews_icon.svg'
import {Link} from 'react-router-dom'
import hamburger_icon from '../assets/hamburger_icon.svg'
import ProfileDropdownUI from '../userprofile/profile-dropdown/profile-dropdown-ui'
import {getExpirUser} from '../../utils/common'
import React, { useState, useEffect,useContext } from 'react'
import {stack as Menu} from 'react-burger-menu'


// make a new context
const MyContext = React.createContext();

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}


// create a navigation component that wraps the burger menu
const Navigation = (props) => {
    const [signIn, setSignIn] = useState(false)
  const ctx = useContext(MyContext)
  const [categories, setCategories] = useState([])

  function UserIn(){
    return(
  
        // <Link to="/"><p style={{cursor:"pointer"}} onClick={handleLogOut}>Log Out </p></Link>
        <ProfileDropdownUI setSignIn={props.burSignIn}/>
      
    )
  }
  function GuestIn(){
    return(
        // <div>
        // <Link to="/signin"><p style={{cursor:"pointer"}} >Sign In </p></Link>
        // <Link to="/signup"><p style={{cursor:"pointer"}} >Sign Up</p></Link>
        // </div>
        <div className="sign-navbar-btn">
        {/* <Link className="signin-navbar-btn" to="/"><p style={{cursor:"pointer"}} >sign in </p></Link> */}
        {/* <Link onClick={ctx.toggleMenu} className="signup-navbar-btn" to="/"><p style={{cursor:"pointer"}} >sign up</p></Link> */}
        <Link onClick={ctx.toggleMenu} className="signin-navbar-btn" to="/signin"><p style={{cursor:"pointer"}} >sign in </p></Link>
        <Link onClick={ctx.toggleMenu} className="signup-navbar-btn" to="/signup"><p style={{cursor:"pointer"}} >sign up</p></Link>
        </div>
     
    )
  }
  function DynamicNavSub(){
    if(signIn){
        return <UserIn/>
    }else{
        return <GuestIn/>
    }
  }
  
  useEffect(()=>{
    if(getExpirUser() == null){
      setSignIn(false)
     }
     else if(getExpirUser().isAuth == true){
        setSignIn(true)
      }else{
        setSignIn(false)
      }
      const fecthData = async () => {
          const response = await Axios.get(`https://api-dev.trustnews.ca/catList`);
          setCategories(response.data)
      }
      fecthData();
  },[])
  let PoliticsArray = [];
  let EnviArray = [];
  let BusiArray = [];
  let AroundArray = [];
  for(let i=0; i<categories.length;i++){
      if(categories[i].categoryType === "Politics"){
          PoliticsArray.push(categories[i]);
      }
      if(categories[i].categoryType === "Environment"){
          EnviArray.push(categories[i]);
      }
      if(categories[i].categoryType === "Business"){
          BusiArray.push(categories[i]);
      }
      if(categories[i].categoryType === "Around the World"){
          AroundArray.push(categories[i]);
      }
  };

  return (
    <Menu
        className='side-drawer-menu'
        onClick={props.onClickHideNav}
      customBurgerIcon={ <img src={hamburger_icon}/>}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
            <Grid className='side-drawer-container' container>
                <Grid className="side-drawer-latest subheading-menu size14" item xs={12}>
                    <img src={latestIcon} alt="latest"/>&nbsp;&nbsp; <Link onClick={ctx.toggleMenu} style={{textDecoration: 'none' ,color:'#DE3F42'}} to="/latestlist">latest news</Link>
                </Grid>
                <Grid style={{marginTop:"20px"}} className="side-drawer-trending subheading-menu size14" item xs={12}>
                    <img src={trendingIcon} alt="trending"/>&nbsp;&nbsp; <Link onClick={ctx.toggleMenu} style={{textDecoration: 'none' ,color:'#DE3F42'}} to="/trendinglist">trending</Link>
                </Grid>

                <Grid className='side-drawer-grid' style={{marginTop:"30px"}}item xs={12} container>
                    <Grid className='side-drawer-cat' item xs={6} container>

                    <Link onClick={ctx.toggleMenu} to="/postsList/1"><p className="menu-item subheading-menu  size14">POLITICS</p></Link>
                       {PoliticsArray.map(politic =>{
                           const {topicType,topicTypeID} = politic
                           return(
                               <Grid item xs={12}>
                            <Link onClick={ctx.toggleMenu} className="submenu-item subheading-menu  size14" to={`/subpostslist/${topicTypeID}`}>{topicType}</Link>
                            </Grid>
                        )
                    })}
                    </Grid> 

                    <Grid className='side-drawer-cat' item xs={6} container>

                        <Link onClick={ctx.toggleMenu} to="/postsList/2"><p className="menu-item subheading-menu  size14">ENVIRONMENT</p></Link>
                        {EnviArray.map(envi =>{
                            const {topicType,topicTypeID} = envi
                            return(
                                <Grid item xs={12}>
                                <Link onClick={ctx.toggleMenu} className="submenu-item subheading-menu  size14" to={`/subpostslist/${topicTypeID}`}>{topicType}</Link>
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Grid className='side-drawer-cat' item xs={6} container>

                        <Link onClick={ctx.toggleMenu} to="/postsList/3"><p className="menu-item subheading-menu  size14">BUSINESS</p></Link>
                        {BusiArray.map(busi =>{
                            const {topicType,topicTypeID} = busi
                            return(
                                <Grid item xs={12}>
                            <Link onClick={ctx.toggleMenu} className="submenu-item subheading-menu  size14" to={`/subpostslist/${topicTypeID}`}>{topicType}</Link>
                            </Grid>
                            )
                        })}
                    </Grid> 

                    <Grid className='side-drawer-cat' item xs={6} container>

                      <Link onClick={ctx.toggleMenu} to="/postsList/4"><p className="menu-item subheading-menu  size14" >AROUND THE WORLD</p></Link>
                       {AroundArray.map(around =>{
                           const {topicType,topicTypeID} = around
                           return(
                               <Grid item xs={12}>
                            <Link onClick={ctx.toggleMenu} className="submenu-item subheading-menu  size14" to={`/subpostslist/${topicTypeID}`}>{topicType}</Link>
                            </Grid>
                        )
                    })}
                    </Grid>   

                </Grid>

                <Grid style={{marginTop:"30px"}} className="side-drawer-media subheading-menu size14" item xs={12}>
                <Link onClick={ctx.toggleMenu} to="/mainstream"><p className="menu-item subheading-menu  size14" >MEDIA MAINSTREAM</p></Link>
                    {/* <a style={{textDecoration: 'none' ,color:'#DE3F42'}} href="/">MEDIA</a> */}
                </Grid>
                <Grid onClick={ctx.toggleMenu} className="side-drawer-abt subheading-menu size14" item xs={12}>
                    <Link style={{textDecoration: 'none' ,color:'#DE3F42'}} to='/about'>ABOUT US</Link>
                    {/* <a href="/"></a> */}
                </Grid>
                <Grid onClick={ctx.toggleMenu} className="side-drawer-contact subheading-menu size14" item xs={12}>
                    <Link style={{textDecoration: 'none' ,color:'#DE3F42'}} to='/contact'>CONTACT US</Link>
                    {/* <a href="/">CONTACT US</a> */}
                </Grid>
            </Grid>
            {/* <div className="subheading size18" >
                  <p style={{cursor:"pointer", color:"#DE3F42"}}>Sign In </p>
                  <p style={{cursor:"pointer", color:"#DE3F42"}}>Sign Up</p>
                </div> */}
                <DynamicNavSub/>
                <div className='language-switch'>
                    <a href='https://www.trustnews.ca'>
                      <p>EN</p> 
                    </a>
                    <p>/</p>
                    <a href='https://www.vn.trustnews.ca'>
                      <p>VN</p> 
                    </a>
                </div>
    </Menu>
  )
}
const BurgerMenu = (props) => {
    return (
      <MyProvider>
        <div>
          {/* <Button /> */}
          <Navigation onClickHideNav={props.onClickHideNav} burSignIn={props.burSignIn}/>
        </div>
      </MyProvider>
    )
  }
  
  export default BurgerMenu;