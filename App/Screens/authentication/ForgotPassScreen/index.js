import React,{useState} from 'react';
import ForgotPass from './component/ForgotPass';

const ForgotPassView=({ navigation })=>{
    const [screen,setScreen]=useState(1)
    const [ loginData , setLoginData]=useState({
         emailMobile:"",
         currentPass:"",
         newPass:"",
         confirmPass:""
    })
    const navtoVerification=()=>{
    setScreen(2)
    }
    const navtoLogin=()=>{
        navigation.navigate('LoginScreen')
    }
    return(
        <ForgotPass
        screen={screen}
        setScreen={setScreen}
        navtoVerification={navtoVerification}
        loginData={loginData}
        setLoginData={setLoginData}
        navtoLogin={navtoLogin}
        />
    )
}
export default ForgotPassView;