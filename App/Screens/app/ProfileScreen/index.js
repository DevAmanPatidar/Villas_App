import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, Image, Text, ScrollView,Alert } from 'react-native';
import Profile from './component/Profile';
import CommonStyles from '../../../Utils/CommonStyles';
import {
    COMMON_INPUT_COLOR, INPUT_TEXT_COLOR, TEXT_COLOR_CODE, WHITE_COLOR_CODE,

} from '../../../Utils/Constants';

function TabView({ state, descriptors, navigation }) {
    const [loginData, setLoginData] = useState({
        email: "",
        phnNumber: "",
        bio: "",
        name: "",
        search:"",
    })

    const navtoEditProfile = () => {
        navigation.navigate('EditProfileScreen')
    }
    const navtoSettingScreen = () => {
        navigation.navigate('SettingScreen')
    }
    const navtoAccPrivacy=()=>{
        navigation.navigate('AccPrivacyScreen')
    }
    const navtoAccSecurity=()=>{
        navigation.navigate('AccSecurityScreen')
    }
    const navtoChangePass=()=>{
        navigation.navigate('ChangePassScreen')
    }
    const navtoDataUsage=()=>{
        navigation.navigate('DataUsageScreen')
    }
    const navtoNotification=()=>{
        navigation.navigate('NotificationScreen')
    }
    const navtoHelp=()=>{
        navigation.navigate('HelpScreen')
    }
    const navtoAbout=()=>{
        navigation.navigate('AboutScreen')
    }
    const navtoSupport=()=>{
        navigation.navigate('SupportScreen')
    }
    const LoginScreen=()=>{
        navigation.navigate('LoginScreen')
    }
    function onPressLogout() {
        Alert.alert(
            "Log Out Configration",
            "Want To Logout",
            [
                {
                    text: "cancels",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
               
                { text: 'ok', onPress: () => LoginScreen() }
            ],
            { cancelable: false }
        );
        
    };
    return (
                <Profile
                    navtoEditProfile={navtoEditProfile}
                    navtoSettingScreen={navtoSettingScreen}
                    loginData={loginData}
                    setLoginData={setLoginData}
                    navtoAccPrivacy={navtoAccPrivacy}
                    navtoAccSecurity={navtoAccSecurity}
                    navtoChangePass={navtoChangePass}
                    navtoDataUsage={navtoDataUsage}
                    navtoNotification={navtoNotification}
                    navtoHelp={navtoHelp}
                    navtoAbout={navtoAbout}
                    navtoSupport={navtoSupport}
                    onPressLogout={onPressLogout}
                />
                
    )
}
export default TabView;
