


import React, {useEffect, useState, useRef} from 'react';
import {
    Link
  } from 'react-router-dom';
  import { Button, Modal } from 'react-bootstrap';
// import './compose.css';

import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";
import { useForm  } from 'react-hook-form'
import Axios from 'axios';
import { top } from '@popperjs/core';
import User from '../../user/user';
import {useScrollToTop} from '../../../utils/scrolling'
import {useLocation} from 'react-router-dom'
import {getExpirUser} from '../../../utils/common'
import FilePondHandler from '../../../utils/filepondhandler'
import {
  useHistory
} from 'react-router-dom';
import defaultImg from '../assets/defaultImg.jpg'

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
// import {getExpirUser} from '../utils/common'



Quill.register("modules/imageUploader", ImageUploader);  
registerPlugin(FilePondPluginImageEdit,FilePondPluginImageCrop,FilePondPluginImageTransform,FilePondPluginImageResize,FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileValidateType)

function TnewsEditPost(props) {
    // useScrollToTop(true)
    // useEffect(()=>{
    //     window.scrollTo(0,0);
    // },[])
    let history = useHistory();
    const [files, setFiles] = useState('https://img.trustnews.ca/images/492-thumb-gxvdVnVVkzaejZWNeB-Vw83P.jpg')
    let data = useLocation();
    // console.log(data.state)
    const [show, setShow] = useState(false)
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);
    const [articleCom, setArticleCom] = useState({
        custID: '',
        // categoryTypeID:'',
        topicTypeID: '', 
        regionTypeID: '', 
        languageTypeID: '', 
        contentRatingID: '', 
        headline: '', 
        teaser: '', 
        article: '', 
        releaseDate: '', 
        featureFlag:false, 
        breakingFlag: false,
        createdOn:'',
        imageLink:''
    })
    const [articleDrop, setArticleDrop] = useState({
        topicCategory:[{}],
        regions:[],
        languages: [],
        ratings: []
    })
    const[catArray, setCatArray] = useState([{}])
    const[topics,setTopics] = useState([{
        topicType:'',
        topicTypeID:'',
    }])
    const[topicID,setTopicID] = useState()
    const [topicCatArray, setTopicCatArray] = useState([{
        topicType:'',
        topicTypeID:'',
        categoryType:'',
        categoryTypeID:''
    }])
    const [catID,setCatId] = useState()
    const [feature, setFeature] = useState(0)
    const [breaking, setBreaking] = useState(0)

    useEffect(()=>{
        window.scrollTo(0,0);
     },[])
    useEffect(()=>{
        // window.scrollTo(0, 0);
        const fecthData = async () => {  
        await Axios.get('https://api-dev.trustnews.ca/getArticleDropdowns').then(response =>{
            setArticleDrop(response.data)
            setTopicCatArray(response.data.topicCategory)
            setCatArray(response.data.categories)
            // setTopCat(response.data.topicCategory) 
     
           
            // for(let i=0; i< response.data.topicCategory.length;i++){
            //     // console.log()
            //     for(let j= 0;j< catArray.length;j++){
            //         if(response.data.topicCategory.categoryTypeID != catArray[j].categoryTypeID){
            //             catArray.push({
            //                 categoryTypeID: response.data.topicCategory[i].categoryTypeID,
            //                 categoryType: response.data.topicCategory[i].categoryType
            //             })
            //         }
            //     }
            // }
            // console.log(catArray)
        })
        
        }
        fecthData()  
        
    },[])

    // const {register, handleSubmit} = useForm()
 
    const handleChangeArt = (e) => {
        setArticleCom({
          ...articleCom,
          [e.target.name] : e.target.value
        })
      }

      const handleCatChange = (e) =>{
          // console.log(topicCatArray[0].topicType)
          const cat = e.target.value
          let topA=[];
          for(let i=0;i<topicCatArray.length;i++){
            if(topicCatArray[i].categoryTypeID ==  cat){
                // setTopics([])
                topA.push({
                    topicTypeID: topicCatArray[i].topicTypeID,
                    topicType: topicCatArray[i].topicType
                })
            } 
        }
        setTopics(topA)
        // console.log(topics)
     
      }
      const handleTopChange = (e) => {
        const top = e.target.value
        setTopicID(top)
      }
    //   const handleFeature = (e) =>{
    //     const feature = e.target.value
    //     if(feature == 'on'){
    //         setFeature(1)
    //     }else if(feature != 'on'){
    //         setFeature(0)
    //     }
    //     console.log(feature)
    //   }
    const [checkedF, setCheckedF] = useState(false)
    const handleClickF = () => setCheckedF(!checkedF)
    const [checkedB, setCheckedB] = useState(false)
    const handleClickB = () => setCheckedB(!checkedB)
    // console.log(checkedF)
    //   const handleBreaking = (e) =>{
    //     const breaking = e.target.value
    //     if(breaking == 'on'){
    //         setBreaking(1)
    //     }else{
    //         setBreaking(0)
    //     }
    //   }

   

  
    const onSubmit = dat => {
   
    //   console.log(data)
      if(inputRef.current.datQuill != '' && inputRef.current.datQuill !=  undefined){
        // data = articleCom
      articleCom.custID = parseInt(getExpirUser().custId)
      articleCom.topicTypeID = topicID
      articleCom.featureFlag = checkedF
      articleCom.breakingFlag = checkedB
      articleCom.article = inputRef.current.datQuill;
    //   let today = new Date();
    if(thumbImg == '' || thumbImg == undefined || thumbImg == null){
      articleCom.imageLink='https://img.trustnews.ca/images/492-thumb-gxvdVnVVkzaejZWNeB-Vw83P.jpg';
    }else{
      articleCom.imageLink=thumbImg
    }
    
    //   articleCom.createdOn = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    articleCom.createdOn= data.state.postDate
    //   console.log(articleCom.article)
    //   if(articleCom.article != '' && undefined){
        // alert(JSON.stringify(articleCom));

  
  
  
 
        if(articleCom.headline === '' || articleCom.headline === undefined){
            articleCom.headline = data.state.headline
        }
        if(articleCom.teaser === '' || articleCom.teaser === undefined){
            articleCom.teaser = data.state.teaser
        }
        if(articleCom.article === '' || articleCom.article === undefined){
            articleCom.article = data.state.article
        }

    let today = new Date();
      today.setDate(today.getDate()+7)
      let newMonth = today.getMonth()+1
      let newDay = today.getDate()
      if(newMonth < 10){
          newMonth = '0' + newMonth
      }
      if(newDay < 10 ){
          newDay = '0' + newDay
      }
      today = `${today.getFullYear()}-${newMonth}-${newDay}`
      if(articleCom.featureFlag){
        articleCom.featureExp = today
      }else{
        articleCom.featureExp = ''
      }
 
      let todayC = new Date()
      articleCom.createdOn = todayC.getFullYear()+'-'+(todayC.getMonth()+1)+'-'+todayC.getDate();

      if(articleCom.breakingFlag){
        articleCom.breakingTimestamp = todayC.getFullYear()+'-'+(todayC.getMonth()+1)+'-'+todayC.getDate();
      }else{
        articleCom.breakingTimestamp = ''
      }
        // if(articleCom.featureFlag === '' || articleCom.featureFlag === undefined){
            // if(featureD == true){
            //     articleCom.featureFlag = 1
            // }else{
            //     articleCom.featureFlag = 0
            // }

        // }
        // if(articleCom.breakingFlag === '' || articleCom.breakingFlag === undefined){
            // if(defPost.breakingFlag == 1 || breakingD == true){
            //     articleCom.breakingFlag = 1
            // }else if(defPost.breakingFlag == 0 || breakingD == false){
            //     articleCom.breakingFlag = 0
            // }


        console.log(articleCom)
       
        Axios.post('https://api-dev.trustnews.ca/addArticleAdmin',articleCom).then(response =>{
            console.log(response)
            // window.location.reload(false);
        })
        Axios.get(`https://api-dev.trustnews.ca/deleteExternal?eaID=${data.state.eaID}`).then(response=>{
          console.log(response)
        })
        history.push('/profile/posts')
      }
      
      else{
         handleModalShow()
      }
      
    };
    // function Quill1(){
    //     setTimeout(()=>{
    //         Quill()
    //     },1000)
    // }
    // console.log(articleCom.custID)
    const inputRef = useRef({
      datQuill: data.state.article
    })
  //   useEffect(()=>{
  //     inputRef.current.datQuill = defUserInfo.bio
  // },[defUserInfo])
    // console.log(inputRef.current.datQuill)
      function handleChange(content) {
      inputRef.current.datQuill = content
      // console.log(dataQuill)
      // setContent(dataQuill1)
    }
  //   let dataQuill;
  
  //   function handleChange(content) {
  //   dataQuill = content
  //   console.log(dataQuill)
  // }
    function Quill(){
        
            return(
                <ReactQuill
                    required
                  theme="snow"
            
                  defaultValue={inputRef.current.datQuill} 
                  onChange={handleChange}

                  // onChange={setValue}
                  modules = {{
                  // #3 Add "image" to the toolbar

                    toolbar: [
                      [{ 'header': [1, 2, false] }, { 'font': [] }],
                      ['bold', 'italic', 'underline','strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', 'image', 'video'],
                      [{ 'align': [] }],

                      ['clean']          
                      ],
                    // # 4 Add module and upload function

                    imageUploader: {
                      upload: file => {
                        return new Promise((resolve, reject) => {
                        const formData = new FormData();

                        formData.append("image", file);
                         formData.append('custID',getExpirUser().custId)
                        //  console.log(formData)
                        fetch(
                          "https://img.trustnews.ca/upload",
                          {
                            method: "POST",
                            body: formData,
                          }).then(response => {
                            response.json().then(result => {
                              // console.log(result);
                              resolve(result.path)
                            })
                            .catch(error => {
                              reject("Upload failed");
                              console.error("Error:", error);
                            });
                          });
                        })
                      }
                    }
                  }}
                    
                  formats = {[
                  'header', 'font',
                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                  'list', 'bullet', 'indent',
                  'link', 'image','video', 'align'
                  ]}
                > 

                </ReactQuill>
            )
        
    }
    const {register, handleSubmit} = useForm()



   


    let thumbImg;

  function FilePondHandler(props){
    // const [files, setFiles] = useState([{
      
    // }])
    // const [filesExt,setFileExt] = useState()

    const onloaded = response =>{
      // console.log(response.substring(9, response.length-2))
      // return response
      // setFileExt(response.substring(9, response.length-2))
      // props.saveImg(response.substring(9, response.length-2))
    //   props.setFiles(response.substring(9, response.length-2))
    thumbImg = response.substring(9, response.length-2)
    }
    // console.log(filesExt)
    // const formData = new FormData();

    // formData.append("image", files);
    //  formData.append('custID',getExpirUser().custId)
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
        // onupdatefiles={setFiles}
        name="files"
        labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
      />
    )
}




    return (
        <div className='cms-compose-body'>
            <Link to="/profile/tnews">
                <svg className='return-to-posts' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
            </Link>

            <h1>CONVERT POST</h1>
            <div className="
            compose-post">
              <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* <SelectCat label="category" ref={register} required/> */}
                <label>categories</label>
                <select name='categoryTypeID' onChange={handleCatChange} defaultvalue={articleCom.categoryTypeID} required>
                    <option></option>
                    {catArray.map((cate)=>{
                        const {categoryType, categoryTypeID } = cate
                        return(
                            <option value={categoryTypeID}>{categoryType}</option>
                        )
                    })}
                </select>
                <label>topics</label>
                <select name='topicTypeID' onChange={handleTopChange} required>
                    <option></option>
                    {topics.map((topic)=>{
                        const {topicType, topicTypeID } = topic
                        return(
                            <option value={topicTypeID}>{topicType}</option>
                        )
                    })}
                </select>
                <label>regions</label>
                <select name='regionTypeID' onChange={handleChangeArt} required>
                    <option></option>
                    {articleDrop.regions.map((region)=>{
                        const {regionType, regionTypeID } = region
                        return(
                            <option value={regionTypeID}>{regionType}</option>
                        )
                    })}
                </select>
                <label>languages</label>
                <select name='languageTypeID' onChange={handleChangeArt} required>
                    <option></option>
                    {articleDrop.languages.map((language)=>{
                        const {languageType, languageTypeID } = language
                        return(
                            <option value={languageTypeID}>{languageType}</option>
                        )
                    })}
                </select>
                <label>ratings</label>
                <select name='contentRatingID' onChange={handleChangeArt} required>
                    <option></option>
                    {articleDrop.ratings.map((rating)=>{
                        const {contentRating, contentRatingID } = rating
                        return(
                            <option value={contentRatingID}>{contentRating}</option>
                        )
                    })}
                </select>
                <label>release date</label>
                <input  name='releaseDate' type="date" onChange={handleChangeArt} required/>

                <label>headline</label>
                <input name='headline' type="text" onChange={handleChangeArt} required defaultValue={data.state.headline}/>

                <label>teaser</label>
                <input name='teaser' type="text" onChange={handleChangeArt} defaultValue={data.state.teaser} required/>

                <div className='compose-request'>
                    <label>feature request</label>
                    <input name='featureFlag' type="checkbox" onClick={handleClickF}/>

                    <label>breaking request</label>
                    <input name='breakingFlag' type="checkbox"  onClick={handleClickB}/>
                </div>
                <div className='compose-image'>
                    <label>thumbnail image</label>
                  <FilePondHandler setFiles={setFiles}/>
                </div>

                <Quill/>

                <div className='compose-buttons'>
                  {/* <div className='button save-draft-btn' onClick={handleSubmit}>
                      <p>Save</p>
                  </div> */}
                  <input className="button post-btn submitButton" type="submit" />
                  
                </div>
                    </form>

                <div>
              <Modal className='signin-modal' show={show} onHide={handleModalClose}>
                  <p>The Article Content can not be blank</p>
                  <Button variant="primary" onClick={handleModalClose}>
                    Close
                </Button>
              </Modal>
            </div>
                
                
              </div>
   
            </div>
            
        </div>
    )
}

export default TnewsEditPost;