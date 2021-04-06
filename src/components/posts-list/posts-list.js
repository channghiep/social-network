import React, { useEffect, useState } from 'react'
import PostsListContainer from './posts-list-container'
import { useParams } from 'react-router-dom'

export default function PostsList(props){
// const [param, setParam] = useState(0)

useEffect(()=>{
    window.scrollTo(0,0);
 },[])

let params = useParams();

// useEffect(()=>{
//     setCat(params.categoryTypeID)
// },cat)
// console.log(typeof())
// setParam(params.categoryTypeID)
let catName;
if(params.categoryTypeID ==1){
    catName='politics'
}else if(params.categoryTypeID ==2){
    catName='environment'
}else if(params.categoryTypeID ==3){
    catName='business'
}else if(params.categoryTypeID ==4){
    catName='around the world'
}
    return(
        <div className="postList-body">
            <PostsListContainer categoryTypeID={params.categoryTypeID} categoryName={catName} setScroll={props.setScroll}/>
        </div>
    )
}