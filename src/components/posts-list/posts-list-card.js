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
import thumb from '../assets/thumb.png'
import Grid from '@material-ui/core/Grid'
import './posts-list-card.css'
import thumbUp from '../assets/thumbsup_icon_blue.svg'
import thumbDown from '../assets/thumbsdown_icon_red.svg'
import follow from '../assets/follow_icon_green.svg'
import PostDetail from '../post-detail/posts-detail-card'
import ShowDetail from '../landing/showDetail'

function PostsListCard(props) {
    const [open, setOpen] = useState(false)
    // console.log('asfas')
   
    const handleOnClick = ()=>{
        props.setScroll(true)
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
      };
    const handleBBCClick=()=>{
        window.open(props.articleURL)
    }  
     if(props.articleURL !== undefined && props.articleURL.slice(0,15) == "https://www.bbc"){
         console.log(props.articleURL.slice(0,20))
        return (
            <div>
    
             
            {/* <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/> */}
            <div style={{cursor:"pointer"}} onClick={handleBBCClick} container  className="posts list">
                <div item xs={3} className="post-img">
                    <img src={props.imageLink} alt="thumb" height="160px" width="160px"/>
                </div>
                {/* <div item xs={9}> */}
                <div className="post-headingL">
                    <h1 className="heading size24">{props.headline}</h1>
                    <div className="post-heading-top">
                        <p className="post-author subheading size16">{props.source}</p> 
                        <p className="post-date">{props.postDate}</p>
                        <p className="post-teaser">{props.teaser}</p>
                        {/* <div className="post-reaction size18">
                            <img src={follow} alt="comment"/><p className="number-comment">{props.comments}</p>
                            <img src={thumbUp} alt="like"/><p className="number-likes">{props.likes}</p>
                            <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{props.dislikes}</p>
                        </div> */}
                    </div>
    
                </div>
                {/* </div> */}
                
            </div >
            
            </div>
        )
     } 

    else if(props.articleURL !== undefined &&  props.articleURL.slice(0,17) != 'https://t-news.ca'){
        return (
            <div>
    
             <ShowDetail openDe={open} clickClose={handleClose}
                   articleURL = {props.articleURL} 
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
                   
                   author1={props.author1}
                   article={props.article}
                   
                   />    
    
                
            {/* <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/> */}
            <div style={{cursor:"pointer"}} onClick={handleOnClick} container  className="posts list">
                <div item xs={3} className="post-img">
                    <img src={props.imageLink} alt="thumb" height="160px" width="160px"/>
                </div>
                {/* <div item xs={9}> */}
                <div className="post-headingL">
                    <h1 className="heading size24">{props.headline}</h1>
                    <div className="post-heading-top">
                        <p className="post-author subheading size16">{props.source}</p> 
                        <p className="post-date">{props.postDate}</p>
                        <p className="post-teaser">{props.teaser}</p>
                        {/* <div className="post-reaction size18">
                            <img src={follow} alt="comment"/><p className="number-comment">{props.comments}</p>
                            <img src={thumbUp} alt="like"/><p className="number-likes">{props.likes}</p>
                            <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{props.dislikes}</p>
                        </div> */}
                    </div>
    
                </div>
                {/* </div> */}
                
            </div >
            
            </div>
        )
    }
    else if(props.articleURL !== undefined &&  props.articleURL.slice(0,17) == 'https://t-news.ca'){
        // console.log(props.articleURL)
        return (
            <div>
    
             <ShowDetail openDe={open} clickClose={handleClose} 
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
                   article={props.article}/>    
    
                
            {/* <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/> */}
            <div style={{cursor:"pointer"}} onClick={handleOnClick} container  className="posts list">
                <div item xs={3} className="post-img">
                    <img src='http://lorempixel.com/640/480' alt="thumb" height="160px" width="160px"/>
                </div>
                {/* <div item xs={9}> */}
                <div className="post-headingL">
                    <h1 className="heading size24">{props.headline}</h1>
                    <div className="post-heading-top">
                        <p className="post-author subheading size16">{props.author}</p> 
                        <p className="post-date">{props.postDate}</p>
                        <p className="post-teaser">{props.teaser.slice(0,200)}...</p>
                        {/* <div className="post-reaction size18">
                            <img src={follow} alt="comment"/><p className="number-comment">{props.comments}</p>
                            <img src={thumbUp} alt="like"/><p className="number-likes">{props.likes}</p>
                            <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{props.dislikes}</p>
                        </div> */}
                    </div>
    
                </div>
                {/* </div> */}
                
            </div >
            
            </div>
        )
    }
    else{  
    return (
        <div>

         <ShowDetail openDe={open} clickClose={handleClose} 
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
               imageLink={props.imageLink}/>    

            
        {/* <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/> */}
        <div style={{cursor:"pointer"}} onClick={handleOnClick} container  className="posts list">
            <div item xs={3} className="post-img">
                <img src={props.imageLink} alt="thumb" height="160px" width="160px"/>
            </div>
            {/* <div item xs={9}> */}
            <div className="post-headingL">
                <h1 className="heading size24">{props.headline}</h1>
                <div className="post-heading-top">
                    <p className="post-author subheading size16">{props.author}</p> 
                    <p className="post-date">{props.postDate}</p>
                    <p className="post-teaser">{props.teaser}</p>
                    <div className="post-reaction size18">
                        <img src={follow} alt="follow"/><p className="number-follow">{props.follows}</p>
                        <img src={thumbUp} alt="like"/><p className="number-likes">{props.likes}</p>
                        <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{props.dislikes}</p>
                    </div>
                </div>

            </div>
            {/* </div> */}
            
        </div >
        
        </div>
    )}

}  

export default PostsListCard