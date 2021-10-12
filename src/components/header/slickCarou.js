import React , {useState, useEffect} from  'react'
import Axios from 'axios'
import Slider from 'react-slick'
import './slickCarou.css'

export default function SlickCarou(props){
    const settings = {
        initialSlide:0,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 4000,
        swipeToSlide: true,
        // autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                speed: 4000,
                autoplaySpeed: 4000,
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                speed: 4000,
                autoplaySpeed: 4000,
              }
            }
          ]
      };
      const [params, setParams] = useState(props)
      const [posts, setPosts] = useState([])

  
      useEffect(() =>{
          const fecthData = async () => {
         await Axios.get(`https://api-dev.trustnews.ca/ticker`).then(response =>{
           if(response.data.length === 0){
             props.setBlank(true)
           }else{
             props.setBlank(false)
             setPosts(response.data)
           }
            })
              
          }
          fecthData();
      },[])
    return(
        <div className="slickSlider">
            <Slider {...settings}>
            {posts.map(post =>{
                const { author,headline, createdOn} = post
                return(
                    <div className="latestCont">
                        <h1 className="heading size24">{headline.slice(0,60)}...</h1>
                        <div className="latestCont-p" >
                            <p className="subheading size20">{author}</p>
                            <p className="size20">{createdOn}</p>
                        </div>
                    </div>
                )
            })}
            </Slider>

        </div>
    )
}