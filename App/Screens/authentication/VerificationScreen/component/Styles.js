import { StyleSheet } from 'react-native';
import { COMMON_COLOR_CODE } from '../../../../Utils/Constants';

const Styles = StyleSheet.create({
    OTPMainStyle: {
        width: '85%',
        height: 80,
        marginLeft: 10
    },
    underlineStyleBase: {
        width: 40,
        height: 40,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#a9a9a9',
        color: '#000',
        fontSize: 15
    },
    underlineStyleHighLighted: {
        borderColor: COMMON_COLOR_CODE,
        borderBottomWidth: 1
    },
    OTP: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
    },
    OTPflex: {
        width: '80%',
        height: '25%',
        marginTop: 15
    },
    Resend: {
        width: '85%',
        alignItems: 'flex-end',
        marginTop: 9
    }
})
export default Styles;