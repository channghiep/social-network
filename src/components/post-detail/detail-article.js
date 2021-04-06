import React,{useState, useEffect} from 'react'
// import PostDetail from '../post-detail/posts-detail-card'
import {Link} from 'react-router-dom'
import authorimg from '../assets/author_img.png';
import './detail-article.css'
// import thumbUp from '../assets/thumbsup_icon_blue.svg'
// import follow from '../assets/follow_icon_green.svg'

import thumbUp from '../assets/thumbsup_icon_blue.svg'
import thumbDown from '../assets/thumbsdown_icon_red.svg'
import follow from '../assets/follow_icon_green.svg'

import thumbUpgray from '../assets/thumbsup_icon_gray.svg'
import thumbDowngray from '../assets/thumbsdown_icon_gray.svg'
import followGray from '../assets/follow_icon_gray.svg'
import Axios from 'axios'
import {getExpirUser} from '../../utils/common'
import DetailArtAuthor from './detail-article-author';
// import { useParams } from 'react-router-dom';

export default function DetailArticle (props){
  const{article, avatarURI,bioTeaser,authorID, displayName,userName,likes,dislikes,follows}=props
   
    if(props.article != null && typeof props.article !== 'object'){
        return (
            <div className="articleFull">
              <div className="articleContent" dangerouslySetInnerHTML={{ __html: `<div>${props.article}</div>`}}>
    
              </div>
                <DetailArtAuthor article={props.article} author={props.author}/>
            </div>
           )
    }else if(typeof props.article === 'object'){
      return (
        <div className="articleFull">
          <div className="articleContent" dangerouslySetInnerHTML={{ __html: `<div class='article-detail-style' >${props.article.article}</div>`}}>

          </div>
            <DetailArtAuthor article={props.article} author={props.author} authorID={authorID} postID={props.postID}/>
        </div>
       )
    }
    else {
        return ''
    }
}