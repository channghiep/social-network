import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import {Link,useHistory,Redirect} from 'react-router-dom';
 
import './public-profile.css';

import imgLarge from '../assets/featured1.png';
import thumbUp from '../assets/thumbsup_icon_blue.svg'
import thumbDown from '../assets/thumbsdown_icon_red.svg'
import follow from '../assets/follow_icon_green.svg'
import PostsListCard from '../posts-list/posts-list-card'

export default function PublicProfile(props) {

    const [publicPro, setPublicPro] = useState({
        customer:{
            articles:'',
            avatarURI:'',
            bio:'',
            bioTeaser:'',
            custID:'',
            displayName:'',
            dob:'',
            fName:'',
            mName:'',
            lName:'',
            followers:'',
            likes:'',
            userName:''
        }
    })
    const [userPosts, setUserPosts] = useState([])

    let params = useParams();
    let history = useHistory();
    useEffect(()=>{
        Axios.get(`https://api-dev.trustnews.ca/getCustIDbyUserName?userName='${params.userName}'`).then(response =>{
           let dat = response.data[0].custID;
        //    console.log(dat)
           if(dat){
            //    console.log(dat)
                     Axios.get(`https://api-dev.trustnews.ca/profile?custID=${dat}`).then(response =>{
                         console.log(response.data)
                         setPublicPro(response.data)
                     })
                     Axios.get(`https://api-dev.trustnews.ca/userPosts?custID=${dat}`).then(response =>{
                        console.log(response.data)
                        setUserPosts(response.data)
                    })
           }else{
               console.log('here')
                history.push('/error')
            //    return(

            //        <Redirect to='/user/error'/>
            //    )
           
           }
        })

   
    },[])
    // const {}
    return(

        <div className='public-profile-body'>
            <div className='profile-resume'>
                <div className='profile-img'>
                    <img src={imgLarge} alt='profile large'/>
                </div>
                <h1 className='profile-name'>{publicPro.customer.fName} {publicPro.customer.mName} {publicPro.customer.lName}</h1>
                {/* <div className='button follow-user-btn' style={{cursor:"pointer"}}>
                        <p>follow</p>
                </div> */}
                <div className='profile-statistic'>
                    <div className='profile-followers'>
                        <p>followers</p><p className='result-statistic'>{publicPro.customer.followers}</p>
                    </div>
                    <div className='profile-articles'>
                        <p>articles</p><p className='result-statistic'>{publicPro.customer.articles}</p>
                    </div>
                    <div className='profile-likes'>
                        <p>likes</p><p className='result-statistic'>{publicPro.customer.likes}</p>
                    </div>
                </div>
                <div className='profile-bio' dangerouslySetInnerHTML={{__html: publicPro.customer.bio}}>
                    
                </div>
            </div>

            <div className="postList-posts">
                <div className="linkCont">
                    {/* <Link to="/"> */}
                        <p style={{marginTop:"80px"}} className="postList-title">articles</p>
                        {/* </Link> */}
                </div>
                <div className='landingCardCont'>
                <div className='landing-card'>
                {userPosts.map((userPost)=> {
                    const {active,categoryType,categoryTypeID,comments,contentRatingID,createdOn,custID,dislikes,flags,follows,headline,imageLink,languageTypeID,likes,postID,regionTypeID,topicType,topicTypeID,teaser} = userPost
                    
                    
                        return(
                            // <div style={{cursor:"pointer"}} className="posts list">
                            //     <div item xs={3} className="post-img">
                            //         <img src={imageLink} alt="thumb" height="160px" width="160px"/>
                            //     </div>
                    
                            //     <div className="post-headingL">
                            //         <h1 className="heading size24">{headline}</h1>
                            //         <div className="post-heading-top">
                            //             <p className="post-date">{createdOn}</p>
                            //             {/* <p className="post-teaser">{teaser}</p> */}
                            //             <div className="post-reaction size18">
                            //             <img src={follow} alt="follows"/><p className="number-follows">{follows}</p>
                            //             <img src={thumbUp} alt="like"/><p className="number-likes">{likes}</p>
                            //             <img src={thumbDown} alt="dislike"/><p className="number-dislikes">{dislikes}</p>
                            //         </div>
                            //         </div>
                            //     </div >
                                
                            // </div>
                            <PostsListCard
                            params={params.userName}
                            setScroll={props.setScroll}
                            // articleURL={articleURL}
                            // source={source}   
                            key={postID}
                            author={`${publicPro.customer.fName} ${publicPro.customer.mName} ${publicPro.customer.lName}`}
                            category={categoryTypeID}
                            topic={topicTypeID}
                            teaser= {teaser}
                            headline={headline}
                            postDate={createdOn}
                            comments={comments}
                            likes={likes}
                            dislikes={dislikes}
                            follows={follows}
                            flags={flags}
                            imageLink={imageLink}
                            postID={postID}
    
                            // author1={author}
                            // article={article}
                            />
                            )
              
                    
                
                })}
                
                </div>
                        
                        </div>
                
            </div>
            
        </div>

    )
};