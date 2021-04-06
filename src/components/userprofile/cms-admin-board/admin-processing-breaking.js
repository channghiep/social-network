import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {useLocation} from 'react-router-dom'
import {
    Link
} from 'react-router-dom';
import './admin-processing.css';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function AdminProcessingBreaking(props){
    let data = useLocation();
    const [post, setPost] = useState({
        active:'',
        article:'',
        breakingRequested:'',
        contentRatingID:'',
        custID:'',
        featureRequested:'',
        headline:'',
        languageTypeID:'',
        regionTypeID:'',
        releaseDate:'',
        statusID:'',
        teaser:'',
        topicTypeID:'',
        imageLink:''
    })
    useEffect(()=>{
        Axios.get(`https://api-dev.trustnews.ca/editArticle?postID=${data.state.postID}`).then(response =>{
            setPost(response.data[0])
        })
    },[])
    
    function ApproveBreaking(){
        Axios.get(`https://api-dev.trustnews.ca/approveBreaking?postID=${data.state.postID}`).then(response =>{
            console.log(response)
        })
    }
    function DenyBreaking(){
        Axios.get(`https://api-dev.trustnews.ca/denyBreaking?postID=${data.state.postID}`).then(response =>{
            console.log(response)
        })
    }
    return(
        <div className='admin-processing-page'>
            <Link to="/profile/administration">
                <svg className='return-to-posts' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
            </Link>
            <h1 className='admin-processing-header'>{post.headline}</h1>
            <div className='admin-processing-info'>
                <p className='admin-processing-cattop'>{data.state.category},{data.state.topic}</p>
                {/* <p className='admin-processing-date'>{post.create}</p> */}
            </div>
            {/* <p className='admin-processing-author'>author name</p> */}
            <div className='admin-processing-decise'>
            <div onClick={ApproveBreaking} className='admin-processing-icon admin-approve'>
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
            </div>
            <div onClick={DenyBreaking} className='admin-processing-icon admin-dismiss'>
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
            </div>
            </div>
            <p className='admin-processing-text' dangerouslySetInnerHTML={{ __html: `<div class='article-detail-style' >${post.article}</div>`}}/>
            
        </div>
        
    )
}