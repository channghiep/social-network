import React, { useEffect } from 'react'
import MainstreamListContainer from './mainstream-list-container'
import { useParams } from 'react-router-dom'

export default function MainstreamList(props){
useEffect(()=>{
    window.scrollTo(0, 0);
},[])
// let params = useParams();
// console.log(params.topicTypeID)
// console.log('works')
    return(
        <div>
            <MainstreamListContainer setScroll={props.setScroll}/>
        </div>
    )
}