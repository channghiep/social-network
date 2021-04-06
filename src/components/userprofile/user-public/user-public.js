import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import {
    useHistory
  } from 'react-router-dom';


export default function UserPublic(){
    let params = useParams();
    let history = useHistory();
console.log(params.userName)

    useEffect(()=>{
        Axios.get(`https://api-dev.trustnews.ca/getCustIDbyUserName?userName='${params.userName}'`).then(response =>{
           let dat = response.data[0].custID;
        //    console.log(dat)
           if(dat){
            //    console.log(dat)
                     Axios.get(`https://api-dev.trustnews.ca/profile?custID=${dat}`).then(response =>{
                         console.log(response)
                     })
                     Axios.get(`https://api-dev.trustnews.ca/userPosts?custID=${dat}`).then(response =>{
                        console.log(response)
                    })
           }else{
            history.push('/error')
           }
        })

   
    },[])


    return(
        <div>Works</div>
    )
}