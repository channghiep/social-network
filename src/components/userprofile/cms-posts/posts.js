// 

import React, {useEffect, useState} from 'react';
import {
    Link
  } from 'react-router-dom';

import './posts.css';
import Axios from 'axios'
import dropArrow from '../assets/arrow_dropdown_grey.svg';
import {getExpirUser} from '../../../utils/common'

function Posts() {
    // const [stat, setState]=useState(false)
    // const [reren, setReren] = useState(false)
    const [userPosts,setUserPosts] = useState([{}])
    const [topicCatArray, setTopicCatArray] = useState([{
        topicType:'',
        topicTypeID:'',
        categoryType:'',
        categoryTypeID:''
    }])
    const[topics,setTopics] = useState([{
        topicType:'',
        topicTypeID:'',
    }])
    useEffect(()=>{
        const fecthData = async () => {
            const response = await Axios.get(`https://api-dev.trustnews.ca/userPosts?custID=${getExpirUser().custId}`);
            setUserPosts(response.data)

   
        }
        fecthData();
        Axios.get('https://api-dev.trustnews.ca/getArticleDropdowns').then(response =>{
            setArticleDrop(response.data)
            setTopicCatArray(response.data.topicCategory)
            
        })
    
    },[])
 
    const [articleDrop, setArticleDrop] = useState({
        topicCategory:[{}],
        regions:[{}],
        languages: [{}],
        ratings: [{}]
    })

    function DynamicCompose(){
        if(getExpirUser().secClear == 10){
            return(
                <Link style={{textDecoration:'none',color:'#FFF'}} to="/profile/composeadmin">
                <div className='button add-new-post-btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 
                        0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                    </svg>
                    <p>add new post</p>
                </div>
            </Link>
            )
        }else{
            return(
                <Link style={{textDecoration:'none',color:'#FFF'}} to="/profile/compose">
                <div className='button add-new-post-btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 
                        0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                    </svg>
                    <p>add new post</p>
                </div>
            </Link>
            )
        }
    }



    return (
        <div className='cms-posts-body'>
            <div className='cms-posts-buttons'>
                <DynamicCompose/>
                {/* Next feature */}
                {/* <Link style={{textDecoration:'none',color:'#FFF'}} to="/profile/drafts">
                    <div className='button view-drafts-btn'>
                        <p>view drafts</p>
                    </div>
                </Link> */}
            </div>

            <div className='cms-posts-table'>
                <div className='cms-posts-table-grid posts-table-items'>
                    <p>posts</p>
                    <div className='posts-items-category'>
                        <p>category</p>
                        {/* <img src={dropArrow} alt='dropdown arrow'/> */}
                    </div>
                    <p>date posted</p>
                    <p>follows</p>
                    <p>likes</p>
                    <p>dislikes</p>
                    <p>comments</p>
                    {/* <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19.479 2l-7.479 12.543v5.924l-1-.6v-5.324l-7.479-12.543h15.958zm3.521-2h-23l9 15.094v5.906l5 3v-8.906l9-15.094z"/>
                    </svg> */}
                </div>
                {userPosts.map((userPost)=>{
                    
                    const {custID,postID, categoryType,categoryTypeID, topicType, imageLink, headline, active, follows, likes, dislikes, flags, comments, createdOn, topicTypeID, regionTypeID, languageTypeID,contentRatingID} = userPost
                    let topA=[];
                    for(let i=0;i<topicCatArray.length;i++){
                      if(topicCatArray[i].categoryTypeID ==  categoryTypeID){
                          // setTopics([])
                          topA.push({
                              topicTypeID:topicCatArray[i].topicTypeID,
                              topicType:topicCatArray[i].topicType
                          })
                      } 
                    }
                    let date = new Date()
                    let newMonth = date.getMonth() + 1
                    let newDay = date.getDate()
                    if(newMonth < 10){
                        newMonth = '0' + newMonth;
                    }
                    if(newDay <10 ){
                        newDay = '0' + newDay;
                    }
                    date = `${date.getFullYear()}-${newMonth}-${newDay}`
            
                    const handleActivate=()=>{
                        Axios.post('https://api-dev.trustnews.ca/togglePost ',{
                            postID:postID,
                            toggle: 'activate',
                            date: date,
                            reason:'activate'
                        }).then(response=>{
                            console.log(response)
                            window.location.reload(false);
                        })
                         
                    }
                    
                    const handleDeActivate=()=>{
                        Axios.post('https://api-dev.trustnews.ca/togglePost ',{
                            postID:postID,
                            toggle: 'deactivate',
                            date: date,
                            reason:'deactivate'
                        }).then(response=>{
                            console.log(response)
                            window.location.reload(false);
                        })
                        
                    }
                    const StatusOn=()=>{
                        return(
                            <div onClick={handleDeActivate}>
                                <svg className='activated-icon' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 18h12c3.311 0 6-2.689 6-6s-2.689-6-6-6h-12.039c-3.293.021-5.961 2.701-5.961 6 0 3.311 2.688 6 6 6zm0-10h12c2.208 0 4 1.792 4 4s-1.792 4-4 4h-12c-2.208 0-4-1.792-4-4 0-2.199 1.778-3.986 3.974-4h.026zm12 1c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3z"/></svg>
                                
                            </div>
                        )
                    }
                    const StatusOff=()=>{
                        return(
                            <div onClick={handleActivate}>
                                <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18 18h-12c-3.311 0-6-2.689-6-6s2.689-6 6-6h12.039c3.293.021 5.961 2.701 5.961 6 0 3.311-2.688 6-6 6zm0-10h-12c-2.208 0-4 1.792-4 4s1.792 4 4 4h12c2.208 0 4-1.792 4-4 0-2.199-1.778-3.986-3.974-4h-.026zm-12 1c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>
                            </div>
                        )
                    }
                    
                    // console.log(typeof imageLink)
                    const Switch = ()=>{
      
                        // console.log(props.active)
                         if(active ==1){
                          return <StatusOn/>
                        }else {
                         return <StatusOff/>
                        }
                    }
                    return(
                        <div className='cms-posts-table-grid posts-table-post'>
                              <div className="posts-table-img">
                                <img src={imageLink} alt="thumb" height="100%" width="auto"/>
                            </div>
                            {getExpirUser().secClear == 10 ? <Link style={{textDecoration:'none',color:'#FFF'}} to={{
                                pathname:'/profile/editPostAdmin',
                                state:{
                                    postID:postID,
                                    articleDrop: articleDrop,
                                    categoryTypeID:categoryTypeID,
                                    topicTypeID:topicTypeID,
                                    regionTypeID:regionTypeID,
                                    languageTypeID:languageTypeID,
                                    contentRatingID:contentRatingID,
                                    topicCatArray:topicCatArray,
                                    preTop:topA

                                }
                            }}><p className='posts-table-name'>{headline}</p> </Link> : 
                            <Link style={{textDecoration:'none',color:'#FFF'}} to={{
                                pathname:'/profile/editPost',
                                state:{
                                    postID:postID,
                                    articleDrop: articleDrop,
                                    categoryTypeID:categoryTypeID,
                                    topicTypeID:topicTypeID,
                                    regionTypeID:regionTypeID,
                                    languageTypeID:languageTypeID,
                                    contentRatingID:contentRatingID,
                                    topicCatArray:topicCatArray,
                                    preTop:topA

                                }
                            }}><p className='posts-table-name'>{headline}</p> </Link>}
                            <p className='posts-table-category'>{categoryType}</p>
                            <p className='posts-table-date'>{createdOn}</p>

                            <div className='posts-table-follows'>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12
                                12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                            </svg>
                            <p >{follows}</p>
                            </div>
                            <div className='posts-table-likes'>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.43 8.814c.808-3.283 1.252-8.814-2.197-8.814-1.861 0-2.35
                                1.668-2.833 3.329-1.971 6.788-5.314 7.342-8.4 7.743v9.928c3.503 0 5.584.729 8.169 1.842 1.257.541 3.053 1.158 5.336
                                1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.649-1.168-2.446-2.594-2.507-1.21-.051-2.87-.277-3.976-.743zm3.718
                                4.321l-1.394.167s-.609 1.109.141 1.115c0 0 .201.01 1.069-.027 1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172
                                    0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074
                                    1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.238-.965-4.437-1.934-6.958-2.006v-6c3.263-.749 6.329-2.254 8.321-9.113.898-3.092
                                    1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.025 1.455-.051 1.585z"/>
                                </svg>
                                <p >{likes}</p>
                            </div>
                            <div className='posts-table-dislikes'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M19.406 14.442c1.426-.06 2.594-.858 2.594-2.506 0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283
                                0-4.079.617-5.336 1.158-2.585 1.113-4.665 1.842-8.169 1.842v9.928c3.086.401 6.43.956 8.4 7.744.483 1.66.972 3.328 2.833
                                3.328 3.448 0 3.005-5.531 2.196-8.814 1.107-.466 2.767-.692 3.977-.744zm-.207-1.992c-2.749.154-5.06 1.013-6.12 1.556.431
                                1.747.921 3.462.921 5.533 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005
                                    1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062
                                    1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078
                                    1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.874 1.028-.141 1.115l1.394.167c1.075.13 1.105 1.526.05 1.585z"/>
                                </svg>
                                <p>{dislikes}</p>
                            </div>
                            <div className='posts-table-comments'>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272
                                1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007
                                0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084
                                0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm-3.5 10c0 .829-.671 1.5-1.5 1.5-.828 0-1.5-.671-1.5-1.5s.672-1.5
                                    1.5-1.5c.829 0 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm5
                                    0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5z"/>
                                </svg>
                                <p>{comments}</p>
                            </div>
                            <Switch/>
                            {/* <svg width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0
                                .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0
                                .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>
                            </svg> */}
                        </div>
                    )
                })}
              
            </div>

        </div>
    )
}

export default Posts;