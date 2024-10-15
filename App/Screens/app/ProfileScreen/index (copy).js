import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, Image, Text, ScrollView,Alert } from 'react-native';
import Profile from './component/Profile';
import CommonStyles from '../../../Utils/CommonStyles';
import {
    COMMON_INPUT_COLOR, INPUT_TEXT_COLOR, TEXT_COLOR_CODE, WHITE_COLOR_CODE,

} from '../../../Utils/Constants';

function TabView({ state, descriptors, navigation }) {
    const [show, setShow] = useState(1)
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
        <View style={CommonStyles.BackgroundColor}>
            <ScrollView style={{  flexGrow:1}}>
                <Profile
                    navtoEditProfile={navtoEditProfile}
                    navtoSettingScreen={navtoSettingScreen}
                    show={show}
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
                <View style={{ height: 54, flexDirection: "row", backgroundColor: WHITE_COLOR_CODE, }}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };
                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <View key={index} style={{
                                width: "50%",
                            }}>
                                <TouchableOpacity
                                    accessibilityRole="button"
                                    accessibilityStates={isFocused ? ['selected'] : []}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    testID={options.tabBarTestID}
                                    onPress={onPress}
                                    onLongPress={onLongPress}
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRightWidth: 0.5,
                                    }}
                                >
                                    {
                                        label === 'PostScreen' ?
                                            isFocused ?
                                                <View>
                                                    <Image
                                                        style={{ height: 27, width: 27, alignSelf: "center" }}
                                                        source={require('../../../Assets/POST.png')} />
                                                </View>
                                                :
                                                <View>
                                                    <Image
                                                        style={{ height: 27, width: 27, alignSelf: "center" }}
                                                        source={require('../../../Assets/Post.png')} />
                                                </View>

                                            : label === 'TagScreen' ?
                                                isFocused ?
                                                    <View>
                                                        <Image
                                                            style={{ height: 27, width: 27, alignSelf: "center" }}
                                                            source={require('../../../Assets/TAG.png')} />
                                                    </View>
                                                    :
                                                    <View>
                                                        <Image
                                                            style={{ height: 27, width: 27, alignSelf: "center" }}
                                                            source={require('../../../Assets/Tag.png')} />
                                                    </View>

                                                : null
                                    }

                                </TouchableOpacity>

                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
export default TabView;
