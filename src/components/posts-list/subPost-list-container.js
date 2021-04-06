import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import PostsListCard from './posts-list-card'
import { Grid } from '@material-ui/core'
import addSide from '../assets/ad_300x600.jpg'
import PostDetail from '../post-detail/posts-detail-card'

export default function SubPostsListContainer(props){
    // const [params, setParams] = useState(props)
    const [posts, setPosts] = useState([])

    
    useEffect(() =>{
        const fecthData = async () => {
            const response = await Axios.get(`https://api-dev.trustnews.ca/topic?topicTypeID=${props.topicTypeID}&count=100`);
            setPosts(response.data)
        }
        fecthData();
        
    },[props.topicTydiv])
   
    return(
        <div className="postList-outer" container spacing={1}>
            <div className="postList-posts" item xs={8}>
                <p className="postList-title">{props.topName}</p>
                {posts.map(post =>{
                    const { postID, categoryTypeID, topicTypeID, fullName, follows, likes, dislikes, flags, comments, headline, imageLink, createdOn,teaser } = post
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

        // const posts = this.state.posts.map((post) => {
        //     return <PostsListCard 
        //                 key={post.postID}
        //                 authorName={post.authorName}
        //                 category={post.category}
        //                 topic={post.topic}
        //                 region={post.region}
        //                 language={post.language}
        //                 headline={post.headline}
        //                 postDate={post.postDate}
        //                 teaser={post.teaser}
        //                 numComments={post.numComments}
        //                 numLikes={post.numLikes}
        //                 numDislikes={post.numDislikes}
        //                 contentRating={post.contentRating}
        //             />
        // })

        // return(
        //     <div>
        //         {posts}
        //     </div>
        // )
    }


