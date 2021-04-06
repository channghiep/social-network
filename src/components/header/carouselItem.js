import React ,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import thumbUp from '../assets/thumbsup_icon_gray.svg'
import thumbDown from '../assets/thumbsdown_icon_gray.svg'
import follow from '../assets/follow_icon_gray.svg'
import PostDetail from '../post-detail/posts-detail-card'
import ShowDetail from '../landing/showDetail'
export default function CarouselItem(props){
    
    const [open, setOpen] = useState(false)

   
    const handleOnClick = ()=>{
        props.setScroll(true)
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
      };

   
    // const handleOnClick = ()=>{
    //     setOpen(true);

    // }
 
   if(props.articleURL == undefined){

    if(props.headline == ''){
        return(
            <div>
                <div>
                    <div className="breakCont"></div>
                </div>
            </div>    
        )
    }else{
    return(
        <div>
            <ShowDetail openDe={open} clickClose={handleClose} 
               key={props.key}
               author={props.author}
               category={props.category}
               topic={props.topic}
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

      
        
        
        <div>
     
                        <div className="breakCont" key={props.postID}>

                            <div className="breakingTitle">
                                <p className="subheading heading-size-S">breaking news</p>
                                <h1 className="heading size60">{props.headline}</h1>
                            </div>
                            
                            <div className="breakingTop">
                                <p className="subheading heading-size-S">{props.author}</p>

                                <p className="heading-size-S">{props.postDate}</p>
                            
                                <div className="post-reactions-break subheading heading-size-S">
                            
                                    <div>
                                    <img className="reaction-icon-size" src={follow} alt="follow"/>&nbsp; <p className="reaction-num">{props.comments}</p>
                                    </div>&nbsp;&nbsp;
                                    <div>
                                        <img className="reaction-icon-size" src={thumbDown} alt="down"/>&nbsp; <p className="reaction-num">{props.dislikes}</p> 
                                    </div>&nbsp;&nbsp;
                                    <div>
                                        <img className="reaction-icon-size" src={thumbUp} alt="up"/> &nbsp; <p className="reaction-num">{props.likes}</p>
                                        
                                    </div>

                                </div>
                            </div>
                            
                            <div className="content heading-size-S">
                                {props.teaser} <p onClick={handleOnClick} className="subheading read">read more</p>
                            </div>
                        
                          
                        </div>
                        
                    
                        {/* </Carousel.Caption> */}
                
                    {/* </Carousel.Item> */}
                    </div>
        </div>
    )
   }
   }else{
    return(
        <div>
            <ShowDetail openDe={open} clickClose={handleClose} 
               key={props.key}
               author={props.author}
               category={props.category}
               topic={props.topic}
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
               articleURL={props.articleURL}
               article={props.article}
               author1={props.author1}

               
               />

      
        
        
        <div>
     
                        <div className="breakCont" key={props.postID}>

                            <div className="breakingTitle">
                                <p className="subheading heading-size-S">breaking news</p>
                                <h1 className="heading">{props.headline}</h1>
                            </div>
                            
                            <div className="breakingTop">
                                <p className="subheading heading-size-S">{props.author1}</p>

                                <p className="heading-size-S">{props.postDate}</p>
                            
                                {/* <div className="post-reactions-break subheading heading-size-S">
                            
                                    <div>
                                    <img className="reaction-icon-size" src={follow} alt="follow"/>&nbsp; <p className="reaction-num">{props.comments}</p>
                                    </div>&nbsp;&nbsp;
                                    <div>
                                        <img className="reaction-icon-size" src={thumbDown} alt="down"/>&nbsp; <p className="reaction-num">{props.dislikes}</p> 
                                    </div>&nbsp;&nbsp;
                                    <div>
                                        <img className="reaction-icon-size" src={thumbUp} alt="up"/> &nbsp; <p className="reaction-num">{props.likes}</p>
                                        
                                    </div>

                                </div> */}
                            </div>
                            
                            <div className="content heading-size-S">
                                {props.teaser.slice(0,200)}... <p onClick={handleOnClick} className="subheading read">read more</p>
                            </div>
                        
                          
                        </div>
                        
                    
                        {/* </Carousel.Caption> */}
                
                    {/* </Carousel.Item> */}
                    </div>
        </div>
    )
   }
    
}