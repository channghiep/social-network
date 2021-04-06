import React, { useEffect } from 'react'
import FeaturedListContainer from './featured-list-container'
import { useParams } from 'react-router-dom'

export default function FeaturedList(props){
    useEffect(()=>{
        window.scrollTo(0,0);
     },[])
// let params = useParams();
// console.log(params.topicTypeID)
// console.log('works')
    return(
        <div>
            <FeaturedListContainer setScroll={props.setScroll}/>
        </div>
    )
}