import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import LandingCard from './landing-card'

import './landing-card-container.css'


export default function TrendingCardContainer(props){
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        const fecthData = async () => {
            // const response = await Axios.get(`https://api-dev.trustnews.ca/exArticles?categoryName="world"&count=5`);
            const response = await Axios.get(`https://api-dev.trustnews.ca/trending?count=5`)
            if(response.data.length === 0){
                props.setBlankTrending(true)
              }else{
                props.setBlankTrending(false)
                setPosts(response.data)
              }  
            // setPosts(response.data)
        }
        fecthData();
        
    },[])
    console.log('trending')
    // useEffect(()=>{
       
    // },[open])
    // let trendPosts = posts.slice(0,5)
    return(
        <div>
   
            
            {posts.map((post) => {
            const { articleURL, source,fullName, author, article,postID, categoryType, topicType, follows,likes, dislikes, flags, headline, teaser, createdOn, imageLink, comments, fName, mName, lName} = post
            // console.log(post)
            // setPostId(post)
                let date = new Date(`${createdOn}`)
                let newMonth = date.getMonth() + 1
                let newDay = date.getDate()
                if(newMonth < 10){
                    newMonth = '0' + newMonth;
                }
                if(newDay <10 ){
                    newDay = '0' + newDay;
                }
                date = `${date.getFullYear()}-${newMonth}-${newDay}`
            return (
                <div>
                <div>
                {/* <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton> */}
              
                 
                </div>
                <div className="landingCardCont">
                    
                    <LandingCard 
                        setScroll={props.setScroll}
                        // key={postID}
                        // authorName={`${fName}`+` ${mName} `+`${lName}`}
                        // category={categoryType}
                        // topic={topicType}
                        // headline={headline}
                        // postDate={date}
                        // teaser={teaser}
                        // comments={comments}
                        // likes={likes}
                        // dislikes={dislikes}
                        // follows= {follows}
                        // postID={postID}
                        // flags={flags}
                        // imageLink={imageLink}
                        open={props.open}
                        handleOpen={props.handleOpen}
                        handleClose={props.handleClose}
                        
                        articleURL={articleURL}
                        source={source}
                        key={postID}
                        authorName={fullName}
                        category={categoryType}
                        topic={topicType}
                        headline={headline}
                        postDate={date}
                        teaser={teaser}
                        comments={comments}
                        likes={likes}
                        dislikes={dislikes}
                        follows= {follows}
                        postID={postID}
                        flags={flags}
                        imageLink={imageLink}

                        authorName1= {author}
                        article={article}
                    />
                </div>
                </div>
            )
            
        })}
       
        </div>
        
    )
    }
