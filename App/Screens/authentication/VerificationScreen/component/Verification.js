import React from 'react';
import { KeyboardAvoidingView, View, Text, ImageBackground, useWindowDimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import {
    TEXT_COLOR_CODE, SILVER_COLOR_CODE, STYLED_COLOR_CODE, COMMON_COLOR_CODE, LOGO_TEXT_COLOR, COMMON_INPUT_COLOR,WHITE_COLOR_CODE,
    FONT_FAMILY_RETINA,FONT_FAMILY_BOLD,
    FONT_FAMILY_LIGHT,FONT_FAMILY_MEDIUM,FONT_FAMILY_REGULAR, 
} from '../../../../Utils/Constants';
import CommonStyles from '../../../../Utils/CommonStyles';
import Language from '../../../../Components/Language';
import Button from '../../../../Components/Button';
import Styles from './Styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Header from '../../../../Components/Header';


const Verification = (props) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    return (
        <KeyboardAvoidingView style={CommonStyles.Container}>
            <ScrollView keyboardShouldPersistTaps={'always'}
                scrollEnabled={props.isKeyboard}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps={'always'}>
                <View style={{ width: windowWidth, height: windowHeight / 3 }}>
                    <ImageBackground source={require('../../../../Assets/textIn.png')}
                        style={CommonStyles.ImageStyled}>
                        <View style={{ paddingBottom: 27, paddingLeft: 15 }}>
                            <Text style={{ fontFamily: FONT_FAMILY_MEDIUM, fontSize: 27, color: LOGO_TEXT_COLOR }}>{Language.verification}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{ flex: 1, }}>
                    <View style={{ alignItems: 'center', marginTop: 18 }}>
                        <Text style={{ color: SILVER_COLOR_CODE, fontFamily:FONT_FAMILY_REGULAR,fontSize: 18, }}>{Language.enterCode}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: SILVER_COLOR_CODE,fontFamily:FONT_FAMILY_REGULAR }}>{Language.yourNumber}</Text>
                            <Text style={{ color: STYLED_COLOR_CODE,  fontFamily: FONT_FAMILY_REGULAR }}> +91 7471131939</Text>
                        </View>
                        <View style={Styles.OTPflex}>
                            <OTPInputView
                                inputCount={6} />
                        </View>
                        <TouchableOpacity style={Styles.Resend}>
                            <Text style={{ color: STYLED_COLOR_CODE, fontFamily:FONT_FAMILY_REGULAR }}>{Language.resendCode}</Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        onPress={() => props.navtoLogin()}
                        buttonText={Language.submit} />

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Verification;