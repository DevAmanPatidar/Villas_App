import React from 'react';
import { KeyboardAvoidingView, View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import CommonStyles from '../../../../Utils/CommonStyles';
import Header from '../../../../Components/Header';

const AccountPrivacy = () => {
    return (
        <View style={CommonStyles.Container}>
            <Header
                Lebel={'Account Privacy'}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
        </View>
    )
}
export default AccountPrivacy;