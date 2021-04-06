import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import PostsListCard from './posts-list-card'
import { Grid } from '@material-ui/core'
import addSide from '../assets/ad_300x600.jpg'
import PostDetail from '../post-detail/posts-detail-card'

export default function MainstreamListContainer(props){
    // const [params, setParams] = useState(props)
    const [posts, setPosts] = useState([])

    
    useEffect(() =>{
        const fecthData = async () => {
            // const response = await Axios.get(`https://api-dev.trustnews.ca/exArticles?categoryName="world"&count=10`);
            // const response = await Axios.get(`https://api-dev.trustnews.ca/trending?count=100`);
            const response = await Axios.get(`https://api-dev.trustnews.ca/allExArticles?count=10000`);
            setPosts(response.data)
        }
        fecthData();
        
    },[])
   
    return(
        <div className="postList-outer" container spacing={1}>
            <div item xs={8}>
                <p className="postList-title">mainstream</p>
                {posts.map(post =>{
                    const { articleURL, source, author, article,postID, categoryTypeID, topicTypeID, fullName, follows, likes, dislikes, flags, comments, headline, imageLink, createdOn, teaser } = post
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
                    // console.log(articleURL.slice(0,15))
                    return(
                        <div>
                   
                        <div key={postID} style={{marginBottom:'10px'}}>

                        <PostsListCard 
                        setScroll={props.setScroll}  
                        key={postID}
                        author={fullName}
                        category={categoryTypeID}
                        topic={topicTypeID}
                        // region={region}
                        // language={language}
                        teaser={teaser}
                        headline={headline}
                        postDate={date}
                        comments={comments}
                        likes={likes}
                        dislikes={dislikes}
                        follows={follows}
                        flags={flags}
                        imageLink={imageLink}
                        postID={postID}
                        // contentRating={contentRating}

                        authorName1= {author}
                        article={article}
                        articleURL={articleURL}
                        source={source}
                        />
                        </div>
                        </div>
                    )
                    
                  
                })}
               
            </div>
            <div style={{textAlign:'center'}} item xs={4} container>
                <div item xs={12} className="ads-sideL">
                    <img  src={addSide} alt="add"/>
                 </div>
                <div item xs={12} className="ads-sideL">
                   <img  src={addSide} alt="add"/>
                 </div>
                 <div item xs={12} className="ads-sideL">
                    <img  src={addSide} alt="add"/>
                 </div>
                 <div item xs={12} className="ads-sideL">
                    <img  src={addSide} alt="add"/>
                </div>
            </div>
        </div>
       
    )


    }


