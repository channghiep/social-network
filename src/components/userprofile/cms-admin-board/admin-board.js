import React ,{useState, useEffect} from 'react';

import './admin-board.css';
import Axios from 'axios'

import AdminFeatureCard from './admin-feature-card';
import AdminBreakingCard from './admin-breaking-card';

export default function AdminBoard() {

    const [featuredList, setFeaturedList] = useState([]);
    const [breakingList, setBreakingList] = useState([]);

    const [featureMessS, setFeatureMessS] = useState(true)
    const [featureMess, setFeatureMess] = useState("no feature requests available")
    const [breakingMessS, setBreakingMessS] = useState(true)
    const [breakingMess, setBreakingMess] = useState("no breaking requests available")

    useEffect(()=>{
        Axios.get('https://api-dev.trustnews.ca/getFeatureRequested').then(response => {
            console.log(response.data[0].msg === "no feature requests available");
            if(response.data[0].msg === "no feature requests available"){
                setFeatureMessS(true)
            }else{
                setFeatureMessS(false)
                setFeaturedList(response.data)
            }
        })
        Axios.get('https://api-dev.trustnews.ca/getBreakingRequested').then(response => {
            console.log(response);
            if(response.data[0].msg === "no breaking requests available"){
                setBreakingMessS(true)
            }else{
                setBreakingMessS(false)
                setBreakingList(response.data)
            }
            
        })


    },[])

    return(

        <div className='admin-board-site'>

            <div className='admin-board-header'>
                {/* <img src={Logo} alt='logo'/> */}
                <h1>ADMINISTRATION BOARD</h1>
            </div>

            <div className='admin-board-body'>

                <div className='admin-section featured-request-section'>
                    <h1>FEATURED REQUESTS</h1>
                    <div className='admin-section-row admin-section-h2'>
                        <p>posts</p>
                        <p>category,<br/>topic</p>
                        <p>date</p>
                        <p>author</p>
                    </div>
                    {featureMessS ? <div>{featureMess}</div> :
                    <div className='admin-section-list'>
                        {featuredList.map(featuredL =>{
                            
                            const {postID, imageLink, headline, createdOn, authorName, category, topic} = featuredL
                            
                            return(
                                <AdminFeatureCard
                                postID = {postID}
                                imageLink = {imageLink}
                                headline = {headline}
                                createdOn = {createdOn}
                                authorName = {authorName}
                                category = {category}
                                topic = {topic}
                            />
                            )
                        })}
                    </div>
                    }
                </div>
                
                <div className='admin-section breaking-request-section'>
                    <h1>BREAKING REQUESTS</h1>
                    <div className='admin-section-row admin-section-h2'>
                    <p>posts</p>
                        <p>category,<br/>topic</p>
                        <p>date</p>
                        <p>author</p>
                    </div>
                    {breakingMessS ? <div>{breakingMess}</div> :
                    <div className='admin-section-list'>
                        {breakingList.map(featuredL =>{
                            
                            const {postID, imageLink, headline, createdOn, authorName, category, topic} = featuredL
                            
                            return(
                                <AdminBreakingCard
                                postID = {postID}
                                imageLink = {imageLink}
                                headline = {headline}
                                createdOn = {createdOn}
                                authorName = {authorName}
                                category = {category}
                                topic = {topic}
                            />
                            )
                        })}
                    </div>
                    }
                </div>
                {/* <div className='admin-section flag-request-section'>
                    <h1>FLAGGED ARTICLES</h1>
                    <div className='admin-section-row admin-section-h2'>
                        <p>posts</p>
                        <p>category</p>
                    </div>
                    <div className='admin-section-list'>
                        <div className='admin-section-row'>
                            <p className='admin-board-post'>
                                Federal governmen orders supplies to give
                                two doses of COVID-19 vaccine when it's ready
                            </p>
                            <p className='admin-board-category'>
                                politics
                            </p>
                            <div className='admin-board-icons'>
                                <div className='admin-board-icon admin-approve-icon'>
                                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                                </div>
                                <div className='admin-board-icon admin-dismiss-icon'>
                                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className='admin-section scraping-request-section'>
                    <h1>SCRAPING ARRTICLES</h1>
                    <div className='admin-section-row admin-section-h2'>
                        <p>posts</p>
                        <p>category</p>
                    </div>
                    <div className='admin-section-list'>
                        <div className='admin-section-row'>
                            <p className='admin-board-post'>
                                Federal governmen orders supplies to give
                                two doses of COVID-19 vaccine when it's ready
                            </p>
                            <p className='admin-board-category'>
                                politics
                            </p>
                            <div className='admin-board-icons'>
                                <div className='admin-board-icon admin-approve-icon'>
                                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                                </div>
                                <div className='admin-board-icon admin-dismiss-icon'>
                                    <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                
            </div>
        
        </div>
        
        )
    };