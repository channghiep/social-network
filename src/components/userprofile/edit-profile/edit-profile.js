// 

import React, {useState, useEffect, useRef} from 'react';
import {
  Link
} from 'react-router-dom';
import { useForm  } from 'react-hook-form'
import './edit-profile.css';
import {useLocation,
    useHistory} from 'react-router-dom'
import ReactQuill, {Quill} from 'react-quill';
import Axios from 'axios'
import {getExpirUser} from '../../../utils/common'
function EditProfile() {
    let history = useHistory();
    const bioRef = useRef(null)
    // const {register, handleSubmit} = useForm()
    let data = useLocation();
    const [loadbio,setLoadBio]=useState(false)
    useEffect(()=>{
        setDefUserInfo(data.state.userinfo.customer)

        // defUserInfo.dob=dateA
        // setDateB(`${dateA}`)
        setDateB(data.state.conDate)
        setBTeaser(data.state.bioTeaser)
        // setBTeaser(data.state.userinfo.customer.bioTeaser)
    },[])
    
 


    const [bTeaser, setBTeaser] = useState()
    // console.log(bTeaser)
    const [dateB, setDateB] = useState('')
    // console.log(dateB)
    const [defUserInfo, setDefUserInfo] = useState({
        custID:'',
        fName:'',
        mName:'',
        lName:'',
        userName:'',
        displayName:'',
        dob:'',
        bio:'',
        bioTeaser:''


    })
    function HandleUsernameAdd(e){
        console.log(e.target.value)
    }

    function DynamicEditUserName(){
        if(defUserInfo.userName == ''){
            return(
            <div className='edit-section username'>
                    <label for="username">username</label>
                    <input type="text" id="username" name="userName" value={defUserInfo.userName} onChange={HandleUsernameAdd}/>
            </div>
            )
        }else{
            return(
            <div className='edit-section username'>
                <label for="username">username</label>
                <input readOnly type="text" id="username" name="userName" value={defUserInfo.userName} />
            </div>
            )
        }
    }
    const [updateUserInfo, setUpdateDefUserInfo] = useState({
        custID:'',
        fName:'',
        mName:'',
        lName:'',
        userName:'',
        displayName:'',
        dob:'',
        bio:'',
        bioTeaser:''


    })
    const handleChangeProfile = (e) => {
        setUpdateDefUserInfo({
          ...updateUserInfo,
          [e.target.name] : e.target.value
        })
      }
      console.log(defUserInfo)
    // bioRef.innerHTML = {bTeaser}
    // console.log(bioTeaser)
    // const bTeaser = defUserInfo.bioTeaser
    
    const inputRef = useRef({
        datQuill: defUserInfo.bio
      })
      useEffect(()=>{
        inputRef.current.datQuill = defUserInfo.bio
        console.log(inputRef.current.datQuill)
        setLoadBio(!loadbio)
    },[defUserInfo.bio])
      
        function handleChangeQuill(content) {
        inputRef.current.datQuill = content
        // console.log(dataQuill)
        // setContent(dataQuill1)
      }
    //   let dataQuill;
  
    //   function handleChangeQuill(content) {
    //   dataQuill = content
    //   console.log(dataQuill)
    // }
      function Quill(){
        
            return(
                <ReactQuill
                    required
                  theme="snow"
                //   register={register}
                  defaultValue={inputRef.current.datQuill} 
                  onChange={handleChangeQuill}

                  // onChange={setValue}
                  modules = {{
                  // #3 Add "image" to the toolbar

                    toolbar: [
                      [{ 'header': [1, 2, false] }, { 'font': [] }],
                      ['bold', 'italic', 'underline','strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', ],
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
                        fetch(
                          "https://img.trustnews.ca/upload",
                          {
                            method: "POST",
                            body: formData
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
                  }}
                    
                  formats = {[
                  'header', 'font',
                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                  'list', 'bullet', 'indent',
                  'link',  'align'
                  ]}
                > 

                </ReactQuill>
            )
        
    }
    // console.log(typeof updateUserInfo)
  
    const handleSubmit= (event) => {
        // data = 
        event.preventDefault()
    //     if(dataQuill != '' && dataQuill !=  undefined){
        //   updateUserInfo
    //     articleCom.custID = localStorage.getItem('custId')
    //     articleCom.topicTypeID = topicID
    //     articleCom.featureRequested = checkedF
    //     articleCom.breakingFlag = checkedB
    //     articleCom.article = dataQuill;
    console.log(updateUserInfo)
    updateUserInfo.custID = defUserInfo.custID
    updateUserInfo.bio = inputRef.current.datQuill
    updateUserInfo.userName = defUserInfo.userName
    console.log(defUserInfo.bio)
    if(updateUserInfo.bio === undefined || updateUserInfo.bio === ''){
        updateUserInfo.bio= defUserInfo.bio
    }
    if(updateUserInfo.fName === undefined || updateUserInfo.fName === ''){
        updateUserInfo.fName= defUserInfo.fName
    }
    if(updateUserInfo.mName === undefined || updateUserInfo.mName === '' ){
        updateUserInfo.mName= defUserInfo.mName
    }
    if(updateUserInfo.lName === undefined || updateUserInfo.lName === ''){
        updateUserInfo.lName= defUserInfo.lName
    }
    if(updateUserInfo.displayName === undefined || updateUserInfo.displayName === ''){
        updateUserInfo.displayName= defUserInfo.displayName
    }
    if(updateUserInfo.dob === undefined || updateUserInfo.dob === ''){
        updateUserInfo.dob= defUserInfo.dob
    }
    if(updateUserInfo.bioTeaser === undefined || updateUserInfo.bioTeaser === ''){
        updateUserInfo.bioTeaser= defUserInfo.bioTeaser
    }
console.log(updateUserInfo)
        
        Axios.post('https://api-dev.trustnews.ca/updatePersonalInfo',
        updateUserInfo
          

        ).then(response => {
            
            console.log(response)
            // window.location.reload(false); 
            history.push('/profile')
        })
              
      };
    
    return (
        <div className='edit-profile-body'>
            <Link to="/profile">
                <svg className='return-to-profile' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
            </Link>

            <h1>EDIT PROFILE</h1>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <div className='account-info-grid'>
                <div className='edit-wrap-name'>
                    <div className='edit-section fname'>
                        <label for="fname">first name</label>
                        <input type="text" id="fName" name="fName" defaultValue={defUserInfo.fName} onChange={handleChangeProfile}/>
                    </div>

                    <div className='edit-section mname'>
                        <label for="mname">middle name</label>
                        <input type="text" id="mName" name="mName" defaultValue={defUserInfo.mName} onChange={handleChangeProfile}/>
                    </div>

                    <div className='edit-section lname'>
                        <label for="lname">last name</label>
                        <input type="text" id="lName" name="lName" defaultValue={defUserInfo.lName} onChange={handleChangeProfile}/>
                    </div>
                </div>

                {/* <div className='edit-section username'>
                    <label for="username">username</label>
                    <input readOnly type="text" id="username" name="userName" value={defUserInfo.userName} />
                </div> */}
                <DynamicEditUserName/>
                <div className='edit-section dpname'>
                    <label for="displayname">display name</label>
                    <input type="text" id="displayname" name="displayName" defaultValue={defUserInfo.displayName} onChange={handleChangeProfile}/>
                </div>

                <div className='edit-section bday'>
                    <label for="bday">date of birth</label>
                    <input type="date" id="bday" name="dob" defaultValue={dateB} onChange={handleChangeProfile}/>
                </div>

                {/* <div className='edit-section occupation'>
                    <label for="job">occupation</label>
                    <input type="text" id="job" name="ocupation"/>
                </div> */}

                <div className='edit-section bio-tease'>
                    <label for="bio-teaser">bio teaser</label>
                    {/* <textarea ref={bioRef} id="bio-teaser" name="bio teaser" >{bTeaser}</textarea> */}
                    <input id="bio-teaser" name="bioTeaser" defaultValue={bTeaser} onChange={handleChangeProfile}/>
                </div>

                <div className='edit-section bio'>
                    <label for="bio">bio text</label>
                    {/* <input type="text" id="bio" name="bio" defaultValue={defUserInfo.bio}/> */}
                    <Quill/>
                </div>
            </div>
            <div className='edit-profile-buttons'>
                {/* <div className='button cancel-profile'>
                    <p>cancel</p>
                </div> */}
                <div style={{cursor:"pointer"}} className='button save-profile' onClick={handleSubmit}>
                    <p>save</p>
                </div>
                {/* <input className="" type="submit" /> */}
            </div>
            {/* </form> */}
            

        

        </div>
    )
}

export default EditProfile;