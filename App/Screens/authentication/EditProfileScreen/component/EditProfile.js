import React, { Fragment } from 'react';
import { KeyboardAvoidingView, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { IconX, ICON_TYPE } from '../../../../Components/Icons';
import CommonStyles from '../../../../Utils/CommonStyles';
import {
    COMMON_COLOR_CODE, COMMON_INPUT_COLOR, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR,
    COMMON_BUTTON_COLOR, INPUT_TEXT_COLOR, STYLED_COLOR_CODE, TEXT_COLOR_CODE, LOGO_TEXT_COLOR, BLACK_COLOR_CODE
} from '../../../../Utils/Constants';
import Styles from './Styles';
import Language from '../../../../Components/Language';


const EditProfile = (props) => {
    return (
        <KeyboardAvoidingView style={CommonStyles.Container}>
            <View style={Styles.TopContainer}>
                <TouchableOpacity onPress={() => props.OnpressBack()}
                    style={{ borderRightWidth: 1 }}>
                    <IconX origin={ICON_TYPE.FONT_AWESOME} name="remove"
                        color={COMMON_COLOR_CODE} size={36} style={{ paddingLeft: 5, paddingRight: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.OnpressUpdate()}
                style={{ borderLeftWidth: 1 }}>
                    <IconX origin={ICON_TYPE.ENTYPO} name="check"
                        color={COMMON_COLOR_CODE} size={36} style={{ paddingRight: 5, paddingLeft: 5 }} />
                </TouchableOpacity>
            </View>
            {props.screen == 1 ?
                <Fragment>
                    <View style={Styles.MiddleContainer}>
                        <Image style={{ width: 90, height: 90 }} resizeMode="contain"
                            source={require('../../../../Assets/Logo.png')} />
                        <View style={Styles.Inputs}>
                            <TextInput
                                value={props.loginData.Name}
                                onChangeText={(val) => props.setLoginData({
                                    ...props.loginData,
                                    Name: val
                                })}
                                placeholder={Language.name}
                                placeholderTextColor={INPUT_TEXT_COLOR} />
                        </View>
                        <View style={Styles.Inputs}>
                            <TextInput
                                value={props.loginData.Username}
                                onChangeText={(val) => props.setLoginData({
                                    ...props.loginData,
                                    Username: val
                                })}
                                placeholder={Language.userName}
                                placeholderTextColor={INPUT_TEXT_COLOR} />
                        </View>
                        <View style={Styles.Inputs}>
                            <TextInput
                                value={props.loginData.Bio}
                                onChangeText={(val) => props.setLoginData({
                                    ...props.loginData,
                                    Bio: val
                                })}
                                placeholder={Language.bio}
                                placeholderTextColor={INPUT_TEXT_COLOR} />
                        </View>
                        <View style={Styles.Inputs}>
                            <TextInput
                                value={props.loginData.Website}
                                onChangeText={(val) => props.setLoginData({
                                    ...props.loginData,
                                    Website: val
                                })}
                                placeholder={Language.website}
                                placeholderTextColor={INPUT_TEXT_COLOR} />
                        </View>
                        <TouchableOpacity onPress={() => props.navtoPersnlInfo()}
                            style={Styles.Buttons}>
                            <Text style={{ color: INPUT_TEXT_COLOR, margin: 9, }}>{Language.prsnlInfo}</Text>
                            <IconX origin={ICON_TYPE.IONICONS} name="chevron-forward"
                                color={COMMON_BUTTON_COLOR} style={{ paddingRight: 9 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navtoViewerSettn()}
                            style={Styles.Buttons}>
                            <Text style={{ color: INPUT_TEXT_COLOR, margin: 9, }}>{Language.viewrSetting}</Text>
                            <IconX origin={ICON_TYPE.IONICONS} name="chevron-forward"
                                color={COMMON_BUTTON_COLOR} style={{ paddingRight: 9 }} />
                        </TouchableOpacity>
                    </View>
                </Fragment>
                : props.screen == 2 ?
                    <Fragment>
                        <View style={Styles.MiddleContainer}>
                            <View style={{ marginTop: 9, marginBottom: 18, width: 365 , }}>
                                <Text style={{ color: STYLED_COLOR_CODE }}>{Language.note}</Text>
                            </View>
                            <View style={Styles.Inputs}>
                                <TextInput
                                    value={props.loginData.PhoneNumber}
                                    onChangeText={(val) => props.setLoginData({
                                        ...props.loginData,
                                        PhoneNumber: val
                                    })}
                                    placeholder={Language.phoneNumber}
                                    keyboardType="phone-pad"
                                    placeholderTextColor={INPUT_TEXT_COLOR} />
                            </View>
                            <View style={Styles.Inputs}>
                                <TextInput
                                    value={props.loginData.Email}
                                    onChangeText={(val) => props.setLoginData({
                                        ...props.loginData,
                                        Email: val
                                    })}
                                    placeholder={Language.emailId}
                                    keyboardType="email-address"
                                    placeholderTextColor={INPUT_TEXT_COLOR} />
                            </View>
                            <View style={Styles.Inputs}>
                                <TextInput
                                    value={props.loginData.DoB}
                                    onChangeText={(val) => props.setLoginData({
                                        ...props.loginData,
                                        DoB: val
                                    })}
                                    placeholder={Language.birthday}
                                    placeholderTextColor={INPUT_TEXT_COLOR} />
                            </View>
                            <View style={Styles.Inputs}>
                                <TextInput
                                    value={props.loginData.Gender}
                                    onChangeText={(val) => props.setLoginData({
                                        ...props.loginData,
                                        Gender: val
                                    })}
                                    placeholder={Language.gender}
                                    placeholderTextColor={INPUT_TEXT_COLOR} />
                            </View>
                        </View>
                    </Fragment>
                    : props.screen == 3 &&
                    <Fragment>
                        <View style={Styles.MiddleContainer}>
                            <View style={Styles.ViewerStng}>
                                <Text style={{ color: STYLED_COLOR_CODE, }}>{Language.accPrivacy}</Text>
                                <TouchableOpacity>
                                    <Text>{Language.public}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.ViewerStng}>
                                <Text style={{ color: STYLED_COLOR_CODE, }}>{Language.hideStory}</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: TEXT_COLOR_CODE }}>{Language.noOne}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.ViewerStng}>
                                <Text style={{ color: STYLED_COLOR_CODE, }}>{Language.hidePost}</Text>
                                <TouchableOpacity>
                                    <Text>{Language.noOne}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.ViewerStng}>
                                <Text style={{ color: STYLED_COLOR_CODE, }}>{Language.storyRply}</Text>
                                <TouchableOpacity>
                                    <Text>{Language.enable}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.ViewerStng}>
                                <Text style={{ color: STYLED_COLOR_CODE, }}>{Language.stryReaction}</Text>
                                <TouchableOpacity>
                                    <Text>{Language.enable}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.ViewerStng}>
                                <Text style={{ color: STYLED_COLOR_CODE, }}>{Language.activityStatus}</Text>
                                <TouchableOpacity>
                                    <Text>{Language.enable}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Fragment>
            }
        </KeyboardAvoidingView>
    )
}
export default EditProfile;