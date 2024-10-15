import React from 'react';
import Verification from './component/Verification';

const VerificationView=({ navigation })=>{
    const navtoLogin=()=>{
        navigation.navigate('LoginScreen')
    }
    return(
        <Verification
        navtoLogin={navtoLogin}
        />
    )
}
export default VerificationView;