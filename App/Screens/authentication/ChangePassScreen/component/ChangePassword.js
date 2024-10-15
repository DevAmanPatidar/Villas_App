import React from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native';
import Styles from './Styles';
import CommonStyles from '../../../../Utils/CommonStyles';
import Header from '../../../../Components/Header';

const ChangePassword = () => {
    return (
        <View style={CommonStyles.Container}>
            <Header
                Lebel={'Change Password'}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
        </View>
    )
}
export default ChangePassword;