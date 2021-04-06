import React,{useState} from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

export default function CropperEditor(props){
    const {image, handleSubmit, ref} = props
    console.log(ref)

    return(
        <div>
            <Cropper
                 ref={ref}
                 src={image !== {} ? image : ""}
                 style={{ height: 400, width: "100%" }}
                 zoomable={true}
                 modal={true}
                 // Cropper.js options
                 guides={false}
               />
         
               <button type="button" onClick={handleSubmit}>
                 Submit
               </button>
        </div>
    )
}