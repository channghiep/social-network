

import React, {useEffect, useState, useRef} from 'react';
import {
    Link
  } from 'react-router-dom';
  import { Button, Modal } from 'react-bootstrap';
import './compose.css';

import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";
import { useForm  } from 'react-hook-form'
import Axios from 'axios';
import { top } from '@popperjs/core';
import User from '../../user/user';
import {useScrollToTop} from '../../../utils/scrolling'
import {getExpirUser} from '../../../utils/common'
import defaultImg from '../assets/defaultImg.jpg'
import FilePondHandler2 from '../../../utils/filepondhandler2';

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
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondHandler from '../../../utils/filepondhandler'
import FilePondController from '../../../utils/filePondControl'


// Register the plugins
registerPlugin(FilePondPluginImageTransform,FilePondPluginImageResize,FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileValidateType)



Quill.register("modules/imageUploader", ImageUploader);  

function ComposeAdmin() {
    // useScrollToTop(true)
    // useEffect(()=>{
    //     window.scrollTo(0,0);
    // },[])
    const [files, setFiles] = useState('https://img.trustnews.ca/images/492-thumb-gxvdVnVVkzaejZWNeB-Vw83P.jpg')
    // console.log(files)
    
    // const [filesExt,setFileExt] = useState()

    // const onloaded = response =>{
    //   console.log(response.substring(9, response.length-2))
    //   // return response
    //   setFileExt(response.substring(9, response.length-2))
    // }
    // console.log(filesExt)
    // const formData = new FormData();

    // formData.append("image", files);
    //  formData.append('custID',getExpirUser().custId)
     
    const [show, setShow] = useState(false)
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);

    const [showConf, setShowConf] = useState(false)
    const handleModalConfClose = () => {
      setShowConf(false);
      window.location.reload(false);
    }
    const handleModalConfShow = () => setShowConf(true);
    const [articleCom, setArticleCom] = useState({
        custID: '',
        // categoryTypeID:'',
        imageLink:'',
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
        createdOn:''
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
    // useEffect(()=>{
    //   console.log(files[0].serverId)
    // })
    const {register, handleSubmit} = useForm()
 
    const handleChangeArt = (e) => {
        setArticleCom({
          ...articleCom,
          [e.target.name] : e.target.value
        })
      }

      const handleCatChange = (e) =>{
          console.log(topicCatArray[0].topicType)
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
        console.log(topics)
     
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

   
    // const [dataQuill, setDataQuill]=useState()
    const inputRef = useRef({
      datQuill: ''
    })
    console.log(inputRef.current.datQuill)
      function handleChange(content) {
      inputRef.current.datQuill = content
      // console.log(dataQuill)
      // setContent(dataQuill1)
    }
    // function setContent(content){
    //   setDataQuill(content)
    // }
    const onSubmit = dat => {
   
      
      if(inputRef.current.datQuill != '' && inputRef.current.datQuill !=  undefined){
        // data = articleCom
        // articleCom.imageLink=files
        articleCom.imageLink=imgDat
      articleCom.custID = parseInt(getExpirUser().custId)
      articleCom.topicTypeID = topicID
      articleCom.featureFlag = checkedF
      articleCom.breakingFlag = checkedB
      articleCom.article = inputRef.current.datQuill;

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
      
    //   console.log(articleCom.article)
    //   if(articleCom.article != '' && undefined){
        // alert(JSON.stringify(articleCom));
        console.log(articleCom)
        Axios.post('https://api-dev.trustnews.ca/addArticleAdmin',articleCom).then(response =>{
            console.log(response)
            handleModalConfShow()
            
        })
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
    const module={
    
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
                    console.log(result);
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
        }

    function Quill(){
        
            return(
              <div>
                <ReactQuill
                defaultValue={inputRef.current.datQuill}
                    // require
                  theme="snow"
                  // register={register}
                  // value={value} 
                  onChange={handleChange}

                  // onChange={setValue}
                  modules = {module}
                    
                  formats = {[
                  'header', 'font',
                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                  'list', 'bullet', 'indent',
                  'link', 'image','video', 'align'
                  ]}
                > 

                </ReactQuill>
                </div>
            )
            
    }
  //  if(files !== undefined && files !== null){
  //   console.log(files[0].serverId)
  //  }
  // function thumbHolder(img){
    // let thumbImg;

const [thumbChange, setThumbChange]=useState(false)
function HandleChangeThumb(){
  setThumbChange(!thumbChange)
}
let imgDat='https://img.trustnews.ca/images/492-thumb-gxvdVnVVkzaejZWNeB-Vw83P.jpg';
function saveImg(dat){
    imgDat = dat
    // setFiles(imgDat)
}

function ConditionalImg(){
  if(thumbChange == true){
      return(
       //    <div>
       //    <div onClick={HandleChangeThumb}>Cancel</div>
       //    </div>
           //    <FilePondHandler saveImg={saveImg}/>
           <div className='change-image'>
               <FilePondHandler2 saveImg={saveImg}/>
               <div style={{cursor:"pointer"}} className='change-image-cancel' onClick={HandleChangeThumb}>Cancel</div>
          </div>
       
      )
  }else if(thumbChange== false){
      return(
   //    <div>
   //        <img src={defPost.imageLink} height='200px' width='200px'/>
   //         <div onClick={HandleChangeThumb}>Change</div>
   //    </div>
       <div className='existed-image'>
               <img src={imgDat} height='auto' width='100%'/>
               <div style={{cursor:"pointer"}} onClick={HandleChangeThumb}>change image</div>
       </div>
      )
  }
}



 
    return (
        <div className='cms-compose-body'>
            <Link to="/profile/posts">
                <svg className='return-to-posts' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
            </Link>

            <h1>COMPOSE NEW POST</h1>
            <div className="
            compose-post">
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
                <input name='headline' type="text" onChange={handleChangeArt} required/>

                <label>teaser</label>
                <input name='teaser' type="text" onChange={handleChangeArt} required/>

                <div className='compose-request'>
                    <label>feature</label>
                    <input name='featureFlag' type="checkbox" onClick={handleClickF}/>

                    <label>breaking</label>
                    <input name='breakingFlag' type="checkbox"  onClick={handleClickB}/>
                </div>
   
                {/* <DisplayTopic/> */}
                {/* <select name={label} ref={ref} onChange={handleChangeCat} defaultvalue={cat}> */}
                    {/* {articleDrop.topicCategory.map((topicCat)=>{
                    const {topicType, topicTypeID, categoryType, categoryTypeID } = topicCat
                    setCat(categoryTypeID)
                    return(
                        
                            <option value={categoryTypeID}>{categoryType}</option>
                      
                    
                    )
                    })} */}

                {/* </select> */}
                {/* <SelectTopic label="topic" ref={register} required/>
                <SelectRegion label="region" ref={register} required/>
                <SelectLang label="lang" ref={register} required/>
                <SelectRating label="rating" ref={register} required/> */}
                {/* <InputDate label="release date" register={register} required/>
                <Input label="headline" register={register} required />
                <Input label="teaser" register={register} required /> */}
                {/* <Input className="article" label="article" register={register} required /> */}
                {/* <div className='compose-request'>
                  <InputCheckBox label="Feature request" register={register} />
                  <InputCheckBox label="Breaking request" register={register} />
                </div> */}
                <div className='compose-image'>
                    <label>thumbnail image</label>
                    {/* <FilePondHandler setFiles={setFiles} /> */}
                    <ConditionalImg/>
                    {/* <FilePondController/> */}
                </div>
                
                <Quill/>
         

                <div>
                <Modal className='signin-modal' show={showConf} onHide={handleModalConfClose}>
                  <p>The Article has been posted</p>
                  <Button variant="primary" onClick={handleModalConfClose}>
                    Close
                </Button>
              </Modal>
              <Modal className='signin-modal' show={show} onHide={handleModalClose}>
                  <p>The Article Content can not be blank</p>
                  <Button variant="primary" onClick={handleModalClose}>
                    Close
                </Button>
              </Modal>
            </div>
                <div className='compose-buttons'>
                  {/* <div className='button save-draft-btn'>
                      <p>Save as draft</p>
                  </div> */}
                  <input className="button post-btn submitButton" type="submit" />
                </div>
                
              </form>
   
            </div>
            
        </div>
    )
}

export default ComposeAdmin;