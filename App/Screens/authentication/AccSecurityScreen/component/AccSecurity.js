import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import Styles from './Styles';
import CommonStyles from '../../../../Utils/CommonStyles';
import Header from '../../../../Components/Header';

const AccountSecurity = () => {
    return (
        <View style={CommonStyles.Container}>
            <Header
                Lebel={'Account Security'}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
        </View>
    )
}
export default AccountSecurity;