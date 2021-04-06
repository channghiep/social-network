import React from 'react'
import ControlledCarousel from './carousel'
import carouselImg from '../assets/carouselImg.jpg'

export default function BreakingCarou(props){
    return(
        <ControlledCarousel category="World" count="5" src={carouselImg} setScroll={props.setScroll}/>   
    )
}