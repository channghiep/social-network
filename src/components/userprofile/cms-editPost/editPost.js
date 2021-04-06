
import React, {useEffect, useState, useRef} from 'react';
import {
    Link
  } from 'react-router-dom';
  import { Button, Modal } from 'react-bootstrap';
import './editPost.css';
import {useLocation} from 'react-router-dom'
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";
import { useForm  } from 'react-hook-form'
import Axios from 'axios';
import { top } from '@popperjs/core';
import User from '../../user/user';
import {useScrollToTop} from '../../../utils/scrolling'
import {getExpirUser} from '../../../utils/common'

import FilePondHandler2 from '../../../utils/filepondhandler2';
import defaultImg from '../assets/defaultImg.jpg'



Quill.register("modules/imageUploader", ImageUploader);  

function EditPost(props) {
    
    let data = useLocation();
    const [show, setShow] = useState(false)
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);
    const [articleCom, setArticleCom] = useState({
        // custID: '',
        // categoryTypeID:'',
        topicTypeID: '', 
        regionTypeID: '', 
        languageTypeID: '', 
        contentRatingID: '', 
        headline: '', 
        teaser: '', 
        article: '', 
        releaseDate: '', 
        featureRequested:'', 
        breakingRequest: '',
        // imageLink:''
        // createdOn:''
    })
    // const [imgLink, setImgLink]=useState('https://img.trustnews.ca/images/492-thumb-DtdORvrfSr0N1Mn1Ek2gAf9R.jpg')
    // const [files, setFiles]=useState('https://img.trustnews.ca/images/492-thumb-DtdORvrfSr0N1Mn1Ek2gAf9R.jpg')

    const [thumbChange, setThumbChange]=useState(false)
    const [articleDrop, setArticleDrop] = useState({
        topicCategory:[{}],
        regions:[],
        languages: [],
        ratings: []
    })
    const[catArray, setCatArray] = useState([{}])
    const[topics,setTopics] = useState([])
    console.log(topics)
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
    const [defPost, setDefPost] = useState({
        active:'',
        article:'',
        breakingRequest:'',
        contentRatingID:'',
        custID:'',
        featureRequested:'',
        headline:'',
        languageTypeID:'',
        regionTypeID:'',
        releaseDate:'',
        statusID:'',
        teaser:'',
        topicTypeID:'',
        imageLink:'',
        featureDenied:'',
        breakingDenied:''
    })
    // console.log(Boolean(defPost.featureRequested))
    // let data = useLocation();
  
    // console.log(defPost)
    const [breakingD, setBreakingD] = useState()
    const [featureD, setFeatureD] = useState()
    console.log(breakingD)
    const handleClickF = () => setFeatureD(!featureD)
    console.log('feature', featureD)
    // const [checkedB, setCheckedB] = useState(breakingD)
    const handleClickB = () => setBreakingD(!breakingD)
    console.log(defPost.releaseDate)
    useEffect(()=>{
     
        // setTopics(data.state.preTop)

        Axios.get('https://api-dev.trustnews.ca/getArticleDropdowns').then(response =>{
            setArticleDrop(response.data)
            setTopicCatArray(response.data.topicCategory)
            setCatArray(response.data.categories)
        })
 
            Axios.get(`https://api-dev.trustnews.ca/editArticle?postID=${data.state.postID}`).then(response =>{
                setDefPost(response.data[0])
                setBreakingD(Boolean(response.data[0].breakingRequest))
                setFeatureD(Boolean(response.data[0].featureRequested))
                console.log(response.data[0])
            })
    
    

    },[])
    // const [checkedF, setCheckedF] = useState(featureD)
  
    

    // useEffect(()=>{
    //     window.scrollTo(0,0);
    //  },[])

    // useEffect(()=>{
    //     // window.scrollTo(0, 0);
    //     const fecthData = async () => {  
    //     await Axios.get('https://api-dev.trustnews.ca/getArticleDropdowns').then(response =>{
    //         setArticleDrop(response.data)
    //         setTopicCatArray(response.data.topicCategory)
    //         setCatArray(response.data.categories)
    //     })
        
    //     }
    //     fecthData()  
        
    // },[])
    function ConditionalBreaking(){
        if(defPost.breakingDenied){
            return(
                // <p>Rejected</p>
                <input disabled name='breakingRequest' type="checkbox" defaultChecked={breakingD} onClick={handleClickB}/>
            )
        }else{
            return(
                <input name='breakingRequest' type="checkbox" defaultChecked={breakingD} onClick={handleClickB}/>
            )
        }
    }
    function ConditionalFeature(){
        if(defPost.featureDenied){
            return(
                // <p>Rejected</p>
                <input disabled name='featureRequested' type="checkbox" defaultChecked={featureD} onClick={handleClickF}/>
            )
        }else{
            return(
                <input name='featureRequested' type="checkbox" defaultChecked={featureD} onClick={handleClickF}/>
            )
        }
    }
    //  console.log(data.state.topicCatArray)
    const {register, handleSubmit} = useForm()
 
    const handleChangeArt = (e) => {
        setArticleCom({
          ...articleCom,
          [e.target.name] : e.target.value
        })
      }

      const handleCatChange = (e) =>{
          console.log(data.state.topicCatArray[0].topicType)
          const cat = e.target.value
          let topA=[];
          for(let i=0;i<data.state.topicCatArray.length;i++){
            if(data.state.topicCatArray[i].categoryTypeID ==  cat){
                // setTopics([])
                topA.push({
                    topicTypeID: data.state.topicCatArray[i].topicTypeID,
                    topicType: data.state.topicCatArray[i].topicType
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
 
    // console.log(checkedF)
    //   const handleBreaking = (e) =>{
    //     const breaking = e.target.value
    //     if(breaking == 'on'){
    //         setBreaking(1)
    //     }else{
    //         setBreaking(0)
    //     }
    //   }

    let imgDat='';
    function saveImg(dat){
        imgDat = dat
        // setFiles(imgDat)
    }

    // let dataQuill;
  
    //   function handleChange(content) {
    //   dataQuill = content
    //   console.log(dataQuill)
    // }
 
    const inputRef = useRef({
        datQuill: defPost.article
      })
      useEffect(()=>{
        inputRef.current.datQuill = defPost.article
    },[defPost])
      console.log(inputRef.current.datQuill)
        function handleChange(content) {
        inputRef.current.datQuill = content
        // console.log(dataQuill)
        // setContent(dataQuill1)
      }
    const onSubmit = dat => {
   
  
        articleCom.postID = data.state.postID
      articleCom.topicTypeID = topicID
      articleCom.featureRequested = featureD
      articleCom.breakingRequest = breakingD
      articleCom.article = inputRef.current.datQuill;
      articleCom.statusID = '1'
      let today = new Date();
        
      articleCom.committedOn= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
        console.log('sub',featureD)
        if(articleCom.topicTypeID === '' || articleCom.topicTypeID === undefined){
            articleCom.topicTypeID = data.state.topicTypeID
        }
        if(articleCom.regionTypeID === '' || articleCom.regionTypeID === undefined){
            articleCom.regionTypeID = data.state.regionTypeID
        }
        if(articleCom.languageTypeID === '' || articleCom.languageTypeID === undefined){
            articleCom.languageTypeID = data.state.languageTypeID
        }
        if(articleCom.contentRatingID === '' || articleCom.contentRatingID === undefined){
            articleCom.contentRatingID = data.state.contentRatingID
        }
        if(articleCom.headline === '' || articleCom.headline === undefined){
            articleCom.headline = defPost.headline
        }
        if(articleCom.teaser === '' || articleCom.teaser === undefined){
            articleCom.teaser = defPost.teaser
        }
        if(articleCom.article === '' || articleCom.article === undefined){
            articleCom.article = defPost.article
        }
        if(articleCom.releaseDate === '' || articleCom.releaseDate === undefined){
            articleCom.releaseDate = defPost.releaseDate
        }
        if(articleCom.article === '' || articleCom.article === undefined){
            articleCom.article = defPost.article
        }

        if(featureD == true){
                articleCom.featureRequested = 1
        }else{
                articleCom.featureRequested = 0
        }


        // if(defPost.breakingRequest == 1 || breakingD == true){
        //         articleCom.breakingRequest = 1
        // }else if(defPost.breakingRequest == 0 || breakingD == false){
        //         articleCom.breakingRequest = 0
        // }

        if(breakingD == true){
            articleCom.breakingRequest = 1
        }else{
                articleCom.breakingRequest = 0
        }
        
        if(imgDat == ''){
            articleCom.imageLink= defPost.imageLink
            if(defPost.imageLink == ''){
                articleCom.imageLink = 'https://img.trustnews.ca/images/492-thumb-gxvdVnVVkzaejZWNeB-Vw83P.jpg'
            }
        }else{
            articleCom.imageLink = imgDat
        }
    
        console.log(articleCom)
        // if(topicID ===  '' || undefined){
        //     articleCom.topicTypeID = data.state.topicTypeID
        // }
        Axios.post('https://api-dev.trustnews.ca/updateArticle',articleCom).then(response =>{
            console.log(response)
            window.location.reload(false);
        })
        setThumbChange(!thumbChange)
      
    };
    function HandleChangeThumb(){
        setThumbChange(!thumbChange)
    }
    // function HandleCancelChangeThumb(){
    //     setThumbChange(!thumbChange)
    // }
  
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
                <ReactQuill
                    required
                  theme="snow"
                  register={register}
                  defaultValue={inputRef.current.datQuill} 
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
            )
        
    }
    function ConditionalTopic(){
        if(topics.length === 0){
            return(
                <select name='topicTypeID' onChange={handleTopChange} defaultValue={data.state.topicTypeID} required>
                    {/* <option></option> */}
                    {data.state.preTop.map((topic)=>{
                        const {topicType, topicTypeID } = topic
                        return(
                            <option value={topicTypeID}>{topicType}</option>
                        )
                    })}
                </select>
            )
        }else{
            return(
                <select name='topicTypeID' onChange={handleTopChange} defaultValue={data.state.topicTypeID} required>
                    {/* <option></option> */}
                    {topics.map((topic)=>{
                        const {topicType, topicTypeID } = topic
                        return(
                            <option value={topicTypeID}>{topicType}</option>
                        )
                    })}
                </select>
            )
        }
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
                    <img src={defPost.imageLink} height='auto' width='100%'/>
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

            <h1>EDIT POST</h1>
            <div className="
            compose-post">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* <SelectCat label="category" ref={register} required/> */}
                <label>categories</label>
                <select name='categoryTypeID' onChange={handleCatChange} defaultValue={data.state.categoryTypeID} required>
                    {/* <option></option> */}
                    {data.state.articleDrop.categories.map((cate)=>{
                        const {categoryType, categoryTypeID } = cate
                        return(
                            <option value={categoryTypeID}>{categoryType}</option>
                        )
                    })}
                </select>
                <label>topics</label>
                {/* <select name='topicTypeID' onChange={handleTopChange} defaultValue={data.state.topicTypeID} required>
                   
                    {topics.map((topic)=>{
                        const {topicType, topicTypeID } = topic
                        return(
                            <option value={topicTypeID}>{topicType}</option>
                        )
                    })}
                </select> */}
                <ConditionalTopic/>
                <label>regions</label>
                <select name='regionTypeID' onChange={handleChangeArt} defaultValue={data.state.regionTypeID} required>
                    {/* <option></option> */}
                    {data.state.articleDrop.regions.map((region)=>{
                        const {regionType, regionTypeID } = region
                        // console.log(typeof defPost.regionTypeID)
                        return(
                            <option value={regionTypeID}>{regionType}</option>
                        )
                    })}
                </select>
                <label>languages</label>
                <select name='languageTypeID' onChange={handleChangeArt} defaultValue={data.state.languageTypeID}required>
                    <option></option>
                    {data.state.articleDrop.languages.map((language)=>{
                        const {languageType, languageTypeID } = language
                        return(
                            <option value={languageTypeID}>{languageType}</option>
                        )
                    })}
                </select>
                <label>ratings</label>
                <select name='contentRatingID' onChange={handleChangeArt} defaultValue={data.state.contentRatingID} required>
                    <option></option>
                    {data.state.articleDrop.ratings.map((rating)=>{
                        const {contentRating, contentRatingID } = rating
                        return(
                            <option value={contentRatingID}>{contentRating}</option>
                        )
                    })}
                </select>
                <label>release date</label>
                <input  name='releaseDate' type="date" onChange={handleChangeArt} defaultValue={defPost.releaseDate} required/>

                <label>headline</label>
                <input name='headline' type="text" onChange={handleChangeArt} defaultValue={defPost.headline} required/>

                <label>teaser</label>
                <input name='teaser' type="text" onChange={handleChangeArt} defaultValue={defPost.teaser}required/>

                {/* <div className='compose-request'> */}
                    {/* <CheckConvert/> */}
                {/* </div> */}
                <div className='compose-request'>
                    <label>feature request</label>
                    <ConditionalFeature/>
                    {/* <input name='featureRequested' type="checkbox" defaultChecked={featureD} onClick={handleClickF}/> */}

                    <label>breaking request</label>
                    <ConditionalBreaking/>
                    {/* <input name='breakingRequest' type="checkbox" defaultChecked={breakingD} onClick={handleClickB}/> */}
                </div> 
                <div className='compose-image'>
                    <label>thumbnail image</label>
                    <ConditionalImg/>
                    {/* <FilePondHandler setFiles={setFiles}/> */}
                </div>
                {/* <FilePondHandler/>  */}
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
                <Quill/>
         

                <div>
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

export default EditPost;