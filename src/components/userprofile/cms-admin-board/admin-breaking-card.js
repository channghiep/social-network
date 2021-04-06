import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminBreakingCard(props){
    return(
       
        <div key={props.postID} className='admin-section-row'>
          <img className='admin-board-img' src={props.imageLink} alt='article-img'/>
            <Link
            to={{
                pathname:'/profile/processing-breaking',
                state:{
                    postID: props.postID,
                    category: props.category,
                    topic: props.topic
                }
            }}
          
            >
                <p className='admin-board-post'>
                    {props.headline}
                </p>
            </Link>
           
            
            <div className='admin-board-cattop'>
                <p className='admin-board-category'>
                    {props.category}
                </p>
                <p className='admin-board-topic'>
                    {props.topic}
                </p>
            </div>
            
            <p className='admin-board-date'>
                {props.createdOn}
            </p>

            <p className='admin-board-author'>
                {props.authorName}
            </p>
            {/* <div className='admin-board-icons'>
                <div className='admin-board-icon admin-approve-icon'>
                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                </div>
                <div className='admin-board-icon admin-dismiss-icon'>
                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
                </div>
            </div> */}
        </div>    

    
    )
}