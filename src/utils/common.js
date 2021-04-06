import { tsTypeLiteral, isTemplateElement } from "@babel/types"


export const getUserLocal = ()=>{

}
export const getAuth = () =>{
    // console.log(localStorage.getItem('isAuth'))
    return (localStorage.getItem('isAuth') === "true") ? true : false
}
export const getExpirAuth = () =>{
    // console.log(localStorage.getItem('isAuth'))
    const itemStr = localStorage.getItem('isAuth')
    if (!itemStr) {
		return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if(now.getTime()>item.expiry){
        localStorage.removeItem('isAuth')
        return null
    }
    return item.value
}
export const getExpirSec = () =>{
    // console.log(localStorage.getItem('isAuth'))
    const itemStr = localStorage.getItem('secClear')
    if (!itemStr) {
		return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if(now.getTime()>item.expiry){
        localStorage.removeItem('Clear')
        localStorage.removeItem('isAuth')
        return null
    }
    return item.value
}
export const getExpirSuAuth = () =>{
    const itemAuth = localStorage.getItem('isAuth')
    const itemSec = localStorage.getItem('secClear')
    if(!itemAuth || !itemSec){
        return null
    }
    const itemAu= JSON.parse(itemAuth)
    const itemSe= JSON.parse(itemSec)
    const now = new Date()
    if(now.getTime() > itemAu.expiry){
        localStorage.removeItem('isAuth')
        localStorage.removeItem('secClear')
        return null
    }
    return true
}
export const getExpirUser = () =>{
    const itemAuth = localStorage.getItem('isAuth')
    const itemSec = localStorage.getItem('secClear')
    const itemCust = localStorage.getItem('custId')
    if(!itemAuth || !itemSec || !itemCust){
        let object={
            isAuth:false,
            custId:'',
            secClear:''
        };
        return object={
            isAuth:false,
            custId:'',
            secClear:''
        }
    }
    const itemAu= JSON.parse(itemAuth)
    const itemSe= JSON.parse(itemSec)
    const itemCus= JSON.parse(itemCust)
    const now = new Date()
    if(now.getTime() > itemAu.expiry){
        localStorage.removeItem('isAuth')
        localStorage.removeItem('secClear')
        localStorage.removeItem('custId')
        return null
    }else {
        let object={
            isAuth:false,
            custId:'',
            secClear:''
        };
        object.isAuth = itemAu.value
        object.custId = itemCus.value
        object.secClear = itemSe.value
        return object
    }
    
}
export const getSuAuth = () =>{
    // console.log(localStorage.getItem('isAuth'))
    const itemAuth = localStorage.getItem('isAuth')
    const itemSec = localStorage.getItem('secClear')
    const itemCust = localStorage.getItem('custId')
    if(!itemAuth || !itemSec || !itemCust){
        return null
    }
    const itemAu= JSON.parse(itemAuth)
    const itemSe= JSON.parse(itemSec)
    const itemCus= JSON.parse(itemCust)
    const now = new Date()
    if(now.getTime() > itemAu.expiry){
        localStorage.removeItem('isAuth')
        localStorage.removeItem('secClear')
        localStorage.removeItem('custId')
        return null
    }else {
        let object={};
        object.isAuth = itemAu.value
        object.custId = itemCus.value
        object.secClear = itemSe.value
        // return object
        console.log(object)
        return (object.isAuth === true && object.secClear === 10 ) ? true : false
    }
    
}

export const setUserLocal = (isAuth, custId, secClear,ttl) => {

    const now = new Date()
    const Auth = {
        value: isAuth,
        expiry: now.getTime() + ttl
    }
    const Cust = {
        value : custId,
        expiry: now.getTime() + ttl
    }
    const Sec = {
        value : secClear,
        expiry: now.getTime() + ttl
    }
    localStorage.setItem('isAuth', JSON.stringify(Auth));
    localStorage.setItem('custId', JSON.stringify(Cust));
    localStorage.setItem('secClear', JSON.stringify(Sec));
}

export const removeUserLocal = () => {
 
    localStorage.removeItem('isAuth');
    localStorage.removeItem('custId');
    localStorage.removeItem('secClear');

}