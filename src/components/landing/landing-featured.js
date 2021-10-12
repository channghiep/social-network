import React , {useState, useEffect} from  'react'
import Axios from 'axios'
import Slider from 'react-slick'
import featured1 from '../assets/featured1.png'
import featured2 from '../assets/featured2.png'
import './landing-featured.css'
import zIndex from '@material-ui/core/styles/zIndex'
import thumbUp from '../assets/thumbsup_icon_gray.svg'
import thumbDown from '../assets/thumbsdown_icon_gray.svg'
import follow from '../assets/follow_icon_gray.svg'
import UpArrow from '../assets/up-arrow.svg'
import DownArrow from '../assets/down-arrow.svg'
import FeaturedCard from './landing-featured-card'

function NextArrow(props){
    const { className, style, onClick } = props;
    return(
        <div id="nextA"
            onClick={onClick}>
            <img src={UpArrow} alt="up-arrow"></img>
        </div>
    )
}
function PrevArrow(props){
    const { className, style, onClick } = props;
    return(
        <div id="prevA"
            onClick={onClick}>
            <img src={DownArrow} alt="down-arrow"></img>
        </div>
    
    )
}

export default function FeaturedSlick(props){
    const settings = {
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
        };

    const [params, setParams] = useState(props)
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        const fecthData = async () => {
            const response = await Axios.get(`https://api-dev.trustnews.ca/featured?count=10`);
            //const response = await Axios.get(`https://api-dev.trustnews.ca/exArticles?categoryName="canada"&count=10`);
            if(response.data.length === 0){
                props.setBlankFeature(true)
            }else{
                props.setBlankFeature(false)
                setPosts(response.data)
            }  
          }
        fecthData();
    },[])
    return(
        <div>
            <Slider {...settings}>
            {posts.map(post =>{
                const { source,categoryName,articleURL, postID, categoryType, topicType, follows,likes, dislikes, flags, headline, teaser, createdOn, imageLink, comments, fullName } = post
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
                    <FeaturedCard 
                    open={props.open}
                        handleOpen={props.handleOpen}
                        handleClose={props.handleClose}
                    setScroll={props.setScroll}
                    key={postID}
                    source= {source}
                    articleURL={articleURL}
                    categoryName={categoryName}
                    authorName={fullName}
                    category={categoryType}
                    topic={topicType}
                    headline={headline}
                    postDate={date}
                    teaser={teaser}
                    comments={comments}
                    likes={likes}
                    dislikes={dislikes}
                    follows= {follows}
                    postID={postID}
                    flags={flags}
                    imageLink={imageLink}
                    />
                )
            })}
            </Slider>
        </div>
    )
}