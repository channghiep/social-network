import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import ExternalListCard from './exterListCard'
import Loading from '../../../utils/loading'
import '../tnews/tnewsListCard.css';

export default function External(){
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        Axios.get(`https://api-dev.trustnews.ca/allExArticles?count=10000`).then(response =>{
            setTimeout(()=>{
                setLoading(false)
                setPosts(response.data)
            },1200)
        })
        
    },[])
    // console.log(posts)
    return(
        <div className="postList-outer cms-postList-outer" style={{marginLeft: "300px"}} container spacing={1}>
            {loading ? <Loading/>:
            <div className="postList-posts cms-postList-posts" item xs={8}>
                {posts.map(post =>{
                    const {eaID,author, article,postID, categoryTypeID, topicTypeID, fullName, follows, likes, dislikes, flags, comments, headline, imageLink, createdOn ,teaser,source, articleURL} = post
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
                    return(
                        <div className="postList-contain" key={postID} style={{marginBottom:'10px'}}>

                        <ExternalListCard
                        
                        articleURL={articleURL}
                        source={source}   
                        key={postID}
                        author={fullName}
                        category={categoryTypeID}
                        topic={topicTypeID}
                        // region={region}
                        // language={language}
                        teaser= {teaser}
                        headline={headline}
                        postDate={date}
                        comments={comments}
                        likes={likes}
                        dislikes={dislikes}
                        follows={follows}
                        flags={flags}
                        imageLink={imageLink}
                        postID={postID}
                        eaID={eaID}
                        author1={author}
                        article={article}
                        // contentRating={contentRating}
                        />
                        </div>
                    )
                    
                  
                })}
               
            </div>
            }
        </div>
    )
}