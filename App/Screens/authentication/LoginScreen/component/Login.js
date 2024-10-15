import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Modal, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native';
import {
  COMMON_COLOR_CODE, SILVER_COLOR_CODE, STYLED_COLOR_CODE, TEXT_COLOR_CODE, LOGO_TEXT_COLOR,
  FONT_FAMILY_RETINA, FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT, FONT_FAMILY_MEDIUM, FONT_FAMILY_REGULAR, COMMON_BUTTON_COLOR, WHITE_COLOR_CODE
} from '../../../../Utils/Constants';
import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';
import CommonStyles from '../../../../Utils/CommonStyles';
import Styles from './Styles';
import Language from '../../../../Components/Language';
import  { IconX,ICON_TYPE } from '../../../../Components/Icons';
// import LanguageModel from '../../../../Components/LanguageModel';


const Login = (props) => {
  // const [modalVisible, setModalVisible] = useState(false)
  // const languageData = [
  //   {
  //     id: 1,
  //     lngtxt: "Hindi",
  //   },
  //   {
  //     id: 2,
  //     lngtxt: "English",
  //   },
  //   {
  //     id: 3,
  //     lngtxt: "French",
  //   },
  //   {
  //     id: 4,
  //     lngtxt: "Germany",
  //   },
  //   {
  //     id: 5,
  //     lngtxt: "Dutch",
  //   },
  //   {
  //     id: 6,
  //     lngtxt: "Arabic",
  //   },
  //   {
  //     id: 7,
  //     lngtxt: "Haryanwi",
  //   },

  // ];

  // const renderItem = ({ item }) => (
  //   <View style={{ margin: 7, flexDirection:'row', borderBottomWidth: 0.5 ,justifyContent:'space-between' }}>
  //     <Text>
  //       {item.lngtxt}
  //     </Text>
  //     <Image style={{width:20 , height:20 }}
  //     source={require('../../../../Assets/Logo.png')}/>
  //   </View>
  // );

  return (
    <KeyboardAvoidingView style={CommonStyles.Container}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        scrollEnabled={props.isKeyboard}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={'always'}>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            style={Styles.Modal}>
            <Text style={{ fontSize: 18, color: COMMON_COLOR_CODE, fontFamily: FONT_FAMILY_LIGHT }}>{Language.language}</Text>
            <IconX origin={ICON_TYPE.MATERIAL_ICONS} name="keyboard-arrow-down"
            size={24} color={TEXT_COLOR_CODE} />
          </TouchableOpacity>
          <Image resizeMode='center'
            style={{ width: 120, height: 120 }}
            source={require("../../../../Assets/Logo.png")}
          />
          <Text style={{ fontSize: 35, color: TEXT_COLOR_CODE, fontFamily: FONT_FAMILY_MEDIUM }}>{Language.welcome}</Text>
        </View>
        <View style={Styles.SecondFlex}>
          <View style={{ alignItems: 'center' }}>
            <Input
              value={props.loginData.emailMobile}
              onChangeText={(val) => props.setLoginData({
                ...props.loginData,
                emailMobile: val
              })}
              placeholder={Language.emailMobile}
            />
            <Input
              value={props.loginData.password}
              onChangeText={(val) => props.setLoginData({
                ...props.loginData,
                password: val
              })}
              secureType='secureText'
              placeholder={Language.password}
            />

            <TouchableOpacity style={Styles.forgot}
              onPress={() => props.navtoForgotPass()}>
              <Text style={{ color: STYLED_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR, fontSize: 13 }}>{Language.forgotPass}</Text>
            </TouchableOpacity>

            <Button 
            onPress={()=> props.navtoTabMainScreen()}
            buttonText={Language.login} />

          </View>
          <View style={Styles.LastColumn}>
            <Text style={{ color: SILVER_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR }}>{Language.orConnect}</Text>
            <View style={Styles.choices}>
              <TouchableOpacity style={Styles.choose}>
                <IconX origin={ICON_TYPE.FONT_AWESOME} name="facebook-square" color={COMMON_COLOR_CODE} paddingLeft={9}/>
                <Text style={{ color: COMMON_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR, marginTop: 5 }}>{Language.facebook}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.choose}>
               <IconX origin={ICON_TYPE.FONT_AWESOME} name="google-plus-square" color={COMMON_COLOR_CODE} paddingLeft={9}/>
                <Text style={{ color: COMMON_COLOR_CODE, fontFamily: FONT_FAMILY_REGULAR, marginTop: 5 }}>{Language.google}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => props.navtoSignup()}>
              <Text style={{ color: TEXT_COLOR_CODE }}>{Language.noAccount}</Text>
              <Text style={{ color: STYLED_COLOR_CODE, fontSize: 15, fontFamily: FONT_FAMILY_REGULAR, marginTop: 3 }}> {Language.create}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, }}>
          <View style={{ flexDirection: 'row', margin: 15 }}>
            <View style={{ flex: 5.5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 25, fontFamily: FONT_FAMILY_RETINA }}>{Language.language}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ flex: 0.5, }}>
              <Image
                style={{ width: 28, height: 28 }}
                source={require('../../../../Assets/cancel.png')}
              />
            </TouchableOpacity>
            <View>
            </View>
          </View>

          <TouchableOpacity
            // onPress={() => _handleAreaData(item)}
            style={{
              flex: 1, margin: 5, borderBottomWidth: 0.3, borderBottomColor: 'red',
              padding: 8, marginRight: 18,
            }}>
            <View
              style={{ marginLeft: 10, padding: 5 }}>
              <FlatList
                data={languageData}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>

        </View>
      </Modal> */}


    </KeyboardAvoidingView>

  )
}
export default Login;