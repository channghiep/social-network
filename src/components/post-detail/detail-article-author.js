import React,{useState, useEffect} from 'react'
import thumbUp from '../assets/thumbsup_icon_blue.svg'
import thumbDown from '../assets/thumbsdown_icon_red.svg'
import follow from '../assets/follow_icon_green.svg'

import thumbUpgray from '../assets/thumbsup_icon_gray.svg'
import thumbDowngray from '../assets/thumbsdown_icon_gray.svg'
import followGray from '../assets/follow_icon_gray.svg'
import Axios from 'axios'
import {getExpirUser} from '../../utils/common'
import {Link} from 'react-router-dom'
import authorimg from '../assets/author_img.png';
import { number } from 'prop-types'

export default function DetailArtAuthor(props){
    // console.log(props.article)

    // useEffect(()=>{
    //     setReactionObj(old=>{
      
    //         return {...old,liked:'',disliked:'',follow:'', likeNum:authorIDstat.likes,
    //         dislikeNum:authorIDstat.dislikes,
    //         followNum:authorIDstat.follows}
    //     })
    // })
    
    const[authorIDstat,setAuthorIDstat]=useState({
        article:'',
        authorID:'',
        avatarURL:'',
        bioTeaser:'',
        dislikes:'',
        displayName:'',
        follows:'',
        likes:'',
        userName:''
    })
    useEffect(()=>{
        setAuthorIDstat(props.article)
    })
    const [Loading, setLoading]=useState(false)

    const [ReactionObj,setReactionObj]= useState({
        liked: '',
        disliked:'',
        follow:'',
        likeNum:'',
        dislikeNum:'',
        followNum:''
      })
      console.log(authorIDstat)

      useEffect(()=>{
        if(getExpirUser().custId !== ''){
        // const timer = setTimeout(() => {
            const timer = setTimeout(() => {
            Axios.get(`https://api-dev.trustnews.ca/getAuthorCombined?authorID=${authorIDstat.authorID}&custID=${getExpirUser().custId}`).then(response=>{
  
                console.log(response.data)
                if(response.data.length === 0){
                  setReactionObj(old=>{
      
                    return {...old,liked:0,disliked:0,follow:0,  likeNum:authorIDstat.likes,
                        dislikeNum:authorIDstat.dislikes,
                        followNum:authorIDstat.follows}
                    // return {...old,liked:0,disliked:0,follow:0, likeNum:response.data[0].likes,
                    // dislikeNum:response.data[0].dislikes,
                    // followNum:response.data[0].follows}
                  })
                }else{
      
                  setReactionObj(old=>{
       
                    return {...old,liked:response.data[0].usrLikes,disliked:response.data[0].usrDislikes,follow:response.data[0].usrFollows,likeNum:response.data[0].likes,
                        dislikeNum:response.data[0].dislikes,
                        followNum:response.data[0].follows}
                  })
                }
              })
            },0);
            return () => clearTimeout(timer);
            }
       
        
       
        
      },[authorIDstat])
      console.log(ReactionObj)
      function HandleLike(){
        if(parseInt(ReactionObj.liked)){
            
          return(
            <div className='div-reactions div-likes'>
               <img onClick={ToggleLike} src={thumbUp} alt='likes'/> {ReactionObj.likeNum}
            </div>
          )
        }else{
            if(ReactionObj.likeNum == ''){
                return(
                    <div className='div-reactions div-unclick'>
                      <img onClick={ToggleLike} src={thumbUpgray} alt='likes' /> {authorIDstat.likes}
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
      }
      function HandleFollow(){
        if(parseInt(ReactionObj.follow)){
          return(
            <div className='div-reactions div-follows'>
               <img onClick={ToggleFollow} src={follow} alt='follows'/> {ReactionObj.followNum}
            </div>
          )
        }else{
            if(ReactionObj.followNum == ''){  
                return(
                    <div className='div-reactions div-unclick'>
                    <img onClick={ToggleFollow} src={followGray} alt='follows'/> {authorIDstat.follows}
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
      }
      function HandleDislike(){
        if(parseInt(ReactionObj.disliked)){
          return(
            <div className='div-reactions div-dislikes'>
               <img onClick={ToggleDisLike} src={thumbDown} alt='dislikes'/> {ReactionObj.dislikeNum}
            </div>
          )
        }else{
            if(ReactionObj.dislikeNum == ''){  
                return(
                    <div className='div-reactions div-unclick'>
                    <img onClick={ToggleDisLike} src={thumbDowngray} alt='dislikes'/> {authorIDstat.dislikes}
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
      }
      useEffect(()=>{
        // console.log(ReactionObj)
      
      
      
      },[ReactionObj])
      function ToggleLike(){
        if(Loading === false){
        if(!parseInt(ReactionObj.liked)){
      
          if(parseInt(ReactionObj.disliked)){
           
            setLoading(true)
            Axios.post('https://api-dev.trustnews.ca/setAReact',{
              ID:authorIDstat.authorID,
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
            // console.log('liked with no dis')
            Axios.post('https://api-dev.trustnews.ca/setAReact',{
              ID:authorIDstat.authorID,
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
      
        //   console.log('liked with like')
          setLoading(true)
          Axios.post('https://api-dev.trustnews.ca/setAReact',{
            ID:authorIDstat.authorID,
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
      
            Axios.post('https://api-dev.trustnews.ca/setAReact',{
              ID:authorIDstat.authorID,
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
            Axios.post('https://api-dev.trustnews.ca/setAReact',{
              ID:authorIDstat.authorID,
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
          Axios.post('https://api-dev.trustnews.ca/setAReact',{
            ID:authorIDstat.authorID,
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
          Axios.post('https://api-dev.trustnews.ca/setAReact',{
            ID:authorIDstat.authorID,
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
          Axios.post('https://api-dev.trustnews.ca/setAReact',{
            ID:authorIDstat.authorID,
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



      function HandleAuthorClick(){
        if(props.params !== null || props.params !== undefined || props.params !== ''){
          return(
            <div className="author-name">author <Link to={`/${props.article.userName}`}><p>{props.author}</p></Link></div>
          )
        }else{
   
          return(
            <div className="author-name">author <p>{props.author}</p></div>
          )
        }
      }
    return(
        <div className="authorInfo">
        <div className="authorGrid">
          <img className="author-img" src={authorimg} alt='authorImg'/>
          {/* <div className="author-name">author <Link to={`/${arti.userName}`}><p>{props.author}</p></Link></div> */}
          <HandleAuthorClick/>
          <div className="author-reactions">
            {/* <div className='div-reactions div-follows'>
              <img src={follow} alt='follows'/> 1
            </div>
            <div className='div-reactions div-likes'>
              <img src={thumbUp} alt='likes'/> 2
            </div> */}
            <HandleFollow/>
            <HandleLike/>
            <HandleDislike/>
          </div>
          <p>{props.article.bioTeaser}</p>
        </div>
      </div>
    )
}