import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn(props){
    return(
        <div style={{cursor:"pointer"}} onClick={props.clickOpen}>
            Signin
        </div>
    )
}