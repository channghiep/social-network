// import React from 'react'
import headerimg from '../assets/headerimg.jpg'

import thumbUp from '../assets/thumbsup_icon_blue.svg'
import thumbDown from '../assets/thumbsdown_icon_red.svg'
import follow from '../assets/follow_icon_green.svg'

import thumbUpgray from '../assets/thumbsup_icon_gray.svg'
import thumbDowngray from '../assets/thumbsdown_icon_gray.svg'
import followGray from '../assets/follow_icon_gray.svg'

import IframeResizer from 'iframe-resizer-react'


// function PostsListCard(props) {
    
//     return (
        // <div className="post-detail">
        //         <img src={headerimg} alt="headerImg"/>
        //         <h1>{props.headline}</h1>
        //         <p>{props.authorName}</p>
        //         <p>{props.postDate}</p>
        //         <div className="post-reactions">
        //             Comments: {props.numComments} Likes: {props.numLikes} Dislikes: {props.numDislikes}
        //         </div>
        //         <div className="post-cont">
        //             <b>{props.teaser}</b>
        //         </div>
        //         <div className="authorInfo">
        //             <p>{props.authorName}</p>
        //             <p>{props.teaser}</p>
        //         </div>
        //         <div className="comment-section">
        //             <p>Comments</p>
        //              <form>
        //                 <input type="text" id="comment" name="comment"/>
        //                 <button class='comment-button'>post</button>
        //              </form>

        //             <div className="">
        //             </div>     
        //         </div>
        //         {/* <div className="post-rating">
        //             Rated: {props.contentRating}
        //         </div>
        //         <div className="post-meta">
        //             #{props.category}, #{props.topic}, #{props.region}, #{props.language}
        //         </div> */}
          
        // </div>
//     )
// }  

// export default PostsListCard
import React,{useState, useEffect, useRef} from 'react';
import Axios from 'axios'

