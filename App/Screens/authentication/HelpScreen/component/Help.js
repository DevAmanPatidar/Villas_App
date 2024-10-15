import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import Styles from './Styles';
import CommonStyles from '../../../../Utils/CommonStyles';
import Header from '../../../../Components/Header';

const Help = () => {
    return (
        <View style={CommonStyles.Container}>
            <Header
                Lebel={'Help'}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
        </View>
    )
}
export default Help;