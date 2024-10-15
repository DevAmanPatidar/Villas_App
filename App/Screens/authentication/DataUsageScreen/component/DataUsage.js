import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import CommonStyles from '../../../../Utils/CommonStyles';
import Header from '../../../../Components/Header';

const DataUsage = () => {
    return (
        <View style={CommonStyles.Container}>
            <Header
                Lebel={'Data Usage'}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
        </View>
    )
}
export default DataUsage;