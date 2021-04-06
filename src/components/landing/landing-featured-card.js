import React,{useState}from 'react'
import thumbUp from '../assets/thumbsup_icon_gray.svg'
import thumbDown from '../assets/thumbsdown_icon_gray.svg'
import follow from '../assets/follow_icon_gray.svg'
import PostDetail from '../post-detail/posts-detail-card'
import featured2 from '../assets/featured2.png'
import ShowDetail from './showDetail'

export default function FeaturedCard(props){
    const [open, setOpen] = useState(false)

   
    const handleOnClick = ()=>{
        props.setScroll(true)
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
      };
      if(props.articleURL == undefined){
        return(
            // <div>
    
            // <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/>
            <div key={props.key}>
                <ShowDetail 
                // openDe={open} clickClose={handleClose} 
                openDe={props.open} clickClose={props.handleClose} handleOpen={props.handleOpen}
                setScroll={props.setScroll}
                   key={props.key}
                   articleURL = {props.articleURL}
                   author={props.authorName}
                   category={props.categoryType}
                   topic={props.topicType}
                   headline={props.headline}
                   postDate={props.date}
                   teaser={props.teaser}
                   comments={props.comments}
                   likes={props.likes}
                   dislikes={props.dislikes}
                   follows= {props.follows}
                   postID={props.postID}
                   flags={props.flags}
                   imageLink={props.imageLink}/>
    
                <div className="featured">
                    <img src={props.imageLink} alt="img" height="400px" width="400px"/>
                    <div className="featureCont">
                        <h1 className="heading size24">{props.headline}</h1>
                       
                        <div>
                        <p className="subheading size18">{props.authorName}</p>
                        <p className="size18">{props.postDate}</p>
                        </div>
                        <p className="subheading size14">{props.teaser}</p>
                        <p style={{cursor:"pointer"}} onClick={handleOnClick} className="subheading read">Read more</p>
                        <div className="post-reactions size18 subheading">
                            <p>
                                <img className="reactIcon" src={follow} alt="comment"/> {props.comments}
                                <img className="reactIcon" src={thumbUp} alt="like"/> {props.likes}
                                <img className="reactIcon" src={thumbDown} alt="dislike"/> {props.dislikes}
                            </p>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
        )
      }else{
        return(
            // <div>
    
            // <PostDetail open={open} clickClose={handleClose} postId={props.postID} author={props.authorName}/>
            <div key={props.key}>
                <ShowDetail openDe={open} clickClose={handleClose} 
                   key={props.key}
                   articleURL = {props.articleURL}
                   author={props.authorName}
                   category={props.categoryType}
                   topic={props.topicType}
                   headline={props.headline}
                   postDate={props.date}
                   teaser={props.teaser}
                   comments={props.comments}
                   likes={props.likes}
                   dislikes={props.dislikes}
                   follows= {props.follows}
                   postID={props.postID}
                   flags={props.flags}
                   imageLink={props.imageLink}/>
    
                <div className="featured">
                    <img src={props.imageLink} alt="img" height="400px"/>
                    <div className="featureCont">
                        <h1 className="heading size24">{props.headline}</h1>
                       
                        <div>
                        <p className="subheading size18">{props.authorName}</p>
                        <p className="size18">{props.postDate}</p>
                        </div>
                        <p className="subheading size14">{props.teaser}</p>
                        <p style={{cursor:"pointer"}} onClick={handleOnClick} className="subheading read">Read more</p>
                        {/* <div className="post-reactions size18 subheading">
                            <p>
                                <img className="reactIcon" src={follow} alt="comment"/> {props.comments}
                                <img className="reactIcon" src={thumbUp} alt="like"/> {props.likes}
                                <img className="reactIcon" src={thumbDown} alt="dislike"/> {props.dislikes}
                            </p>
                        </div> */}
                        
                        
                    </div>
                    
                </div>
            </div>
        )
      }
    
}