import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import './post-detail.css'
import DetailArticle from './detail-article';
import DetailComment from './detail-comments';
import { render } from '@testing-library/react';
import { useForm  } from 'react-hook-form'
import {getExpirUser} from '../../utils/common';
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function PostDetail(props) {


// const {register, handleSubmit} = useForm()
// console.log(props.article)
// const {postID} = props.detail
// console.log(postID)
// let ReactionObj={
//   like: true,
//   dislike:false,
//   follow:false,
// let  likeNum=props.likes
// let  dislikeNum=props.dislikes
// let  followNum = props.follows

// }
// console.log(getExpirUser().custId)
// useEffect(()=>{
//   Axios.get(`https://api-dev.trustnews.ca/getAReact?authID=${props.authID}&custID=${getExpirUser().custId}`).then(response=>{
//     console.log(response.data)
//   })
// },)
// const [ReactionObj,setReactionObj]= useState({})


const [ReactionObj,setReactionObj]= useState({
  liked: '',
  disliked:'',
  follow:'',
  likeNum:props.likes,
  dislikeNum:props.dislikes,
  followNum:props.follows
})
const [article, setArticle] = useState({})
const [Loading, setLoading] = useState(false)
// const [scrollImg, setScrollImg] = useState(false);
//     // console.log(props.postID)
let history = useHistory();
console.log('rerender')
    useEffect(()=>{
      
      if(props.open && props.postID !== undefined){
        const fecthData = async () => {
          const response = await Axios.get(`https://api-dev.trustnews.ca/article?postID=${props.postID}`);
          setArticle(response.data)
      }
      
      fecthData();
      }
      
      // window.addEventListener("scroll", () => {
      //   setScrollImg(window.scrollY > '10');
      // });
      // ${getExpirUser().custId}`
      // ${props.postID}
      // console.log(getExpirUser())
      if(getExpirUser() === null){
        history.push('/signin')
      }else{
      if(getExpirUser().custId !== ''){
        Axios.get(`https://api-dev.trustnews.ca/getPReact?postID=${props.postID}&custID=${getExpirUser().custId}`).then(response=>{

          console.log(response.data)
          if(response.data.length === 0){
            setReactionObj(old=>{

              return {...old,liked:0,disliked:0,follow:0}
            })
          }else{

            setReactionObj(old=>{
 
              return {...old,liked:response.data[0].liked,disliked:response.data[0].disliked,follow:response.data[0].follow}
            })
          }
   
        })
      }else{
        console.log('works')
      }
    }
        // setReactionObj(old=>{
        //   // let updatedLike = old.likeNum +1
        //   // let updatedDisLike = old.dislikeNum -1
        //   return {...old,likeNum:props.likes,dislikeNum:props.dislikes,followNum:props.follows}
        // })
      
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

function ToggleLike(){
  if(Loading === false){
    console.log(Loading)
  if(!parseInt(ReactionObj.liked)){

    if(parseInt(ReactionObj.disliked)){
     
      setLoading(true)
      Axios.post('https://api-dev.trustnews.ca/setPReact',{
        ID:props.postID,
        custID:getExpirUser().custId,
        follow: ReactionObj.follow,
        liked:1,
        disliked:0
      }).then(response =>{
          // props.setLikeState(true)
          setLoading(false)
           setReactionObj(old =>{
        let updatedLike = old.likeNum +1
        let updatedDisLike = old.dislikeNum -1
        return {...old,likeNum: updatedLike,dislikeNum:updatedDisLike,liked:1,disliked:0}
      })
      })
      
    }else{
      setLoading(true)
      Axios.post('https://api-dev.trustnews.ca/setPReact',{
        ID:props.postID,
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
    Axios.post('https://api-dev.trustnews.ca/setPReact',{
      ID:props.postID,
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
}else{
  // alert('you are clicking too much')
}
}
function ToggleDisLike(){
  if(Loading === false){
  // ReactionObj.like = !ReactionObj.like
  // setLike(!Like)
  if(!parseInt(ReactionObj.disliked)){

    if(parseInt(ReactionObj.liked)){
 
      setLoading(true)
      Axios.post('https://api-dev.trustnews.ca/setPReact',{
        ID:props.postID,
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

      Axios.post('https://api-dev.trustnews.ca/setPReact',{
        ID:props.postID,
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
    Axios.post('https://api-dev.trustnews.ca/setPReact',{
      ID:props.postID,
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
    Axios.post('https://api-dev.trustnews.ca/setPReact',{
      ID:props.postID,
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
    Axios.post('https://api-dev.trustnews.ca/setPReact',{
      ID:props.postID,
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
}else{

}

}
const ref = useRef(null)
const [messageData, setMessageData] = useState(undefined)
const [cmt, setCmt]= useState('')

// const onResized = (data) => setMessageData(data)

// const onMessage = (data) => {
//   setMessageData(data)
//   ref.current.sendMessage('Hello back from parent page')
// }
const[changeCmtN, setChange] = useState(false)
  // console.log(Like.toString())

  function handleChange(event){
    setCmt(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault();
    // setMessageData(dat)
    // setCmt("")
    let today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    Axios.post('https://api-dev.trustnews.ca/addComment',{
      postID:props.postID,
      custID:getExpirUser().custId,
      comment:cmt,
      commentDate:date
    }).then(response=>{
      console.log(response)
      setChange(!changeCmtN)
      setCmt('')
    })
   
  }
  function refreshPage(){
  
    window.location.reload(false)
  }
 
  if(props.articleURL == undefined){
  return (
    <div>
      
      <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
        
            <IconButton className="detailClose" edge="start" color="inherit" onClick={props.clickClose} aria-label="close">
              <CloseIcon onClick={refreshPage} />
            </IconButton>
            
        <div className="post-detail">
          <img className="header-img" src={headerimg} alt="headerImg"/>
          {/* <h1>Why This Year Is Our Last, Best Chance for Saving the Oceans.</h1> */}
            <h1>{props.headline}</h1>
          <div className='post-info'>
            {/* <p>Aryn Baker</p> */}
            <p>{props.author}</p>
            {/* <p>July 9, 2020 05:40 PM EDT</p> */}
            <p>{props.postDate}</p>
          </div>
          <div className="post-reactions">
            {/* <img src={followsicon} alt='comments'/> {props.follows} */}
            <HandleFollow/>
            <HandleLike/>
            <HandleDislike/>
            {/* <img src={dislikesicon} alt='dislikes'/> {props.dislikes} */}
          </div>
          
          <div className="post-cont">
              {/* <b>For Mick Baron, the giant kelp forests of Tasmania were a playground, a school and a church. The former marine biologist runs a scuba-diving center on the Australian island’s east coast, and rhapsodizes about the wonders of the seaweed’s dense habitats. “Diving in kelp is one of the most amazing underwater experiences you can have,” the 65-year-old says, likening it to flying through the canopy of a terrestrial rain forest. “You won’t find a single empty patch in a kelp forest … From the sponge gardens on the seafloor all the way up to the leaves on the surface, it’s packed with life.” Or rather, it was. In late 2015, a marine heat wave hit eastern Australia, wiping out a third of the Great Barrier Reef, and the kelp forests Baron had been exploring for most of his life. “We were diving in a nice thick forest in December,” says Baron. “By end of March, it looked like an asphalt driveway.” Recurring heat waves have prevented kelp and coral from recovering; marine temperatures on Australia’s east coast are on average 2°C higher than a century ago, an increase scientists attribute to rising greenhouse-gas emissions. “The ocean is deceptively fragile,” says Baron. “Two degrees doesn’t sound like much, but not many species can handle that kind of temperature change.”</b> */}
            {/* {article.map((arti)=>{
              const{article} = arti
              return(
                <b>{article}</b>
              )
            })} */}
            <DetailArticle article={article} author={props.author} postID={props.postID}/>
            
          </div>
            {/* {article.map(arti =>{
              const {article, avatarURI, bio, displayName} = arti
              return(
                <div className="authorInfo">
                  <p><img className="author-img" src={avatarURI} alt='authorImg'/>
                    {props.author}
                  </p>
                  <p>Aryn Baker is an award winning freelance writer, journalist, and author with a passion for telling stories about social justice and environmental issues. She is currently an MFA student in Creative Writing at the University of British Columbia.</p>
                  <p>{bio}</p>
                </div>
              )
            })} */}
            
          
          <div className="comment-section">
            <p>Comments</p>
            <div>
            <form onSubmit={handleSubmit}>
              <textarea type="text" id="comment" name="comment" value={cmt} onChange={handleChange}  required/>
              
              {/* <input className="button post-btn submitButton" type="submit" /> */}
              <button className='comment-button'type="submit" >post</button>
            </form>
            </div>
            
            <div className="comment-list">

              <DetailComment postID={props.postID} changeCmtN={changeCmtN}/>
                {/* <div className="comment">
                    <p className="user">Brian</p>
                    <p className="comment-cont">Disagree</p>
                    <div className="cmt-react">
                      <div className="comment-reaction">
                        <img onClick={ToggleFollow} src={commentsicon} alt='comments'/>  {NumbFollow}
                        <img onClick={ToggleLike} src={likesicon} alt='likes'/>  {NumbLike}
                        <img onClick={ToggleDislike} src={dislikesicon} alt='dislikes'/>  {NumbDislike}
                      </div> 
                      <div className="time">10min</div>
                    </div>
                </div> */}


            </div>
                
          </div>
        </div>
     

      </Dialog>
    </div>
  )}
  else if(props.articleURL.slice(0,17) == 'https://t-news.ca'){
    
      return(
        <div>
      
      <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
        
            <IconButton className="detailClose" edge="start" color="inherit" onClick={props.clickClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            
        <div className="post-detail">
          <img className="header-img" src={headerimg} alt="headerImg"/>
          {/* <h1>Why This Year Is Our Last, Best Chance for Saving the Oceans.</h1> */}
            <h1>{props.headline}</h1>
          <div className='post-info'>
            {/* <p>Aryn Baker</p> */}
            <p>{props.author1}</p>
            {/* <p>July 9, 2020 05:40 PM EDT</p> */}
            <p>{props.postDate}</p>
          </div>
          {/* <div className="post-reactions">
            <img src={commentsicon} alt='comments'/> {props.comments}
            <img src={likesicon} alt='likes'/> {props.likes}
            <img src={dislikesicon} alt='dislikes'/> {props.dislikes}
          </div> */}
          
          <div className="post-cont">
              {/* <b>For Mick Baron, the giant kelp forests of Tasmania were a playground, a school and a church. The former marine biologist runs a scuba-diving center on the Australian island’s east coast, and rhapsodizes about the wonders of the seaweed’s dense habitats. “Diving in kelp is one of the most amazing underwater experiences you can have,” the 65-year-old says, likening it to flying through the canopy of a terrestrial rain forest. “You won’t find a single empty patch in a kelp forest … From the sponge gardens on the seafloor all the way up to the leaves on the surface, it’s packed with life.” Or rather, it was. In late 2015, a marine heat wave hit eastern Australia, wiping out a third of the Great Barrier Reef, and the kelp forests Baron had been exploring for most of his life. “We were diving in a nice thick forest in December,” says Baron. “By end of March, it looked like an asphalt driveway.” Recurring heat waves have prevented kelp and coral from recovering; marine temperatures on Australia’s east coast are on average 2°C higher than a century ago, an increase scientists attribute to rising greenhouse-gas emissions. “The ocean is deceptively fragile,” says Baron. “Two degrees doesn’t sound like much, but not many species can handle that kind of temperature change.”</b> */}
            {/* {article.map((arti)=>{
              const{article} = arti
              return(
                <b>{article}</b>
              )
            })} */}
            <DetailArticle article={props.article} author={props.author1}/>
            
          </div>
            {/* {article.map(arti =>{
              const {article, avatarURI, bio, displayName} = arti
              return(
                <div className="authorInfo">
                  <p><img className="author-img" src={avatarURI} alt='authorImg'/>
                    {props.author}
                  </p>
                  <p>Aryn Baker is an award winning freelance writer, journalist, and author with a passion for telling stories about social justice and environmental issues. She is currently an MFA student in Creative Writing at the University of British Columbia.</p>
                  <p>{bio}</p>
                </div>
              )
            })} */}
            
          
          {/* <div className="comment-section">
            <p>Comments</p>
            <div>
            <form>
              <input type="text" id="comment" name="comment"/>
              <button className='comment-button'>post</button>
            </form>
            </div>
            
            <div className="comment-list">

              <DetailComment postID={props.postID}/>



            </div>
                
          </div> */}
        </div>
     

      </Dialog>
    </div>
      )          
  }
  else{
    return(
      <div>
        <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
        
        <IconButton className="detailClose" edge="start" color="inherit" onClick={props.clickClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <div className="post-detail">
        {/* <img className={`header-img ${scrollImg ? 'inactive-dImg': ''}`} src={headerimg} alt="headerImg"/> */}
        <img className='header-img' src={headerimg} alt="headerImg"/>
        <iframe src={props.articleURL} title="Iframe Example" scrolling='no' ></iframe>
        
        {/* <div style={{ margin: '20px 0' }}>
        <IframeResizer
          log
          inPageLinks
          forwardRef={ref}
          onMessage={onMessage}
          onResized={onResized}
          src='https://cbc.ca'
          width="100%"
          scrolling="no"
        />
      </div> */}
        
        </div>
        </Dialog>
      </div>
    )
  }
}
