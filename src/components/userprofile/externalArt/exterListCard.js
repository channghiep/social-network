// import React,{useState} from 'react'
// import thumb from '../assets/thumb.png'
// import Grid from '@material-ui/core/Grid'
// import './posts-list-card.css'
// import thumbUp from '../assets/thumbsup_icon_blue.svg'
// import thumbDown from '../assets/thumbsdown_icon_red.svg'
// import follow from '../assets/follow_icon_green.svg'
// import PostDetail from '../post-detail/posts-detail-card'
// import ShowDetail from '../landing/showDetail'

// function PostsListCard(props) {
//     const [open, setOpen] = useState(false)

   
//     const handleOnClick = ()=>{
//         setOpen(true);

//     }
//     const handleClose = () => {
//         setOpen(false);
//       };
//     return (
//         <div>

//          <ShowDetail openDe={open} clickClose={handleClose} 
//                key={props.key}
//                author={props.author}
//                category={props.category}
//                topic={props.topic}
//                headline={props.headline}
//                postDate={props.date}
//                comments={props.comments}
//                likes={props.likes}
//                dislikes={props.dislikes}
//                follows= {props.follows}
//                postID={props.postID}
//                flags={props.flags}
//                imageLink={props.imageLink}/>    

            
//         {/* <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/> */}
//         <div style={{cursor:"pointer"}} onClick={handleOnClick} container  className="posts list">
//             <div item xs={3} className="post-img">
//                 <img src={props.imageLink} alt="thumb" height="160px" width="160px"/>
//             </div>
//             {/* <div item xs={9}> */}
//             <div className="post-headingL">
//                 <h1 className="heading size24">{props.headline}</h1>
//                 <div className="post-heading-top">
//                     <p className="subheading size16">{props.author}</p> 
//                     <p>{props.postDate}</p>
//                     <p>{props.teaser}</p>
//                     <div className="post-reaction size18">
//                         <img src={follow} alt="comment"/><p className="number-comment">{props.comments}</p>
//                         <img src={thumbUp} alt="like"/><p className="number-likes">{props.likes}</p>
//                         <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{props.dislikes}</p>
//                     </div>
//                 </div>

//             </div>
//             {/* </div> */}
            
//         </div >
        
//         </div>
//     )
// }  

// export default PostsListCard




import React,{useState} from 'react'
import {
    Link
  } from 'react-router-dom';
// import thumb from '../assets/thumb.png'
import Grid from '@material-ui/core/Grid'
import '../../posts-list/posts-list-card.css'
import Axios from 'axios';
import {Button,Modal} from 'react-bootstrap';


// import ShowDetail from '../landing/showDetail'

function ExternalListCard(props) {
    const [show, setShow] = useState(false)
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);
    const [open, setOpen] = useState(false)
    // console.log(props)
    // console.log('asfas')
   const {eaID,articleURL,source,key,author,category,topic,teaser,headline,postDate,comments,likes,dislikes,follows,flags,imageLink,postID,author1,article}=props
   
   
    const handleOnClick = ()=>{
        // props.setScroll(true)
        // setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
      };
     const handleDeleteArt = () =>{
        handleModalShow()
        // console.log(typeof eaID)
     }
     const handleConfirmedDelete = ()=>{
         Axios.get(`https://api-dev.trustnews.ca/deactivateExternal?eaID=${eaID}`).then(response=>{
            //  console.log(response)
         })
         window.location.reload(false);
        //  handleModalClose()
     }


        // console.log(articleURL)
        return (
            <div className='cms-postsLists-card'>
    
             {/* <ShowDetail openDe={open} clickClose={handleClose} 
                   key={props.key}
                   author={props.author}
                   category={props.category}
                   topic={props.topic}
                   headline={props.headline}
                   postDate={props.date}
                   comments={props.comments}
                   likes={props.likes}
                   dislikes={props.dislikes}
                   follows= {props.follows}
                   postID={props.postID}
                   flags={props.flags}
                   imageLink={props.imageLink}
                   articleURL={props.articleURL}
                   author1={props.author1}
                   article={props.article}/>     */}
    
                
            {/* <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/> */}
            <div style={{cursor:"pointer"}} onClick={handleOnClick} container  className="posts list">
                <div className="post-img">
                    <img src={imageLink} alt="thumb" height="160px" width="160px"/>
                </div>
                {/* <div item xs={9}> */}
                <div className="post-headingL">


                         {/* <Link style={{textDecoration:'none',color:'#FFF'}} to={{
                                pathname:'/profile/externaleditpost',
                                state:{
                                    postID:'',
                                    articleDrop: '',
                                    categoryTypeID:'',
                                    topicTypeID:'',
                                    regionTypeID:'',
                                    languageTypeID:'',
                                    contentRatingID:'',
                                    topicCatArray:'',
                                    preTop:'',
                                    headline: headline,
                                    teaser: teaser,
                                    article: article

                                }
                            }}><h1 className="heading size24">{props.headline}</h1></Link> */}
                            <h1 className="heading size24">{props.headline}</h1>
                    <div className="post-heading-top">
                        <p className="post-author subheading size16">{source}</p> 
                        <p className="post-date">{props.postDate}</p>
                        <p className="post-teaser">{props.teaser.slice(0,200)}...</p>
                        {/* <div className="post-reaction size18">
                            <img src={follow} alt="comment"/><p className="number-comment">{props.comments}</p>
                            <img src={thumbUp} alt="like"/><p className="number-likes">{props.likes}</p>
                            <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{props.dislikes}</p>
                        </div> */}
                        <div className='post-delete-icon' onClick={handleDeleteArt}>
                        <svg width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0
                                .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0
                                .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>
                            </svg>
                        </div>
                        <Modal className='signin-modal' show={show} onHide={handleModalClose} backdrop="static" keyboard={ false }>
                            <p>This will delete the article</p>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleConfirmedDelete}>
                                Confirm
                            </Button>
                        </Modal>
                           
                    </div>
                        
                </div>
                {/* </div> */}
          
                
            </div >
              
            
            </div>
        )

    
    
}  

export default ExternalListCard