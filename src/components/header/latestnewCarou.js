import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid'
import SlickCarou from './slickCarou'
import './latestCarou.css'
import GlobeIcon from '../assets/globe-icon.svg'


export default function LatestCarou(){
    const [blank, setBlank]= useState(true)
    function BlankFunction(){
        return(
            <div>
                <SlickCarou setBlank={setBlank} category="World" count="5"/>   
            </div>
        )
    }

    return(
        <div>
            {blank ?  <BlankFunction/> : <div className="latest-container" container>
            
            <div>
            <div item xs={3} className="latest">
                <img src={GlobeIcon} alt="globe-icon"/>
                <h1 className="subheading latestnews size48">latest news</h1>   
            </div>

            <div className="latest-content" item xs={9}>
                <SlickCarou setBlank={setBlank} category="World" count="5"/>   
            </div>
            </div>
            
        </div>
        
        }
        </div>
        
    )
}