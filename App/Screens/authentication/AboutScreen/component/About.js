import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import CommonStyles from '../../../../Utils/CommonStyles';
import Header from '../../../../Components/Header';


const About = () => {
    return (
        <View style={CommonStyles.Container}>
           <Header
                Lebel={'About Us'}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
        </View>
    )
}
export default About;