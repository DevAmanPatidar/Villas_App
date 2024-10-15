import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CommonStyles from '../../../../Utils/CommonStyles';
import {
  TEXT_COLOR_CODE, STYLED_COLOR_CODE, LOGO_TEXT_COLOR, SILVER_COLOR_CODE,
  FONT_FAMILY_RETINA, FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT, FONT_FAMILY_MEDIUM, FONT_FAMILY_REGULAR
} from '../../../../Utils/Constants';
import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';
import Language from '../../../../Components/Language';
import Styles from './Styles';
import { ICON_TYPE, IconX } from '../../../../Components/Icons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Signup = (props) => {
  return (
    <KeyboardAvoidingView style={CommonStyles.Container}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        scrollEnabled={props.isKeyboard}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={'always'}>
        <View style={Styles.FirstContainer}>
          <Image resizeMode='center'
            style={{ width: 120, height: 120 }}
            source={require("../../../../Assets/Logo.png")}
          />
          <Text style={{ fontSize: 20, color: TEXT_COLOR_CODE, fontWeight: 'bold', fontFamily: FONT_FAMILY_MEDIUM }}>{Language.createAcc}</Text>
        </View>
        <View style={Styles.SecondFlex}>
          <View style={{ alignItems: 'center' }}>
            <View style={Styles.NameScene}>
              {/* <IconX origin={ICON_TYPE.MATERIAL_ICONS} name="keyboard-arrow-down"
            size={24} color={TEXT_COLOR_CODE} /> */}
              <Input
                containerStyle={{ width: '48%' }}
                value={props.loginData.firstName}
                onChangeText={(val) => props.setLoginData({
                  ...props.loginData,
                  firstName: val
                })}
                placeholder={Language.firstName}
                textInputWithImage={true}
                iconName="user-circle"
                leftInputImge={ICON_TYPE.FONT_AWESOME}
              />
              <Input
                containerStyle={{ width: '48%' }}
                value={props.loginData.lastName}
                onChangeText={(val) => props.setLoginData({
                  ...props.loginData,
                  lastName: val
                })}
                placeholder={Language.lastName}
                textInputWithImage={true}
                iconName="user-circle"
                leftInputImge={ICON_TYPE.FONT_AWESOME}
              />
            </View>
            <Input
              value={props.loginData.phoneNumber}
              onChangeText={(val) => props.setLoginData({
                ...props.loginData,
                phoneNumber: val
              })}
              placeholder={Language.phoneNumber}
              keyboardType="phone-pad"
              textInputWithImage={true}
              leftInputImge={ICON_TYPE.FEATHER}
              iconName="smartphone"
            />
            <Input
              value={props.loginData.password}
              onChangeText={(val) => props.setLoginData({
                ...props.loginData,
                password: val
              })}
              secureTextEntry={true}
              placeholder={Language.password}
              textInputWithImage={true}
              leftInputImge={ICON_TYPE.MATERIAL_ICONS}
              iconName="security"
            />
            <Input
              value={props.loginData.confirmPassword}
              onChangeText={(val) => props.setLoginData({
                ...props.loginData,
                confirmPassword: val
              })}
              secureTextEntry={true}
              placeholder={Language.confrmPass}
              textInputWithImage={true}
              leftInputImge={ICON_TYPE.MATERIAL_ICONS}
              iconName="security"
            />

          </View>
          <Button
            buttonText={Language.getVerify}
            onPress={() => props.navtoVerification()}
          />
          <TouchableOpacity style={Styles.AlreadyAcc}
            onPress={() => props.navtoLogin()}
          >
            <Text>{Language.alreadyHave}</Text>
            <Text style={{ color: STYLED_COLOR_CODE, fontSize: 15, fontFamily: FONT_FAMILY_REGULAR, }}>{Language.login}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default Signup;