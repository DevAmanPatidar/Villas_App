import React, { useState } from 'react';
import Login from './component/Login';

const LoginView = ({ navigation }) => {
  const navtoSignup = () => {
    navigation.navigate('SignupScreen')
  }
  const navtoForgotPass=()=>{
    navigation.navigate('ForgotPassScreen')
  }
  const navtoTabMainScreen=()=>{
    navigation.navigate('TabMainScreen')
  }
  const [loginData, setLoginData] = useState({
    emailMobile: "",
    password: "",
  })

  return (
    <Login
    loginData={loginData}
    setLoginData={setLoginData}
    navtoSignup={navtoSignup}
    navtoForgotPass={navtoForgotPass}
    navtoTabMainScreen={navtoTabMainScreen}
    />
  )
}
export default LoginView;
