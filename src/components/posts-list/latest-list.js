import React, { useEffect } from 'react'
import LatestListContainer from './latest-list-container'
import { useParams } from 'react-router-dom'

export default function LatestList(props){
useEffect(()=>{
    window.scrollTo(0, 0);
},[])
// let params = useParams();
// console.log(params.topicTypeID)
// console.log('works')
    return(
        <div>
            <LatestListContainer setScroll={props.setScroll}/>
        </div>
    )
}