import React, { useState, useRef } from 'react';
import { KeyboardAvoidingView, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Styles from './Styles';
import Header from '../../../../Components/Header';
import {
    COMMON_COLOR_CODE, COMMON_INPUT_COLOR, STYLED_COLOR_CODE,
} from '../../../../Utils/Constants';
import Language from '../../../../Components/Language';
import { IconX, ICON_TYPE } from '../../../../Components/Icons';
import ActionSheet from "react-native-actions-sheet";

let _isReachedTop
const Profile = (props) => {
    const actionSheetRef = useRef();
    const actionSheetScrollRef = actionSheetRef.current?.scrollViewRef;
    function changeScrollEnabled(parent) {
        if (Platform.OS !== 'android') return;
        actionSheetScrollRef?.current?.setNativeProps({
            scrollEnabled: parent,
        });
    }


    const onHasReachedTop = hasReachedTop => {

        if (!hasReachedTop) {
            _isReachedTop = false;
            changeScrollEnabled(!hasReachedTop);
            return;
        }
        _isReachedTop = true;
    };

    return (
        <KeyboardAvoidingView>
            <Header
                Lebel={Language.profile}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />

            <View style={Styles.TopContainer}>
                <TouchableOpacity>
                    <Image style={{ width: 100, height: 100 }}
                        source={require('../../../../Assets/user.png')} />
                </TouchableOpacity>
                <View style={Styles.accountInfo}>
                    <TouchableOpacity activeOpacity={1}
                        style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>18</Text>
                        <Text>{Language.post}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>9</Text>
                        <Text>{Language.followers}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                        style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 18 }}>9</Text>
                        <Text>{Language.following}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ marginTop: 2, marginLeft: 9, width: 381, height: 54 }}>Once your design is ready for some fancy lettering,
                its time to browse the "Villa's" app.The Villa's App has lots of features.</Text>
            <View style={Styles.Edit}>
                <TouchableOpacity style={Styles.Button}
                    onPress={() => props.navtoEditProfile()}>
                    <Text style={{ fontSize: 20, color: COMMON_COLOR_CODE }}>{Language.editProfile}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => actionSheetRef.current?.setModalVisible()}>
                    <Image style={{ width: 36, height: 36 }}
                        source={require('../../../../Assets/setting.png')} />
                </TouchableOpacity>
            </View>
            <ActionSheet initialOffsetFromBottom={0.7}
                containerStyle={{ borderTopLeftRadius: 36, borderTopRightRadius: 36 }}
                ref={actionSheetRef}
                statusBarTranslucent
                onPositionChanged={onHasReachedTop}
                bounceOnOpen={true}
                drawUnderStatusBar={false}
                bounciness={4}
                gestureEnabled={true}
                defaultOverlayOpacity={0.3}>
                <ScrollView keyboardShouldPersistTaps={'always'}
                    scrollEnabled={props.isKeyboard}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps={'always'}>
                    <View style={{ flex: 1, alignItems: 'center', }}>
                        <View style={Styles.Input}>
                            <IconX origin={ICON_TYPE.EVIL_ICONS} name="search"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} />
                            <TextInput
                                value={props.loginData.search}
                                onChangeText={(val) => props.setLoginData({
                                    ...props.loginData,
                                    search: val
                                })}
                                placeholder="Search" />
                        </View>
                        <TouchableOpacity style={Styles.ManageAcc} >
                            <IconX origin={ICON_TYPE.MATERIAL_ICONS} name="switch-account"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <View>
                                <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE }}>Manage Account</Text>
                                <Text>({Language.userName})_amanpatel_</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoAccPrivacy() }}>
                            <IconX origin={ICON_TYPE.ENTYPO} name="lock"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE }}>Account Privacy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoAccSecurity() }}>
                            <IconX origin={ICON_TYPE.MATERIAL_ICONS} name="privacy-tip"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE }}>Account Security</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoChangePass() }}>
                            <IconX origin={ICON_TYPE.FEATHER} name="key"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE }}>Change Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoDataUsage() }}>
                            <IconX origin={ICON_TYPE.MATERIAL_ICONS} name="data-usage"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE }}>Data Usage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoNotification() }}>
                            <IconX origin={ICON_TYPE.IONICONS} name="notifications"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE }}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoHelp() }}>
                            <IconX origin={ICON_TYPE.MATERIAL_ICONS} name="live-help"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE, }}>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoAbout() }}>
                            <IconX origin={ICON_TYPE.MATERIAL_COMMUNITY_ICONS} name="webpack"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE, }}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Buttons}
                            onPress={() => { actionSheetRef.current?.setModalVisible(false); props.navtoSupport() }}>
                            <IconX origin={ICON_TYPE.FONT_AWESOME} name="support"
                                size={27} style={{ paddingRight: 9, paddingLeft: 9 }} color={COMMON_COLOR_CODE} />
                            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE }}>Support</Text>
                        </TouchableOpacity>
                        <View style={Styles.Logout}>
                            <TouchableOpacity onPress={() => { actionSheetRef.current?.setModalVisible(false); props.onPressLogout() }}>
                                <Text style={{ fontSize: 18, color: STYLED_COLOR_CODE }}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ActionSheet>
        </KeyboardAvoidingView>
    )
}
export default Profile;
