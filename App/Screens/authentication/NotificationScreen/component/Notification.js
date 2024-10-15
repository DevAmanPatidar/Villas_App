import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';
import CommonStyles from '../../../../Utils/CommonStyles';
import Header from '../../../../Components/Header';

const Notification = () => {
    return (
        <View style={CommonStyles.Container}>
            <Header
                Lebel={'Notifications'}
                rightImgStyle={{ width: 35, height: 35 }}
                rightImg={require('../../../../Assets/Logo.png')} />
        </View>
    )
}
export default Notification;