import React from 'react'
import PostDetail from '../post-detail/posts-detail-card'

export default function ShowDetail (props){
    const openDe = props.openDe

    if(openDe){
        return <PostDetail 
        authID={props.authID}
        open={openDe} clickClose={props.clickClose}
        articleURL = {props.articleURL}  
        key={props.key}
        author={props.author}
        category={props.category}
        topic={props.topic}
        headline={props.headline}
        postDate={props.postDate}
        teaser={props.teaser}
        comments={props.comments}
        likes={props.likes}
        dislikes={props.dislikes}
        follows= {props.follows}
        postID={props.postID}
        flags={props.flags}
        imageLink={props.imageLink}
        
        article={props.article}
        author1={props.author1}
        // setLikeState={props.setLikeState}
        // likeState={props.likeState}
        />
    }else{
        return ''
    }
}