
import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddPost from './addPost';

import  './userPosts.css';

import plusicon from '../assets/plusicon.svg';
import filtericon from '../assets/filtericon.svg';
import deleteicon from '../assets/deleteicon.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function UserPosts(props){
    const [openNewP, setNewP] = useState(false)
   
    const handleOnClick = ()=>{
        setNewP(true);
        console.log("a")
    }
    const handlelistClose = () => {
        setNewP(false);
    
      };
    return(
        <div>
             <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
             
             <IconButton edge="start" color="inherit" onClick={props.clickClose} aria-label="close">
             <CloseIcon />
             </IconButton>
            {/* //////// */}
            
             {/* <IconButton edge="start" color="inherit"  aria-label="close"> */}
               <div className="addPost" onClick={handleOnClick} style={{cursor:"pointer"}}>
                 <img src={plusicon} alt="plusIcon"/>
                 <p>add new post</p>
               </div>
                
             {/* </IconButton> */}
             <AddPost open={openNewP} closeNewPost={handlelistClose}/>
            <div>
              <div className="postSorting">
                <p>posts</p>
                <p>category</p>
                <p>date posted</p>
                <p>follows</p>
                <p>likes</p>
                <p>dislikes</p>
                <p>comments</p>
                <img src={filtericon} alt="filterIcon"/>
              </div>
              <div className="postSorting postslist">
                <p>headline</p>
                <p>category</p>
                <p>date posted</p>
                <p>follows</p>
                <p>likes</p>
                <p>dislikes</p>
                <p>comments</p>
                <img src={deleteicon} alt="deleteIcon"/>
              </div>
              <div className="postSorting postslist">
                <p>headline</p>
                <p>category</p>
                <p>date posted</p>
                <p>follows</p>
                <p>likes</p>
                <p>dislikes</p>
                <p>comments</p>
                <img src={deleteicon} alt="deleteIcon"/>
              </div>
            </div>

             </Dialog>
            
        </div>
    )
}