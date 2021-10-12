
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import LandingCard from './landing-card'

import './landing-card-container.css'


export default function LandingCardContainer(props){
    const [posts, setPosts] = useState([])
    const [externalPosts, setExternal] = useState([])
    const [totalPosts, setTotal] = useState([])

    
    useEffect(()=>{
        
        const fecthData = async () => {
            
            const response = await Axios.get(`https://api-dev.trustnews.ca/category?categoryTypeID=${props.categoryTypeID}&count=${props.count}`);      
                setTotal(response.data)
                if(props.categoryTypeID == 1){
                    if(response.data.length < 4){
                        Axios.get('https://api-dev.trustnews.ca/allExArticles?count=4').then(response=>{
                            setTotal(response.data)
                        })
                    }
                    props.setDetectp(response.data)
                }else if(props.categoryTypeID == 2){
                    if(response.data.length < 4){
                        Axios.get('https://api-dev.trustnews.ca/allExArticles?count=8').then(response=>{
                            let array1=[];
                            for(let i=4;i<response.data.length;i++){
                                array1.push(response.data[i])
                            }
                            setTotal(array1)
                        })
                    }
                    props.setDetecte(response.data)
                }else if(props.categoryTypeID == 3){
                    if(response.data.length < 4){
                        Axios.get('https://api-dev.trustnews.ca/allExArticles?count=12').then(response=>{
                            let array2=[];
                            for(let i=8;i<response.data.length;i++){
                                array2.push(response.data[i])
                            }
                            setTotal(array2)
                        })
                    }
                    props.setDetectb(response.data)
                }else if(props.categoryTypeID == 4){
                    if(response.data.length < 4){
                        Axios.get('https://api-dev.trustnews.ca/allExArticles?count=16').then(response=>{
                            let array3=[];
                            for(let i=12;i<response.data.length;i++){
                                array3.push(response.data[i])
                            }
                            setTotal(array3)
                        })
                    }
                    props.setDetecta(response.data)
                }               
        }       
        fecthData();       
    },[])
    

    return(
        <div className="postList-posts">
            {totalPosts.map((post) => {
            const {custID, article,author,postID, categoryType, topicType, follows,likes, dislikes, flags, headline, teaser, createdOn, imageLink, comments, fullName,source, articleURL} = post
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
                    <div className="landingCardCont">    
                        <LandingCard 
                            custID={custID}
                            setScroll={props.setScroll}
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
