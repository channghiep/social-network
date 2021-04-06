import React, { useEffect } from 'react'
import SubPostsListContainer from './subPost-list-container'
import { useParams } from 'react-router-dom'

export default function SubPostsList(props){
useEffect(()=>{
    window.scrollTo(0, 0);
},[])
let params = useParams();

console.log(params.topicTypeID)

let topName;
if(params.topicTypeID ==1){
    topName='World'
}else if(params.topicTypeID ==2){
    topName='National'
}else if(params.topicTypeID ==3){
    topName='Global'
}else if(params.topicTypeID ==4){
    topName='Mekong Delta'
}else if(params.topicTypeID ==5){
    topName='Business News'
}else if(params.topicTypeID ==6){
    topName='Exchange Rate'
}else if(params.topicTypeID ==7){
    topName='Stock Market'
}else if(params.topicTypeID ==8){
    topName='Travel'
}else if(params.topicTypeID ==9){
    topName='Nature'
}
console.log('works')
    return(
        <div>
            <SubPostsListContainer topName={topName} topicTypeID={params.topicTypeID} setScroll={props.setScroll}/>
        </div>
    )
}