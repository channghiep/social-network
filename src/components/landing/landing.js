import React, {useState,useEffect} from 'react'
import Grid from '@material-ui/core/Grid'


import { Link } from 'react-router-dom'

//css
import './landing.css'

//component
import LandingCardContainer from './landing-card-container'
import TrendingCardContainer from './trending-card-container'
import BreakingCarou from '../header/breakingCarou'
import LatestCarou from '../header/latestnewCarou'
import FeaturedSlick from './landing-featured'
import Axios from 'axios'
//img
import addSide from '../assets/ad_300x600.jpg'
import add from '../assets/ad_1000x200.jpg'
import Loading from '../../utils/loading'


export default function Landing(props){
    const  [categor, setCategor] = useState([{
        categoryType: "",
        categoryTypeID: ""
    }])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        Axios.get('https://api-dev.trustnews.ca/getArticleDropdowns').then(response=>{
            setTimeout(()=>{
                
                setCategor(response.data.categories)
                
                if(categor.length != 0){setLoading(false)}
            },1200)
            
        })
        
    },[])
    const [detectp, setDetectp] = useState([{}])
    const [p,setp] = useState()
    const [detecte, setDetecte] = useState([{}])
    const [e,sete] = useState()
    const [detectb, setDetectb] = useState([{}])
    const [b,setb] = useState()
    const [detecta, setDetecta] = useState([{}])
    const [a,seta] = useState()
    useEffect(()=>{
        console.log(detectp.length)
        if(detectp.length <4){setp(false)}else{
            setp(true)
        }

    },[detectp])
    useEffect(()=>{
        if(detecte.length <4){sete(false)}else{
            sete(true)
        }
    },[detecte])
    useEffect(()=>{
        if(detectb.length <4){setb(false)}else{
            setb(true)
        }
    },[detectb])
    useEffect(()=>{

        if(detecta.length <4){seta(false)}else{
            seta(true)
        }
    },[detecta])

    const [blankFeature, setBlankFeature]=useState(true)
    const [blankTrending, setBlankTrending]= useState(true)
    function BlankFunction(){
        return(
            <div></div>
        )
    }
    return(
        
        <div>
            {loading ?  <Loading/> :
        <div className="landing">

             
             <div className="breakingNews">
                <BreakingCarou setScroll={props.setScroll}/>
             </div>

            <div className="lastestNews">
                <LatestCarou/>
            </div>

            {/* first chunk */}
            <div className="landingCont">
                  
                <div>
                    <div className="firstPart">
                        <div className="articles-firstPart">
                            <div className="featured"> 
                                <div className="linkCont">
                                    {/* <Link to="/featuredlist"><h1 style={{marginTop:"80px"}} className="subheading size24">featured</h1></Link> */}
                                    {blankFeature ? <BlankFunction/> :<Link to="/featuredlist"><h1 style={{marginTop:"80px"}} className="subheading size24">featured</h1></Link>}
                                    {/* <h1 style={{marginTop:"80px"}} className="subheading size24">featured</h1> */}
                                </div>
                                
                                <FeaturedSlick setBlankFeature={setBlankFeature} setScroll={props.setScroll}/>
                            </div>
                            <div className="trendings">
                            
                                <div className="linkCont">
                                {blankTrending ? <BlankFunction/> :<Link to="/trendinglist"><h1 style={{marginTop:"80px"}} className="subheading size24">trendings</h1></Link>}
                                </div>
                                <div >
                                    <TrendingCardContainer setBlankTrending={setBlankTrending} setScroll={props.setScroll}/>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{textAlign:'center',marginBottom:'50px',marginTop:"50px"}} item xs={12} className="ads-firstPart">
                            <img  src={add} alt="add" className="responsive2"/>
                        </div>
                    </div>

                    
                    {/* //////// */}
                    {/* second chunk */}

                    <div className="secondPart">
                    

                        <div>

                            <div className="secondPart-1">
                                {/* <DynamicPo/> */}
                               {/* /// */}
                               <div  item xs={6} >
                                    <div className="linkCont">
                                        {p ? <Link to="/postsList/1"><h1 className="subheading size24">{categor[0].categoryType}</h1></Link> :<Link to="/mainstream"><h1 className="subheading size24">Main Stream</h1></Link>}
                                    </div>
                                    <LandingCardContainer setDetectp={setDetectp} setDetecte={setDetecte} setDetectb={setDetectb} setDetecta={setDetecta} categoryTypeID={categor[0].categoryTypeID.toString()} count="4" categoryName="politics" setScroll={props.setScroll}/>
                                </div>

                                <div item xs={6} >
                                    <div className="linkCont">
                                    {e ? <Link to="/postsList/1"><h1 className="subheading size24">{categor[1].categoryType}</h1></Link> :<Link to="/mainstream"><h1 className="subheading size24">Main Stream</h1></Link>}
                                    </div>
                                    <LandingCardContainer setDetectp={setDetectp} setDetecte={setDetecte} setDetectb={setDetectb} setDetecta={setDetecta} categoryTypeID='2' count="4" categoryName="Environment" setScroll={props.setScroll}/>
                                </div>
                            </div>

                            <div style={{textAlign:'center',marginTop:"100px",marginBottom:'100px'}} item xs={12} className="ads-2">
                                <img  src={add} alt="add"className="responsive" />
                            </div>

                        </div>

                        <div style={{marginTop:"60px"}} item xs={12} className="ads-side">
                            <img  src={addSide} alt="add" className="responsive"/> 
                        </div>
                                    
                                {/* {array.slice(5,8).map(cat =>{
                                    const {cate} = cat;

                                    return( */}
                            {/* <div>

                            <div className="secondPart-1">
                                       
                                       <div item xs={6} >
                                           <div className="linkCont">
                                           <Link to="/postsList/3"><h1 className="subheading size24">Business</h1></Link>
                                           </div>
                                           <LandingCardContainer categoryTypeID='3' count="4"/>
                                       </div>
                                       <div item xs={6} >
                                           <div className="linkCont">
                                           <Link to="/postsList/4"><h1 className="subheading size24">Around the World</h1></Link>
                                           </div>
                                           <LandingCardContainer categoryTypeID='4' count="4"/>
                                       </div>
                                       <div style={{textAlign:'center'}} item xs={12} className="ads-2">
                                           <img  src={add} alt="add"/>
                                       </div>
                                   </div>     
   
                                   <div style={{marginTop:"75px"}} item xs={12} className="ads-side">
                                    <img  src={addSide} alt="add"/> 
                                    </div>

                            </div>         */}
                                
                        <div>
                            <div className="secondPart-1">
                                <div>
                                        <div className="linkCont">
                                        {b ? <Link to="/postsList/1"><h1 className="subheading size24">{categor[2].categoryType}</h1></Link> :<Link to="/mainstream"><h1 className="subheading size24">Main Stream</h1></Link>}
                                        {/* <Link to="/postsList/3"><h1 className="subheading size24">business</h1></Link> */}
                                        </div>
                                        <LandingCardContainer setDetectp={setDetectp} setDetecte={setDetecte} setDetectb={setDetectb} setDetecta={setDetecta} categoryTypeID='3' count="4" categoryName="Business" setScroll={props.setScroll}/>
                                </div>

                                <div>
                                        <div className="linkCont">
                                        {a ? <Link to="/postsList/1"><h1 className="subheading size24">{categor[3].categoryType}</h1></Link> :<Link to="/mainstream"><h1 className="subheading size24">Main Stream</h1></Link>}
                                        {/* <Link to="/postsList/4"><h1 className="subheading size24">around the world</h1></Link> */}
                                        </div>
                                        <LandingCardContainer setDetectp={setDetectp} setDetecte={setDetecte} setDetectb={setDetectb} setDetecta={setDetecta} categoryTypeID='4' count="4" categoryName="Around the world" setScroll={props.setScroll}/>
                                </div>
                            </div>
                            

                                <div style={{textAlign:'center',marginTop:"100px",marginBottom:'100px'}} item xs={12} className="ads-2">
                                    <img  src={add} alt="add" className="responsive"/>
                                </div>

                        </div>

                        <div style={{marginTop:"60px"}} item xs={12} className="ads-side">
                            <img  src={addSide} alt="add" className="responsive"/> 
                        </div>
                    
                    </div>
      
                </div>

                    {/* <div style={{textAlign:'center'}} container className="secondPart2">
                            
                          
                            <Grid item xs={12} className="ads-side">
                                <img  src={addSide} alt="add"/>
                            </Grid>
                            <Grid item xs={12} className="ads-side">
                                <img  src={addSide} alt="add"/>
                            </Grid>
                    </div>  */}

            </div>
        
            </div>
            }   
        </div>
    )
}
