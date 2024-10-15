import React,{useState} from 'react';
import EditProfile from './component/EditProfile';

const EditProfileView=({navigation})=>{
    const [screen, setScreen] = useState(1)
    const [loginData, setLoginData ]=useState({
        Name:"",
        Username:"",
        Bio:"",
        Website:"",
        PhoneNumber:"",
        Email:"",
        DoB:"",
        Gender:"",
        CurrentPassword:"",
        NewPassword:"",
        ConfirmPassword:""
    })
    const navtoPersnlInfo=()=>{
        setScreen(2)
    }
    const navtoViewerSettn=()=>{
        setScreen(3)
    }
    const OnpressBack = () => {
        navigation.goBack(null);
    };
    const OnpressUpdate = () => {
        navigation.navigate('EditProfileScreen')
    };
    return(
        <EditProfile
        loginData={loginData}
        setLoginData={setLoginData}
        screen={screen}
        setScreen={setScreen}
        navtoPersnlInfo={navtoPersnlInfo}
        navtoViewerSettn={navtoViewerSettn}
        OnpressBack={OnpressBack}
        OnpressUpdate={OnpressUpdate}
        />
    )
}
export default EditProfileView;