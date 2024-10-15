import React, { useEffect } from 'react'
import { View, Image, } from 'react-native';

const Logo = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 5000);
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../Assets/AppLogo.png')} />
        </View>
    )
}
export default Logo;