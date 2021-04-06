import React, {useState} from 'react'
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// Import the plugin code
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

// Import the plugin styles
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import {getExpirUser} from '../utils/common'

// Register the plugins
registerPlugin(FilePondPluginImageEdit,FilePondPluginImageCrop,FilePondPluginImageTransform,FilePondPluginImageResize,FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileValidateType)
export default function FilePondHandler2(props){
    const [files, setFiles] = useState([{
      
    }])
    const [filesExt,setFileExt] = useState()

    const onloaded = response =>{
      console.log(response.substring(9, response.length-2))
      // return response
      setFileExt(response.substring(9, response.length-2))
      props.saveImg(response.substring(9, response.length-2))
    //   props.setFiles(response.substring(9, response.length-2))
    }
    // console.log(filesExt)
    const formData = new FormData();

    formData.append("image", files);
     formData.append('custID',getExpirUser().custId)
    return(
        <FilePond
        allowImageCrop={true}
        allowImageResize={true}
        imagePreviewHeight= '170'
        imageCropAspectRatio= '1:1'
        instantUpload={false}
        // imageResizeTargetWidth= '100px'
        // imageResizeTargetHeight= '100px'
        imageResizeMode='cover'
        allowMultiple={false}
        maxFiles={1}
        acceptedFileTypes={['image/*']}
        server= {{
          url: "https://img.trustnews.ca",
          process: {
            url:'/uploadThumb',
            method: 'POST',
            withCredentials: false,
            // body:{
            //   formData
            // },
            headers: {
              filename:getExpirUser().custId},
            timeout: 7000,
            onload: onloaded,
            onerror: null,
            ondata: null
          },
         
        }}
        onupdatefiles={setFiles}
        name="files"
        labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
      />
    )
}