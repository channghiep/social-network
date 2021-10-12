import React , {useState} from 'react'
import thumb from '../assets/thumb.png'
import Grid from '@material-ui/core/Grid'
import './landing-card.css'
import thumbUp from '../assets/thumbsup_icon_blue.svg'
import thumbDown from '../assets/thumbsdown_icon_red.svg'
import follow from '../assets/follow_icon_green.svg'
import PostDetail from '../post-detail/posts-detail-card'
import ShowDetail from './showDetail'
import { getThemeProps } from '@material-ui/styles'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function LandingCard(props) {
    const [open, setOpen] = useState(false);
    
    const handleOnClick = ()=>{
        props.setScroll(true)
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
      };

    function DynamicPic(){
        if(props.imageLink === ''){
            return(
                <img src='https://img.trustnews.ca/images/492-thumb-gxvdVnVVkzaejZWNeB-Vw83P.jpg' alt="thumb"/> 
            )
        }else{
            return(
                <img src={`${props.imageLink}`} alt="thumb"/>
            )
        }
    } 
    const handleBBCClick=()=>{
        window.open(props.articleURL)
    }  
     if(props.articleURL !== undefined && props.articleURL.slice(0,15) == "https://www.bbc"){
        return (
            <div className="landing-card"key={props.key}>
                <div style={{cursor:"pointer"}} onClick={handleBBCClick} container className="posts">
                    <div item xs={4} className="post-img">
                        <DynamicPic/>
                    </div>
                    <div className="post-heading">
                        <p className="source">{props.source}</p>
                        <h1 className="heading">{props.headline}</h1>
                        <div className="post-heading-top">
                            <p className="subheading">{props.authorName}</p> 
                            <p className="land-date">{props.postDate}</p>
                        </div>
                        <p className="subheading teaser">{`${props.teaser.slice(0,80)}`+`...`}</p>
                    </div>

                </div >
            
            </div>
        )
     } 
    else if(props.articleURL !== undefined && props.articleURL.slice(0,17) != 'https://t-news.ca'){
    return (
        <div className="landing-card"key={props.key}>
            <ShowDetail 
            authID={props.custID}
            openDe={open} clickClose={handleClose} 
               articleURL = {props.articleURL}
               key={props.key}
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
               imageLink={props.imageLink}

               author1={props.authorName1}
               article={props.article}
               
               />

        
            <div style={{cursor:"pointer"}} onClick={handleOnClick} container className="posts">

                <div item xs={4} className="post-img">
                    <DynamicPic/>
                </div>          
                <div className="post-heading">
                    <p className="source">{props.source}</p>
                    <h1 className="heading">{props.headline}</h1>
                    <div className="post-heading-top">
                        <p className="subheading">{props.authorName}</p> 
                        <p className="land-date">{props.postDate}</p>
                        
                    
                    </div>
                    <p className="subheading teaser">{`${props.teaser.slice(0,80)}`+`...`}</p>
                </div>     
            </div >
        </div>
    )}
    else if(props.articleURL !== undefined &&  props.articleURL.slice(0,17) == 'https://t-news.ca'){
        return(
            <div className="landing-card"key={props.key}>
                <ShowDetail 
                authID={props.custID}
                openDe={open} clickClose={handleClose} 
                articleURL = {props.articleURL}
                key={props.key}
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
                imageLink={props.imageLink}

                author1={props.authorName1}
                article={props.article}
                
                />

        
                <div style={{cursor:"pointer"}} onClick={handleOnClick} container className="posts">
                    <div item xs={4} className="post-img">
                        <DynamicPic/>
                    </div>

                    <div className="post-heading">
                        <p className="source">{props.source}</p>
                        <h1 className="heading">{props.headline}</h1>
                        <div className="post-heading-top">
                            <p className="subheading">{props.authorName}</p> 
                            <p className="land-date">{props.postDate}</p>
                        </div>
                        <p className="subheading teaser">{`${props.teaser.slice(0,80)}`+`...`}</p>
                    </div>             
                </div >
            </div>
    )
    }
    else{
        return(
            <div className="landing-card" key={props.key}>
                <ShowDetail 
                authID={props.custID}
                openDe={open} clickClose={handleClose} 
                articleURL = {props.articleURL}
                key={props.key}
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
                imageLink={props.imageLink}
                />
            
                <div style={{cursor:"pointer"}} onClick={handleOnClick} container className="posts">
                    <div item xs={4} className="post-img">
                        <DynamicPic/>
                    </div>         
                    <div className="post-heading">
                        <h1 className="heading size20">{props.headline}</h1>
                        <div className="post-heading-top">
                            <p className="subheading size16">{props.authorName}</p> 
                            <p className="land-date">{props.postDate}</p>
                        </div>  
                        
                            <p className="subheading teaser">{`${props.teaser.slice(0,80)}`+`...`}</p>
                            <div className="post-reaction size18">
                                <img src={follow} alt="follow"/><p className="number-follow">{props.follows}</p>
                                <img src={thumbUp} alt="like"/><p className="number-likes">{props.likes}</p>
                                <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{props.dislikes}</p>
                            </div>   
                    </div>
                </div>
            </div>
        )
    }
}  

export default LandingCard