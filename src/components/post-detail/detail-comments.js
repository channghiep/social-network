import React ,{useState, useEffect} from 'react'
import Axios from 'axios'
import commentsicon from '../assets/follow_icon_gray.svg';
import likesicon from '../assets/thumbsup_icon_gray.svg';
import dislikesicon from '../assets/thumbsdown_icon_gray.svg';
import CommentCard from './detail-comment-card'

export default function DetailComment(props){
    const [comments, setComments] = useState([])
    useEffect(()=>{
        if(props.postID != null){
            const fecthData = async () => {
                const response = await Axios.get(`https://api-dev.trustnews.ca/comments?postID=${props.postID}`);
                setComments(response.data)
            }
            fecthData();
        }
    },[])
    function updateCmt(){
        const fecthData = async () => {
            const response = await Axios.get(`https://api-dev.trustnews.ca/comments?postID=${props.postID}`);
            setComments(response.data)
        }
        fecthData();
    }
    useEffect(()=>{
        updateCmt()
    },[props.changeCmtN])
  

    return(
        <div>
            {comments.map((cmt)=>{
                const {fName, mName, lName, comment, follows, likes, dislikes, flag,commentDate,commentID, postID} = cmt
                let date = new Date(`${commentDate}`)
                    let newMonth = date.getMonth() + 1
                    let newDay = date.getDate()
                    if(newMonth < 10){
                        newMonth = '0' + newMonth;
                    }
                    if(newDay <10 ){
                        newDay = '0' + newDay;
                    }
                    date = `${date.getFullYear()}-${newMonth}-${newDay}`
                return(
                    <CommentCard
                        
                        comment= {comment}
                        fName = {fName}
                        mName = {mName}
                        lName = {lName}
                        likes = {likes}
                        dislikes={dislikes}
                        follows={follows}
                        flas = {flag}
                        postID={postID}
                        commentID={commentID}
                    />    
                )
             
            })}
            
        </div>
        
    )
}