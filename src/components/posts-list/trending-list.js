import React, { useEffect } from 'react'
import TrendingListContainer from './trending-list-container'
import { useParams } from 'react-router-dom'

export default function TrendingList(props){
useEffect(()=>{
    window.scrollTo(0, 0);
},[])
// let params = useParams();
// console.log(params.topicTypeID)
// console.log('works')
    return(
        <div>
            <TrendingListContainer setScroll={props.setScroll}/>
        </div>
    )
}