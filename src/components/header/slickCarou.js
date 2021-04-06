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
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
      const [params, setParams] = useState(props)
      const [posts, setPosts] = useState([])

  
      useEffect(() =>{
          const fecthData = async () => {
            //   const response = await Axios.get(`https://api-dev.trustnews.ca/exArticles?categoryName="canada"&count=100`);
         await Axios.get(`https://api-dev.trustnews.ca/ticker`).then(response =>{
            // props.setBlank(false)
            // setPosts(blankA)

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
                // let date = new Date(`${createdOn}`)
                // let newMonth = date.getMonth() + 1
                // let newDay = date.getDate()
                // if(newMonth < 10){
                //     newMonth = '0' + newMonth;
                // }
                // if(newDay <10 ){
                //     newDay = '0' + newDay;
                // }
                // date = `${date.getFullYear()}-${newMonth}-${newDay}`
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