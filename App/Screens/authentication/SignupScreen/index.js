import React,{useState} from 'react';
import Signup from './component/Sigup';

const SignupView=({ navigation })=>{
    const navtoLogin=()=>{
       navigation.navigate('LoginScreen')
    }
    const navtoVerification=()=>{
        navigation.navigate('VerificationScreen')
    }
    const [loginData, setLoginData ]=useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        password:"",
        confirmPassword:""
    })
    return(
       <Signup
       navtoVerification={navtoVerification}
       navtoLogin={navtoLogin}
       loginData={loginData}
       setLoginData={setLoginData}
       />
    )
}
export default SignupView