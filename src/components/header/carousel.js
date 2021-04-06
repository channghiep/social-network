import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Axios from 'axios'
import './carousel.css'
import thumbUp from '../assets/thumbsup_icon_gray.svg'
import thumbDown from '../assets/thumbsdown_icon_gray.svg'
import follow from '../assets/follow_icon_gray.svg'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import PostDetail from '../post-detail/posts-detail-card'
import CarouselItem from './carouselItem'
import Slider from 'react-slick'




export default function ControlledCarousel(props){
    const [params, setParams] = useState(props)
    // const [index, setIndex] = useState(0)
    // const handleSelect = (selectedIndex, e) =>{
    //     setIndex(selectedIndex)
    // }
    const [posts, setPosts] = useState([])
    // const [open, setOpen] = useState(false)

   
    // const handleOnClick = ()=>{
    //     setOpen(true);

    // }
    // const handleClose = () => {
    //     setOpen(false);
    //   };
    const blankArray=[{
        // setScroll:props.setScroll
        // key={postID}
        author:``,
        category:'',
        topic:'',
        headline:'',
        postDate:'',
        teaser:'',
        comments:'',
        likes:'',
        dislikes:'',
        follows:'',
        flags:'',
        postID:'',
        
        source:'',
        article:'',
        author1:'',
  
    }]
    useEffect(() =>{
        const fecthData = async () => {
            // const response = await Axios.get(`http://localhost:3000/articles?category="${params.category}"&count=${params.count}`);
            // const response = await Axios.get(`https://api-dev.trustnews.ca/tnews?category="around the world"&count=10`);
            await Axios.get(`https://api-dev.trustnews.ca/breaking`).then(response=>{
                // console.log(response.data)
                if(response.data.length === 0 ){
                    // console.log('ho')
                    setPosts(blankArray)
                    
                }
                else{
                    // console.log('hoy')
                    setPosts(response.data)
                }
            })
            
         
            
        }
        fecthData();
    },[])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false
      };
    // console.log(posts)
    return (
        <div className="carousel">
           <Slider {...settings}>
        {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
            {posts.map(post =>{
                // const { postID,authorName,category,headline, numComments, postDate, numLikes, numDislikes,contentRating,teaser,language,topic,region } = post
                const { source, article, author,articleURL,postID,categoryType, topicType, imageLink, headline, fName,mName,lName, teaser, follows, likes, dislikes, flags, comments, createdOn} = post
                let date = new Date(`${createdOn}`)
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
                    // <Carousel.Item>
                    <CarouselItem
                    setScroll={props.setScroll}
                    key={postID}
                    author={`${fName}`+` ${mName} `+`${lName}`}
                    category={categoryType}
                    topic={topicType}
                    headline={headline}
                    postDate={date}
                    teaser={teaser}
                    comments={comments}
                    likes={likes}
                    dislikes={dislikes}
                    follows={follows}
                    flags={flags}
                    postID={postID}
                    
                    source={source}
                    article={article}
                    author1={author}
                    articleURL={articleURL}
                    />
                )
            })}
        </Slider> 
        {/* </Carousel> */}
        </div>
      );
}
