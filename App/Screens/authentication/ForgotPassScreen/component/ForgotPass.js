import React, { Fragment, useState } from 'react';
import { KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity, ImageBackground, useWindowDimensions } from 'react-native';
import Header from '../../../../Components/Header';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import Language from '../../../../Components/Language';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  COMMON_COLOR_CODE, STYLED_COLOR_CODE, COMMON_BUTTON_COLOR, LOGO_TEXT_COLOR, SILVER_COLOR_CODE,
  FONT_FAMILY_RETINA, FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT, FONT_FAMILY_MEDIUM, FONT_FAMILY_REGULAR
} from '../../../../Utils/Constants';
import CommonStyles from '../../../../Utils/CommonStyles'
import Styles from './Styles';

const ForgotPass = (props) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <KeyboardAvoidingView style={CommonStyles.Container}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        scrollEnabled={props.isKeyboard}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={'always'}>
        {props.screen == 1 ?
          <Fragment>
            <View style={{ width: windowWidth, height: windowHeight / 3 }}>
              <ImageBackground
                source={require('../../../../Assets/textIn.png')}
                style={CommonStyles.ImageStyled}>
                <View style={{ paddingBottom: 27, paddingLeft: 70 }}>
                  <Text style={{ fontFamily: FONT_FAMILY_MEDIUM, fontSize: 27, color: LOGO_TEXT_COLOR }}>{Language.forgotPassword}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ flex: 1, }}>
              <View style={Styles.EmailPhone}>
                <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: STYLED_COLOR_CODE, fontSize: 14 }}>{Language.enterPhnEml}</Text>
                <Input
                  value={props.loginData.emailMobile}
                  onChangeText={(val) => props.setLoginData({
                    ...props.loginData,
                    emailMobile: val
                  })}
                  placeholder={Language.emailMobile}
                />
              </View>
              <View style={Styles.Verify}>
                <Button
                  onPress={() => props.navtoVerification()}
                  buttonText={Language.verify}
                />
              </View>
            </View>
          </Fragment>
          : props.screen == 2 ?
            <Fragment>
              <View style={{ width: windowWidth, height: windowHeight / 3 }}>
                <ImageBackground source={require('../../../../Assets/textIn.png')}
                  style={CommonStyles.ImageStyled}>
                  <View style={{ paddingBottom: 27, paddingLeft: 15 }}>
                    <Text style={{ fontFamily: FONT_FAMILY_MEDIUM, fontSize: 27, color: LOGO_TEXT_COLOR }}>{Language.verification}</Text>
                  </View>
                </ImageBackground>
              </View>

              <View style={{ flex: 1, }}>
                <View style={Styles.EnterCode}>
                  <Text style={{ color: SILVER_COLOR_CODE, fontSize: 18, fontFamily: FONT_FAMILY_REGULAR }}>{Language.enterCode}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: SILVER_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR }}>{Language.onNumOrEmail}</Text>
                  </View>
                  <View style={Styles.EnterOTP}>
                    <OTPInputView
                      inputCount={6} />
                  </View>
                  <TouchableOpacity style={Styles.Resend}>
                    <Text style={{ color: STYLED_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR }}>{Language.resendCode}</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  onPress={() => props.setScreen(3)}
                  buttonText={Language.submit} />
              </View>

            </Fragment>
            : props.screen == 3 && 
            <Fragment>
              <Header
                Lebel={Language.changePassword}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
              <View style={Styles.PasswordColoum}>
                <Input
                  value={props.loginData.currentPass}
                  onChangeText={(val) => props.setLoginData({
                    ...props.loginData,
                    currentPass: val
                  })}
                  secureType='secureText'
                  placeholder={Language.currentPassword} />
                <Input
                  value={props.loginData.newPass}
                  onChangeText={(val) => props.setLoginData({
                    ...props.loginData,
                    newPass: val
                  })}
                  secureType='secureText'
                  placeholder={Language.NewPassword} />
               <Input
                  value={props.loginData.confirmPass}
                  onChangeText={(val) => props.setLoginData({
                    ...props.loginData,
                    confirmPass: val
                  })}
                  secureType='secureText'
                  placeholder={Language.confrmPass} />
              </View>
              <View style={Styles.Submit}>
                <Button
                onPress={()=> props.navtoLogin()}
                  buttonText={Language.submit}
                />
              </View>
            </Fragment>
        }
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default ForgotPass;