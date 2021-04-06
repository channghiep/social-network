import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import {getAuth} from './common'
import {getSuAuth} from './common'
import {getExpirAuth} from './common'
import {getExpirUser} from './common'
import Navbar from '../components/userprofile/cms-nav/nav'
import ProfileDropDown from '../components/userprofile/profile-dropdown/profile-dropdown'

import Posts from '../components/userprofile/cms-posts/posts';
import Compose from '../components/userprofile/cms-compose-post/compose';
import EditPost from '../components/userprofile/cms-editPost/editPost';
import Drafts from '../components/userprofile/cms-drafts/drafts';
// import Profile from './components/cms-profile/profile';
import ChangePw from '../components/userprofile/change-password/change-password';
import ChangeImg from '../components/userprofile/change-img/change-img';
import EditProfile from '../components/userprofile/edit-profile/edit-profile';
import Timeline from '../components/userprofile/cms-timeline/timeline'
import Tnews from '../components/userprofile/tnews/tnews'
import TnewsEditPost from '../components/userprofile/tnews/tnewsEditpost'
import External from '../components/userprofile/externalArt/exter'
import ExternalEditPost from '../components/userprofile/externalArt/exterEditpost'
// import PostBreakApproval from '../components/userprofile/cms-approval/breakingpost-approval'
import AdminBoard from '../components/userprofile/cms-admin-board/admin-board'
import AdminProcessingFeature from '../components/userprofile/cms-admin-board/admin-processing-feature'
import AdminProcessingBreaking from '../components/userprofile/cms-admin-board/admin-processing-breaking'
import ComposeAdmin from '../components/userprofile/cms-compose-post/composeAdmin'
import EditPostAdmin from '../components/userprofile/cms-editPost/editPostAdmin'

export default function AddPostRoute({component: Component}){
    // console.log(getExpirAuth())
    return(
        <Route path='/profile'>

        
        {/* <Navbar/> */}
        {/* <ProfileDropDown/> */}
        <Switch>
            <Route
                exact path='/profile'
            //  path='/profile/pro'
                render={()=> 
                    getExpirUser().isAuth ? <Component/> : <Redirect to={{pathname: '/signin'}}/>
                    // {
                    //     if(localStorage.getItem('isAuth')==="true"){
                    //         console.log('asd',localStorage.getItem('isAuth'))
                    //         return(<Component/>)
                    //     }else{
                    //         return(<Redirect to={{pathname: '/signin'}}/>)
                    //     }
                    // }
                }
            />
            {/* <Route path='/profile/p'></Route> */}
            <Route exact path='/profile/posts' 
            render={()=> 
                getExpirUser().isAuth? <Posts/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/compose' 
            render={()=> 
                getExpirUser().isAuth? <Compose/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/composeadmin' 
            render={()=> 
                getExpirUser().isAuth? <ComposeAdmin/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/editPost' 
            render={()=> 
                getExpirUser().isAuth? <EditPost/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/editPostAdmin' 
            render={()=> 
                getExpirUser().isAuth? <EditPostAdmin/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/drafts' 
            render={()=> 
                getExpirUser().isAuth? <Drafts/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/changepw' 
            render={()=> 
                getExpirUser().isAuth? <ChangePw/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/changeimg' 
            render={()=> 
                getExpirUser().isAuth? <ChangeImg/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/editprofile' 
            render={()=> 
                getExpirUser().isAuth? <EditProfile/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/timeline' 
            render={()=> 
                getExpirUser().isAuth? <Timeline/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/tnews' 
            render={()=> 
                getSuAuth()? <Tnews/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/tnewseditpost' 
            render={()=> 
                getSuAuth()? <TnewsEditPost/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/externaleditpost' 
            render={()=> 
                getSuAuth()? <ExternalEditPost/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            <Route exact path='/profile/external' 
            render={()=> 
                getSuAuth()? <External/> : <Redirect to={{pathname: '/signin'}}/>}
            />
            {/* <Route exact path='/profile/breakingapproval' 
            render={()=> 
                getSuAuth()? <PostBreakApproval/> : <Redirect to={{pathname: '/signin'}}/>}
            /> */}

            <Route exact path='/profile/administration' 
            render={()=> 
                getSuAuth()? <AdminBoard/> : <Redirect to={{pathname: '/signin'}}/>}
            />

             <Route exact path='/profile/processing-feature' 
            render={()=> 
                getSuAuth()? <AdminProcessingFeature/> : <Redirect to={{pathname: '/signin'}}/>}
            />
              <Route exact path='/profile/processing-breaking' 
            render={()=> 
                getSuAuth()? <AdminProcessingBreaking/> : <Redirect to={{pathname: '/signin'}}/>}
            />          

            <Route component={Error}/>

        
           
          
                
      
        
          {/* <Route path='/profile' component={Profile}/> */}
          {/* <Route path='/compose' component={Compose}/>
          <Route path='/drafts' component={Drafts}/>
          <Route path='/change-password' component={ChangePw}/>
          <Route path='/change-profile-img' component={ChangeImg}/>
          <Route path='/edit-profile' component={EditProfile}/> */}
        </Switch>
 
        </Route>
    )
}
