import React, {useEffect,useState} from 'react'
// import commentsicon from '../assets/follow_icon_gray.svg';
// import likesicon from '../assets/thumbsup_icon_gray.svg';
// import dislikesicon from '../assets/thumbsdown_icon_gray.svg';
import Axios from 'axios'
import {getExpirUser} from '../../utils/common'

import thumbUp from '../assets/thumbsup_icon_blue.svg'
import thumbDown from '../assets/thumbsdown_icon_red.svg'
import follow from '../assets/follow_icon_green.svg'

import thumbUpgray from '../assets/thumbsup_icon_gray.svg'
import thumbDowngray from '../assets/thumbsdown_icon_gray.svg'
import followGray from '../assets/follow_icon_gray.svg'

export default function CommentCard(props){
    // const [ReactionObj,setReactionObj]= useState({
    //     like: true,
    //     dislike:false,
    //     follow:false,
    //     likeNum:10,
    //     dislikeNum:12,
    //     followNum:9
    //   })
    const [ReactionObj,setReactionObj]= useState({
      liked: '',
      disliked:'',
      follow:'',
      likeNum:props.likes,
      dislikeNum:props.dislikes,
      followNum:props.follows
    })
    const [Loading, setLoading]= useState(false)
    useEffect(()=>{
      if(getExpirUser().custId !== ''){
      Axios.get(`https://api-dev.trustnews.ca/getCReact?commentID=${props.commentID}&custID=${getExpirUser().custId}`).then(response=>{

        if(response.data.length === 0){
          setReactionObj(old=>{

            return {...old,liked:0,disliked:0,follow:0}
          })
        }else{

          setReactionObj(old=>{

            return {...old,liked:response.data[0].liked,disliked:response.data[0].disliked,follow:response.data[0].follow}
          })
        }
 
      })}
    },[])
      function HandleLike(){
        if(parseInt(ReactionObj.liked)){
          return(
            <div className='div-reactions div-likes'>
               <img onClick={ToggleLike} src={thumbUp} alt='likes'/> {ReactionObj.likeNum}
            </div>
          )
        }else{
          return(
            <div className='div-reactions div-unclick'>
              <img onClick={ToggleLike} src={thumbUpgray} alt='likes' /> {ReactionObj.likeNum}
            </div>
          )  
        }
      }
      function HandleFollow(){
        if(parseInt(ReactionObj.follow)){
          return(
            <div className='div-reactions div-follows'>
               <img onClick={ToggleFollow} src={follow} alt='follows'/> {ReactionObj.followNum}
            </div>
          )
        }else{
          return(
            <div className='div-reactions div-unclick'>
               <img onClick={ToggleFollow} src={followGray} alt='follows'/> {ReactionObj.followNum}
            </div>
          )  
        }
      }
      function HandleDislike(){
        if(parseInt(ReactionObj.disliked)){
          return(
            <div className='div-reactions div-dislikes'>
               <img onClick={ToggleDisLike} src={thumbDown} alt='dislikes'/> {ReactionObj.dislikeNum}
            </div>
          )
        }else{
          return(
            <div className='div-reactions div-unclick'>
              <img onClick={ToggleDisLike} src={thumbDowngray} alt='dislikes'/> {ReactionObj.dislikeNum}
            </div>
          )  
        }
      }
      
      useEffect(()=>{
       
      },[ReactionObj])
      
      // function ToggleLike(){
        
      //   // ReactionObj.like = !ReactionObj.like
      //   // setLike(!Like)
      //   if(!ReactionObj.like){
      
      //     if(ReactionObj.dislike){
      //       // let LikeObject={
      //       //   //ReactiontTo: c,p,a
      //       //   //ReactionType:l, d,f
      //       //   reactionTo:'p',
      //       //   reactionType:'l',
      //       //   postID:props.postID,
      //       //   custID:1
              
      //       // }
      //       console.log('liked with dis')
      //       // ReactionObj.like = true
      //       // ReactionObj.dislike = false
      //       // ReactionObj.likeNum = ReactionObj.likeNum +1
      //       setReactionObj(old =>{
      //         let updatedLike = old.likeNum +1
      //         let updatedDisLike = old.dislikeNum -1
      //         return {...old,likeNum: updatedLike,dislikeNum:updatedDisLike,like:true,dislike:false}
      //       })
            
            
            
      //       // setDislike(!Dislike)
      //       // setNumbDislike(NumbDislike-1)
      //     }else{
      //       // setNumbLike(NumbLike+1)
      //       console.log('liked with no dis')
      //       // ReactionObj.like = true
      //       console.log(ReactionObj.likeNum)
      //       // ReactionObj.likeNum = ReactionObj.likeNum +1
      //       // setReactionObj(ReactionObj.likeNum=12)
            
      //       setReactionObj(old =>{
      //         let updatedLike = old.likeNum +1
      //         return {...old,likeNum: updatedLike,like:true}
      //       })
      //       console.log(ReactionObj.likeNum)
      //     }
        
      //   }else if(ReactionObj.like){
      //     // setNumbLike(NumbLike-1)
      //     console.log('liked with like')
      //     // ReactionObj.likeNum = ReactionObj.likeNum -1
      //     // ReactionObj.like = false
      //     console.log(ReactionObj.likeNum)
      //     setReactionObj(old =>{
      //       let updatedLike = old.likeNum -1
      //       return {...old,likeNum: updatedLike,like:false}
      //     })
          
      //   }
      // }
      // function ToggleDisLike(){
        
      //   // ReactionObj.like = !ReactionObj.like
      //   // setLike(!Like)
      //   if(!ReactionObj.dislike){
      
      //     if(ReactionObj.like){
      //       // let LikeObject={
      //       //   //ReactiontTo: c,p,a
      //       //   //ReactionType:l, d,f
      //       //   reactionTo:'p',
      //       //   reactionType:'l',
      //       //   postID:props.postID,
      //       //   custID:1
              
      //       // }
      //       console.log('liked with dis')
          
      //       setReactionObj(old =>{
      //         let updatedDisLike = old.dislikeNum +1
      //         let updatedLike = old.likeNum -1
      //         return {...old,dislikeNum: updatedDisLike,likeNum:updatedLike,dislike:true,like:false}
      //       })
            
            
            
      //       // setDislike(!Dislike)
      //       // setNumbDislike(NumbDislike-1)
      //     }else{
      //       // setNumbLike(NumbLike+1)
      //       console.log('liked with no dis')
      //       // ReactionObj.like = true
      //       // console.log(ReactionObj.likeNum)
      //       // ReactionObj.likeNum = ReactionObj.likeNum +1
      //       // setReactionObj(ReactionObj.likeNum=12)
            
      //       setReactionObj(old =>{
      //         let updatedDisLike = old.dislikeNum +1
      //         return {...old,dislikeNum: updatedDisLike,dislike:true}
      //       })
           
      //     }
        
      //   }else if(ReactionObj.dislike){
      //     // setNumbLike(NumbLike-1)
      //     console.log('liked with like')
      //     // ReactionObj.likeNum = ReactionObj.likeNum -1
      //     // ReactionObj.like = false
      //     console.log(ReactionObj.dislikeNum)
      //     setReactionObj(old =>{
      //       let updatedDisLike = old.dislikeNum -1
      //       return {...old,dislikeNum: updatedDisLike,dislike:false}
      //     })
          
      //   }
      // }
      // function ToggleFollow(){
 
      //   if(!ReactionObj.follow){
      //     setReactionObj(old =>{
      //       let updatedFollow = old.followNum + 1
      //       return {...old,followNum: updatedFollow,follow:true}
      //     })
      //   }else{
      //     setReactionObj(old =>{
      //       let updatedFollow = old.followNum - 1
      //       return {...old,followNum: updatedFollow,follow:false}
      //     })
      //   }
      // }
      function ToggleLike(){
        if(Loading === false){
        if(!parseInt(ReactionObj.liked)){
      
          if(parseInt(ReactionObj.disliked)){
           
            setLoading(true)
            Axios.post('https://api-dev.trustnews.ca/setCReact',{
              ID:props.commentID,
              custID:getExpirUser().custId,
              follow: ReactionObj.follow,
              liked:1,
              disliked:0
            }).then(response =>{
              setLoading(false)
                 setReactionObj(old =>{
              let updatedLike = old.likeNum +1
              let updatedDisLike = old.dislikeNum -1
              return {...old,likeNum: updatedLike,dislikeNum:updatedDisLike,liked:1,disliked:0}
            })
            })
            
          }else{
      
            setLoading(true)
            Axios.post('https://api-dev.trustnews.ca/setCReact',{
              ID:props.commentID,
              custID:getExpirUser().custId,
              follow: ReactionObj.follow,
              liked:1,
              disliked:ReactionObj.disliked
            }).then(response =>{
              setLoading(false)
              setReactionObj(old =>{
              let updatedLike = old.likeNum +1
              return {...old,likeNum: updatedLike,liked:1}
            })
            })
            
            
      
          }
        
        }else if(parseInt(ReactionObj.liked)){
      
     
          setLoading(true)
          Axios.post('https://api-dev.trustnews.ca/setCReact',{
            ID:props.commentID,
            custID:getExpirUser().custId,
            follow: ReactionObj.follow,
            liked:0,
            disliked:ReactionObj.disliked
          }).then(response =>{
            setLoading(false)
          setReactionObj(old =>{
            let updatedLike = old.likeNum -1
            return {...old,likeNum: updatedLike,liked:0}
          })
          })
        } 
        }else{}
      }
      function ToggleDisLike(){
        if(Loading === false){
        // ReactionObj.like = !ReactionObj.like
        // setLike(!Like)
        if(!parseInt(ReactionObj.disliked)){
      
          if(parseInt(ReactionObj.liked)){
       
            setLoading(true)
            Axios.post('https://api-dev.trustnews.ca/setCReact',{
              ID:props.commentID,
              custID:getExpirUser().custId,
              follow: ReactionObj.follow,
              liked:0,
              disliked:1
            }).then(response =>{
              setLoading(false)
                 setReactionObj(old =>{
              let updatedLike = old.likeNum -1
              let updatedDisLike = old.dislikeNum +1
              return {...old,likeNum: updatedLike,dislikeNum:updatedDisLike,liked:0,disliked:1}
            })
            })
          
          }else{
            // setNumbLike(NumbLike+1)
            
            setLoading(true)
            Axios.post('https://api-dev.trustnews.ca/setCReact',{
              ID:props.commentID,
              custID:getExpirUser().custId,
              follow: ReactionObj.follow,
              liked:ReactionObj.liked,
              disliked:1
            }).then(response =>{
              setLoading(false)
                 setReactionObj(old =>{
              let updatedDisLike = old.dislikeNum +1
              return {...old,dislikeNum: updatedDisLike,disliked:1}
            })
            })
           
          }
        
        }else if(parseInt(ReactionObj.disliked)){
          setLoading(true)
          Axios.post('https://api-dev.trustnews.ca/setCReact',{
            ID:props.commentID,
            custID:getExpirUser().custId,
            follow: ReactionObj.follow,
            liked:ReactionObj.liked,
            disliked:0
          }).then(response =>{
            setLoading(false)
            setReactionObj(old =>{
            let updatedDisLike = old.dislikeNum -1
            return {...old,dislikeNum: updatedDisLike,disliked:0}
          })
          })
          
        }
        }else{}
      }
      function ToggleFollow(){
        if(Loading === false){
        if(!parseInt(ReactionObj.follow)){
          setLoading(true)
          Axios.post('https://api-dev.trustnews.ca/setCReact',{
            ID:props.commentID,
            custID:getExpirUser().custId,
            follow: 1,
            liked:ReactionObj.liked,
            disliked:ReactionObj.disliked
          }).then(response =>{
            setLoading(false)
          setReactionObj(old =>{
            let updatedFollow = old.followNum + 1
            return {...old,followNum: updatedFollow,follow:1}
          })
          })
        }else{
          setLoading(true)
          Axios.post('https://api-dev.trustnews.ca/setCReact',{
            ID:props.commentID,
            custID:getExpirUser().custId,
            follow: 0,
            liked:ReactionObj.liked,
            disliked:ReactionObj.disliked
          }).then(response =>{
            setLoading(false)
          setReactionObj(old =>{
            let updatedFollow = old.followNum - 1
            return {...old,followNum: updatedFollow,follow:0}
          })
          })
        }
      }else{}
    }
    return(
               <div className="comment">
                        <p className="comment-user">{`${props.fName} ${props.mName} ${props.lName}`}</p>
                        <div className="comment-time">{props.date}</div>
                        <p className="comment-cont">{props.comment}</p>
                        {/* <div className="comment-reaction">
                            <img  src={commentsicon} alt='comments'/>  {props.follows}
                            <img  src={likesicon} alt='likes'/>  {props.likes}
                            <img  src={dislikesicon} alt='dislikes'/>  {props.dislikes}
                        </div>  */}
                        <div className="post-reactions">

                            <HandleFollow/>
                            <HandleLike/>
                            <HandleDislike/>

                        </div> 
                </div>
    )
}