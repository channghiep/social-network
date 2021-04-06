

import React,  {useEffect, useState, useRef} from 'react';
import Axios from 'axios'
import {
    Link
  } from 'react-router-dom';

import './profile.css';

import imgLarge from '../assets/profile-large.png';
import {Button,Modal} from 'react-bootstrap';
import {getExpirUser} from '../../../utils/common'
import {getSuAuth} from '../../../utils/common'
import Loading from '../../../utils/loading'


function Profile() {
    const [loading, setLoading] = useState(true)
    console.log(getSuAuth())
    useEffect(()=>{
        const fecthData = async () => {
            const response = await Axios.get(`https://api-dev.trustnews.ca/profile?custID=${getExpirUser().custId}`);
            
            setTimeout(()=>{
                setLoading(false)
                setUserInfo(response.data)
            },1200)
            
        }
        fecthData();
        
    },[])
    const [userinfo, setUserInfo]= useState({
        customer:{
            custID: '',
            fName: "",
            mName: "",
            lName: "",
            likes: '',
            followers: '',
            articles:'',
            dob: "",
            userName: "",
            displayName: "",
            avatarURI: "",
            bioTeaser: "",
            bio: ""
        },
        phone: [],
        email: [],
        address: []
    })
    const [show, setShow] = useState(false)

    const [modalPhoneShow, setShowPhoneModal] = useState(false)
    const [phone, setPhone] = useState()
    const [phoneT, setPhoneT] = useState()
    const [phoneCom, setPhoneCom] = useState({})

    const [modalEmailShow, setShowEmailModal] = useState(false)
    const [email, setEmail] = useState()
    const [emailT, setEmailT] = useState()
    const [emailCom, setEmailCom] = useState({})

    const [modalAddressShow, setShowAddressModal] = useState(false)
    const [streetAddressN, setStreetAddress] = useState()
    const [addressT, setAddressT] = useState()
    const [countryN, setCountry] = useState()
    const [postalN, setPostal] = useState()
    const [provinceN, setProvince] = useState()
    const [cityN, setCity] = useState()
    const [unitInfoN, setUnitInfo] = useState()
    const [addressCom, setAddressCom] = useState({})
    //add phone number
    const [modalAddPhoneShow, setShowAddPhoneModal] = useState(false)
    const [newPhone, setNewPhone]=useState({
        custID:'',
        phoneTypeID:'',
        phoneNumber:''
    })
    const [newPhoneNum,setNewPhoneNum]= useState()
    const [newPhoneType,setNewPhoneType]= useState()
    const handleModalAddPhoneClose = () => setShowAddPhoneModal(false);
    const handleModalAddPhoneShow = () => setShowAddPhoneModal(true);
    const handlePhoneNumAddChange = (e)=>{
       const dat = e.target.value
       setNewPhoneNum(dat)
    }
    const handlePhoneTypeAddChange = (e)=>{
       const dat = e.target.value
       setNewPhoneType(dat)
    }
    function handleAddNumber(){
        handleModalAddPhoneShow()
    }
    function handlePhoneAdd (){

        const custID=parseInt(getExpirUser().custId)
        let PhoneType =parseInt(newPhoneType)

        Axios.post('https://api-dev.trustnews.ca/addPhone',{
            custID:custID,
            phoneTypeID: PhoneType,
            phoneNumber: newPhoneNum
        }).then(response=>{
 
            window.location.reload(false);
        })
    }
    //

    //add email
    const [modalAddEmailShow, setShowAddEmailModal] = useState(false)
    const [newEmailNum,setNewEmailNum]= useState()
    const [newEmailType,setNewEmailType]= useState()
    const handleModalAddEmailClose = () => setShowAddEmailModal(false);
    const handleModalAddEmailShow = () => setShowAddEmailModal(true);
    const handleEmailNumAddChange = (e)=>{
       const dat = e.target.value
       setNewEmailNum(dat)
    }
    const handleEmailTypeAddChange = (e)=>{
       const dat = e.target.value
       setNewEmailType(dat)
    }
    function handleAddEmail(){
        handleModalAddEmailShow()
    }
    function handleEmailAdd (){
 
        const custID=parseInt(getExpirUser().custId)
        let EmailType =parseInt(newEmailType)
   
        Axios.post('https://api-dev.trustnews.ca/addEmail',{
            custID:custID,
            emailTypeID: EmailType,
            emailAddr: newEmailNum
        }).then(response=>{
       
            window.location.reload(false);
        })
    }
    //

    //add address
    const [modalAddAddressShow, setShowAddAddressModal] = useState(false)
    const [streetAddressNew, setStreetAddressNew] = useState()
    const [addressTNew, setAddressTNew] = useState()
    const [countryNew, setCountryNew] = useState()
    const [postalNew, setPostalNew] = useState()
    const [provinceNew, setProvinceNew] = useState()
    const [cityNew, setCityNew] = useState()
    const [unitInfoNew, setUnitInfoNew] = useState()
    // const [addressComNew, setAddressComNew] = useState({})
    const handleModalAddAddressClose = () => setShowAddAddressModal(false);
    const handleModalAddAddressShow = () => setShowAddAddressModal(true);
    // const handleAddressNumAddChange = (e)=>{
    //    const dat = e.target.value
    //    setNewAddressNum(dat)
    // }
    // const handleAddressTypeAddChange = (e)=>{
    //    const dat = e.target.value
    //    setNewAddressType(dat)
    // }
    const handleAddressTypeIdChangeAdd = (e) => {
        const dat = e.target.value
        setAddressTNew(dat)
    }
    const handleStreetAddressChangeAdd = (e) => {
        const dat = e.target.value
        setStreetAddressNew(dat)
    }
    const handleCountryChangeAdd = (e) => {
        const dat = e.target.value
        setCountryNew(dat)
    }
    const handlePostalChangeAdd = (e) => {
        const dat = e.target.value
        setPostalNew(dat)
    }
    const handleProvinceChangeAdd = (e) => {
        const dat = e.target.value
        setProvinceNew(dat)
    }
    const handleCityChangeAdd = (e) => {
        const dat = e.target.value
        setCityNew(dat)
    }
    const handleUnitInfoChangeAdd = (e) => {
        const dat = e.target.value
        setUnitInfoNew(dat)
    }
    function handleAddAddress(){
        handleModalAddAddressShow()
    }
    function handleAddressAdd (){
   
        const custID=parseInt(getExpirUser().custId)
        let AddressType =parseInt(addressTNew)
 
        Axios.post('https://api-dev.trustnews.ca/addAddress',{
            custID:custID,
            addressTypeID:AddressType, 
            streetAddress:streetAddressNew, 	
            unitInfo:unitInfoNew, 
            city:cityNew, 
            province:provinceNew, 
            postal:postalNew, 
            country:countryNew
        }).then(response=>{
   
            window.location.reload(false);
        })

    }
    //
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);
  
  
  
    let date = new Date(`${userinfo.customer.dob}`)
    let newMonth = date.getMonth() + 1
    let newDay = date.getDate()+1
    if(newMonth < 10){
        newMonth = '0' + newMonth;
    }
    if(newDay <10 ){
        newDay = '0' + newDay;
    }
    date = `${date.getFullYear()}-${newMonth}-${newDay}`


 
    console.log(userinfo)
  
    return (
        <div>
             {loading ? <Loading/>:
        
        <div className='profile-body'>
           
     
            <div className='profile-resume'>
                <div className='profile-img'>
                    <img src={imgLarge} alt='profile large'/>
                    {/* Next feature */}
                    {/* <Link style={{textDecoration:'none',color:'#FFF'}} to="/profile/changeimg">
                        <div className='change-profile-img'>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/>
                            </svg>
                        </div>
                    </Link> */}
                </div>

                <h1 className='profile-name'>{`${userinfo.customer.fName} ${userinfo.customer.mName} ${userinfo.customer.lName} `}</h1>

                {/* <p className='profile-occupation'>pool boy</p> */}

                <Link style={{textDecoration:'none',color:'#FFF'}} 
                        to={{
                            pathname:"/profile/editprofile",
                            state: {userinfo,
                             conDate: `${date}`,
                             bioTeaser:`${userinfo.customer.bioTeaser}` 
                            }
                        }}>
                    <div className='button edit-profile-btn'>
                        <p>edit profile</p>
                    </div>
                </Link>

                <div className='profile-statistic'>
                    <div className='profile-followers'>
                        <p>followers</p><p className='result-statistic'>{userinfo.customer.followers}</p>
                    </div>
                    <div className='profile-articles'>
                        <p>articles</p><p className='result-statistic'>{userinfo.customer.articles}</p>
                    </div>
                    <div className='profile-likes'>
                        <p>likes</p><p className='result-statistic'>{userinfo.customer.likes}</p>
                    </div>
                </div>

                <div className='profile-bio'>
                    <p>{userinfo.customer.bioTeaser}
                    </p>
                    <span style={{cursor:"pointer"}} onClick={handleModalShow}>see more</span>
                </div>
                <Modal className='profile-bio-full' show={show} onHide={handleModalClose}>
                    <div dangerouslySetInnerHTML={{ __html: userinfo.customer.bio }}></div>

                  <Button variant="primary" onClick={handleModalClose}>
                    Close
                  </Button>
                </Modal>


            </div>

            <div className='profile-details'>
                <h2>PERSONAL INFO</h2>
                <div className='profile-personal-info'>
                    <div className='profile-personal-username'>
                        <p className='profile-detail-red'>username</p>
                        <p className='profile-detail-black'>{userinfo.customer.userName}</p>
                    </div>
                    <div className='profile-personal-displayname'>
                        <p className='profile-detail-red'>display name</p>
                        <p className='profile-detail-black'>{userinfo.customer.displayName}</p>
                    </div>
                    <div className='profile-personal-bday'>
                        <p className='profile-detail-red'>date of birth</p>
                        <p className='profile-detail-black'>{date}</p>
                    </div>
                </div>

                <h2>CONTACT INFO</h2>
                <div className='profile-contact-info'>
                    <div className='profile-contact-phone'>
                            <p className='profile-detail-red'>phone number</p>
                        
                        {userinfo.phone.map((phoneItem)=>{
                            const {phoneID, phoneType,phoneTypeID, phoneNumber} = phoneItem
                            
                            const handleModalPhoneClose = () => setShowPhoneModal(false);
                            const handleModalPhoneShow = () => setShowPhoneModal(true);
                            function handleEditPhone(phoneDef){
              
                                setPhoneCom(phoneDef)
                      
                                handleModalPhoneShow()
                            }
                        
                            function handlePhoneUpdate(e){
                          
                                const object = {
                                phoneID: phoneCom.phoneID,
                                phoneTypeID: phoneT,
                                phoneNumber: phone
                                }
                                if(phoneT === undefined){
                                    object.phoneTypeID = phoneCom.phoneTypeIDdef
                                }
                                if(phone === undefined){
                                    object.phoneNumber = phoneCom.phoneNumberDef
                                }
                                
                      
                                Axios.post('https://api-dev.trustnews.ca/updatePhone',object).then(response=>{
                               
                                    window.location.reload(false);
                                })
                            }
                            const handlePhoneChange = (e) => {
                    
                                const phoneNum = e.target.value
                                setPhone(phoneNum)
                              }
                            const handlePhoneTypeChange = (e) => {
               
                                const phoneT = e.target.value
                                setPhoneT(phoneT)
                              }
                            function deletePhoneNumber (dat){
                                let today = new Date();

                                let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                     
                                Axios.post('https://api-dev.trustnews.ca/deactivateProfile',{
                                    target:'phone',
                                    idField:'phoneID',
                                    ID:dat.phoneID,
                                    reason: 'Not in use',
                                    date: currentDate

                                }).then(response =>{
                                  
                                    window.location.reload(false);
                                })
                            }  

       
                            return(
                                
                                     <div className="phone-wrapper" key={phoneID}>
                                         {/* <p>{phoneID}</p> */}
                                        <p className='profile-detail-black detail-phone-desc'>{phoneType}</p>
                                        <p className='profile-detail-black detail-phone-numb'>{phoneNumber}</p>
                                        {/* <div id='1' onClick={handleEditPhone}> */}
                                        <div style={{cursor:"pointer"}} value='1' onClick={() => handleEditPhone({phoneID:phoneID,
                                        phoneTypeDef:phoneType,phoneNumberDef:phoneNumber,phoneTypeIDdef:phoneTypeID})}>
                                            <svg className='profile-edit-btn' width="24" height="24" viewBox="0 0 24 24" >
                                                <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/>
                                            </svg>
                                        </div>
                                        <div style={{cursor:"pointer"}} onClick={() => deletePhoneNumber({phoneID:phoneID})}>
                                            <svg className='profile-trash-btn' width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896
                                                2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448
                                                1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>
                                            </svg>
                                        </div>
                                        <Modal className='update-phone-modal profile-info-modal' show={modalPhoneShow} onHide={handleModalPhoneClose}>
                                            <p className='modal-title'>UPDATE NUMBER</p>
                                            <div className='select-number modal-select'>
                                                <p>number type</p>
                                                <select name="phoneTypeID" onChange={handlePhoneTypeChange} defaultValue={phoneCom.phoneTypeIDdef}>
                                                    <option value="1">Primary</option>
                                                    <option value="2">Alternate</option>
                                                    <option value="3">Cell</option>
                                                    <option value="4">Emergency</option>
                                                    <option value="5">Billing</option>
                                                    <option value="6">Private</option>
                                                </select>
                                            </div>
                                            <div className='input-number modal-input'>
                                                <p>update number</p>
                                                <input type='text' defaultValue={phoneCom.phoneNumberDef} name="phoneNumber" onChange={handlePhoneChange}/>
                                            </div>
                                            
                                        <Button className='primary-red' variant="primary" onClick={handleModalPhoneClose}>
                                            Close
                                        </Button>
                                        <Button className='secondary-blue' variant="secondary" onClick={handlePhoneUpdate}>
                                            Update
                                        </Button>
                                        </Modal>
                                    </div>
                               
                               
                               
                            )
                        })}
                             <div className='profile-add-btn'>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                            </svg>
                            <p style={{cursor:"pointer"}} onClick={handleAddNumber}>add new number</p>
                                <Modal className='add-phone-modal profile-info-modal' show={modalAddPhoneShow} onHide={handleModalAddPhoneClose}>
                                    <p className='modal-title'>ADD NEW NUMBER</p>

                                    <div className='select-number modal-select'>
                                        <p>number type</p>
                                        <select name="phoneTypeID" onChange={handlePhoneTypeAddChange}>
                                            <option value="1">Primary</option>
                                            <option value="2">Alternate</option>
                                            <option value="3">Cell</option>
                                            <option value="4">Emergency</option>
                                            <option value="5">Billing</option>
                                            <option value="6">Private</option>
                                        </select>
                                    </div>

                                    <div className='input-number modal-input'>
                                        <p>new number</p>
                                        <input type='text' name="phoneNumber" onChange={handlePhoneNumAddChange}/>
                                    </div>
                                            
                                        <Button className='primary-red' variant="primary" onClick={handleModalAddPhoneClose}>
                                            Close
                                        </Button>
                                        <Button className='secondary-blue' variant="secondary" onClick={handlePhoneAdd}>
                                            Add
                                        </Button>
                                </Modal>
                        </div>
                    </div>
                    <div className='profile-contact-email'>
                      
                                <p className='profile-detail-red'>email</p>
             
                            {userinfo.email.map((emailItem)=>{
                                const {emailID, emailType, emailAddr,emailTypeID} = emailItem
                                // const {phoneID, phoneType,phoneTypeID, phoneNumber} = phoneItem
                            
                            const handleModalEmailClose = () => setShowEmailModal(false);
                            const handleModalEmailShow = () => setShowEmailModal(true);
                            function handleEditEmail(emailDef){
                       
                                setEmailCom(emailDef)
                              
                                handleModalEmailShow()
                            }
           
                            function handleEmailUpdate(e){
                       
                     
                                const object = {
                                    emailID: emailCom.emailID,
                                    emailTypeID: emailT,
                                    emailAddr: email
                                    }
                                    if(emailT === undefined){
                                        object.emailTypeID = emailCom.emailTypeIDdef
                                    }
                                    if(email === undefined){
                                        object.emailAddr = emailCom.emailNumberDef
                                    }
                        
                                Axios.post('https://api-dev.trustnews.ca/updateEmail',object).then(response=>{
                            
                                    window.location.reload(false);
                                })
                            }
                            const handleEmailChange = (e) => {
                        
                                const emailNum = e.target.value
                                setEmail(emailNum)
                              }
                            const handleEmailTypeChange = (e) => {
                 
                                const emailT = e.target.value
                                setEmailT(emailT)
                              }

                              function deleteEmailAddress (dat){
                                let today = new Date();

                                let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                               
                                Axios.post('https://api-dev.trustnews.ca/deactivateProfile',{
                                    target:'email',
                                    idField:'emailID',
                                    ID:dat.emailID,
                                    reason: 'Not in use',
                                    date: currentDate

                                }).then(response =>{
                                 
                                    window.location.reload(false);
                                })
                            }  


                                return(
                                    <div className="email-wrapper" key={emailID}>
                                        <p className='profile-detail-black detail-email-desc'>{emailType}</p>
                                        <p className='profile-detail-black detail-email-address'>{emailAddr}</p>

                                        <div style={{cursor:"pointer"}} value='1' onClick={() => handleEditEmail({emailID:emailID,
                                        emailTypeDef:emailType,emailNumberDef:emailAddr,emailTypeIDdef:emailTypeID})}>
                                            <svg className='profile-edit-btn' width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/>
                                            </svg>
                                        </div>
                                        <div style={{cursor:"pointer"}} onClick={() => deleteEmailAddress({emailID:emailID})}>
                                            <svg className='profile-trash-btn' width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896
                                                2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448
                                                1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>
                                            </svg>
                                        </div>
                                        <Modal className='update-email-modal profile-info-modal' show={modalEmailShow} onHide={handleModalEmailClose}>
                                            <p className='modal-title'>UPDATE EMAIL</p>
                                            <div className='select-email modal-select'>
                                                <p>email type</p>
                                                <select name="emailTypeID" onChange={handleEmailTypeChange} defaultValue={emailCom.emailTypeIDdef}>
                                                    <option value="1">Primary</option>
                                                    <option value="2">Alternate</option>
                                                    <option value="3">Emergency</option>
                                                    <option value="4">Billing</option>
                                                    <option value="5">Private</option>
                                                </select>
                                            </div>

                                            <div className='input-email modal-input'>
                                                <p>email address</p>
                                                <input type='text' defaultValue={emailCom.emailNumberDef} name="emailNumber" onChange={handleEmailChange}/>
                                            </div>
                                           
                                            <Button className='primary-red' variant="primary" onClick={handleModalEmailClose}>
                                                Close
                                            </Button>
                                            <Button className='secondary-blue' variant="secondary" onClick={handleEmailUpdate}>
                                                Update
                                            </Button>
                                        </Modal>
                                    </div>
                                
                                )
                            })}
                                <div className='profile-add-btn'>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                            </svg>
                            <p style={{cursor:"pointer"}} onClick={handleAddEmail}>add new email</p>
                                <Modal className='add-email-modal profile-info-modal' show={modalAddEmailShow} onHide={handleModalAddEmailClose}>
                                    <p className='modal-title'>ADD NEW EMAIL</p>
                                    <div className='select-email modal-select'>
                                        <p>email type</p>
                                        <select name="phoneTypeID" onChange={handleEmailTypeAddChange}>
                                            <option value="1">Primary</option>
                                            <option value="2">Alternate</option>
                                            <option value="3">Cell</option>
                                            <option value="4">Emergency</option>
                                            <option value="5">Billing</option>
                                            <option value="6">Private</option>
                                        </select>
                                    </div>

                                    <div className='input-email modal-input'>
                                        <p>email address</p>
                                        <input type='text' name="phoneNumber" onChange={handleEmailNumAddChange}/>
                                    </div>

                                    <Button className='primary-red' variant="primary" onClick={handleModalAddEmailClose}>
                                        Close
                                    </Button>
                                    <Button className='secondary-blue' variant="secondary" onClick={handleEmailAdd}>
                                        Add
                                    </Button>
                                </Modal>
                        </div>
               
                    </div>
                    <div className='profile-contact-address'>

                 
                        
                                <p className='profile-detail-red'>address</p>
                    
                            
                            {userinfo.address.map((addressItem)=>{
                                const {addressID, addressType, streetAddress, unitInfo, city, province, postal, country,addressTypeID} = addressItem
                            
                                const handleModalAddressClose = () => setShowAddressModal(false);
                                const handleModalAddressShow = () => setShowAddressModal(true);
                                function handleEditAddress(addressDef){
                                    
                                    setAddressCom(addressDef)
                            
                                    handleModalAddressShow()
                                }
                       
                                function handleAddressUpdate(e){
                              

                                    const object = {
                                        addressID:addressCom.addressID,
                                        addressTypeID:addressT,
                                        streetAddress:streetAddressN,
                                        unitInfo:unitInfoN,
                                        city:cityN, 
                                        province:provinceN,
                                        postal:postalN,
                                        country:countryN
                                        }
                                        if(addressT=== undefined){
                                            object.addressTypeID = addressCom.addressTypeIDdef
                                        }
                                        if(streetAddressN === undefined){
                                            object.streetAddress = addressCom.addressNumberDef
                                        }
                                        if(unitInfoN === undefined){
                                            object.unitInfo = addressCom.unitInfoDef
                                        }
                                        if(cityN === undefined){
                                            object.city = addressCom.cityDef
                                        }
                                        if(provinceN === undefined){
                                            object.province = addressCom.provinceDef
                                        }
                                        if(postalN === undefined){
                                            object.postal = addressCom.postalDef
                                        }
                                        if(countryN === undefined){
                                            object.country = addressCom.countryDef
                                        }

                     
                                    Axios.post('https://api-dev.trustnews.ca/updateAddress',object
                                    ).then(response=>{
                                    
                                        window.location.reload(false);
                                    })
                                }
                            

                                const handleAddressTypeIdChange = (e) => {
                                    const dat = e.target.value
                                    setAddressT(dat)
                                }
                                const handleStreetAddressChange = (e) => {
                                    const dat = e.target.value
                                    setStreetAddress(dat)
                                }
                                const handleCountryChange = (e) => {
                                    const dat = e.target.value
                                    setCountry(dat)
                                }
                                const handlePostalChange = (e) => {
                                    const dat = e.target.value
                                    setPostal(dat)
                                }
                                const handleProvinceChange = (e) => {
                                    const dat = e.target.value
                                    setProvince(dat)
                                }
                                const handleCityChange = (e) => {
                                    const dat = e.target.value
                                    setCity(dat)
                                }
                                const handleUnitInfoChange = (e) => {
                                    const dat = e.target.value
                                    setUnitInfo(dat)
                                }

                                function deleteAddress (dat){
                                    let today = new Date();
    
                                    let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                                   
                                    Axios.post('https://api-dev.trustnews.ca/deactivateProfile',{
                                        target:'address',
                                        idField:'addressID',
                                        ID:dat.addressID,
                                        reason: 'Not in use',
                                        date: currentDate
    
                                    }).then(response =>{
                                
                                        window.location.reload(false);
                                    })
                                    // window.location.reload(false);
                                } 
                                return(
                                    <div className="address-wrapper" key={addressID}>
                                        <p className='profile-detail-black detail-address-desc'>{addressType}</p>
                                        <p className='profile-detail-black detail-address-postal'>{postal}</p>
                                        <p className='profile-detail-black detail-address-prov'>{country}</p>
                                        <p className='profile-detail-black detail-address-city'>{city}</p>
                                        <p className='profile-detail-black detail-address-st'>{streetAddress} {unitInfo} </p>
                                        <div style={{cursor:"pointer"}} value='1' onClick={() => handleEditAddress({addressID:addressID,
                                        addressTypeDef:addressType,addressNumberDef:streetAddress,addressTypeIDdef:addressTypeID,unitInfoDef:unitInfo,cityDef:city,provinceDef: province,postalDef:postal,countryDef:country})}>
                                            <svg className='address-edit-btn' width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/>
                                            </svg>
                                        </div>
                                        <div style={{cursor:"pointer"}} onClick={() => deleteAddress({addressID:addressID})}>
                                            <svg className='address-trash-btn' width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896
                                                2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448
                                                1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>
                                            </svg>
                                        </div>
                                        <Modal className='update-address-modal profile-info-modal' show={modalAddressShow} onHide={handleModalAddressClose}>
                                            <p className='modal-title'>UPDATE ADDRESS</p>
                                            <div className='select-address modal-select'>
                                                <p>address type</p>
                                                <select name="addressTypeID" onChange={handleAddressTypeIdChange} defaultValue={addressCom.addressTypeIDdef}>
                                                    <option value="1">Primary</option>
                                                    <option value="2">Alternate</option>
                                                    <option value="3">Emergency</option>
                                                    <option value="4">Billing</option>
                                                    <option value="5">Private</option>
                                                </select>
                                            </div>
                                            
                                            <div className='input-address modal-input'>
                                                <div className='address-number-modal'>
                                                    <p>address number</p>
                                                    <input type='text' defaultValue={addressCom.addressNumberDef} name="streetAddress" onChange={handleStreetAddressChange}/>
                                                </div>
                                                <div className='address-city-modal'>
                                                    <p>city</p>
                                                    <input type='text' defaultValue={addressCom.cityDef} name="city" onChange={handleCityChange}/>
                                                </div>
                                                <div className='address-province-modal'>
                                                    <p>province</p>
                                                    <input type='text' defaultValue={addressCom.provinceDef} name="province" onChange={handleProvinceChange}/>
                                                </div>
                                                <div className='address-country-modal'>
                                                    <p>country</p>
                                                    <input type='text' defaultValue={addressCom.countryDef} name="country" onChange={handleCountryChange}/>
                                                </div>
                                                <div className='address-postal-modal'>
                                                    <p>postal code</p>
                                                    <input type='text' defaultValue={addressCom.postalDef} name="postal" onChange={handlePostalChange}/>
                                                </div>
                                                <div className='address-unit-modal'>
                                                    <p>unit</p>
                                                    <input type='text' defaultValue={addressCom.unitInfoDef} name="unitInfo" onChange={handleUnitInfoChange}/>
                                                </div>
                                            </div>
                                         
                                        <Button className='primary-red' variant="primary" onClick={handleModalAddressClose}>
                                            Close
                                        </Button>
                                        <Button className='secondary-blue' variant="secondary" onClick={handleAddressUpdate}>
                                            Update
                                        </Button>
                                        </Modal>
                                    </div>
                                
                                )
                            })}
                            <div className='profile-add-btn'>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                            </svg>
                            <p style={{cursor:"pointer"}} onClick={handleAddAddress}>add new address</p>
                            <Modal className='add-address-modal profile-info-modal' show={modalAddAddressShow} onHide={handleModalAddAddressClose}>
                                <p className='modal-title'>ADD NEW ADDRESS</p>
                                <div className='select-address modal-select'>
                                    <p>address type</p>
                                    <select name="addressTypeID" onChange={handleAddressTypeIdChangeAdd}>
                                        <option value="1">Primary</option>
                                        <option value="2">Alternate</option>
                                        <option value="3">Emergency</option>
                                        <option value="4">Billing</option>
                                        <option value="5">Private</option>
                                    </select>
                                </div>

                                <div className='input-address modal-input'>
                                    <div className='address-number-modal'>
                                        <p>address number</p>
                                        <input type='text' name="streetAddress" onChange={handleStreetAddressChangeAdd}/>
                                    </div>
                                    <div className='address-city-modal'>
                                        <p>city</p>
                                        <input type='text' name="city" onChange={handleCityChangeAdd}/>
                                    </div>
                                    <div className='address-province-modal'>
                                        <p>province</p>
                                        <input type='text' name="province" onChange={handleProvinceChangeAdd}/>
                                    </div>
                                    <div className='address-country-modal'>
                                        <p>country</p>
                                        <input type='text'name="country" onChange={handleCountryChangeAdd}/>
                                    </div>
                                    <div className='address-postal-modal'>
                                        <p>postal code</p>
                                        <input type='text' name="postal" onChange={handlePostalChangeAdd}/>
                                    </div>
                                    <div className='address-unit-modal'>
                                        <p>unit</p>
                                        <input type='text' name="unitInfo" onChange={handleUnitInfoChangeAdd}/>
                                    </div>
                                </div>
                                            
                                        <Button className='primary-red' variant="primary" onClick={handleModalAddAddressClose}>
                                            Close
                                        </Button>
                                        <Button className='secondary-blue' variant="secondary" onClick={handleAddressAdd}>
                                            Add
                                        </Button>
                            </Modal>
                        </div>
                    </div>
                </div>
                {/* Next feature */}
                {/* <Link style={{textDecoration:'none',color:'#489FB3'}} to="/profile/changepw">
                    <p className='profile-links link-change-pw'>change password</p>
                </Link>
                <Link style={{textDecoration:'none',color:'#489FB3'}} to="/profile/deactivate-account">
                    <p className='profile-links'>deactivate account</p>
                </Link> */}
            </div>
        
        </div>
        }
    </div>
    )
}

export default Profile;