import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE, COMMON_INPUT_COLOR } from '../../../../../Utils/Constants';

const Styles = StyleSheet.create({
    TopContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginLeft: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 54
    },
    Search: {
        backgroundColor: COMMON_INPUT_COLOR,
        width: '90%',
        height: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 27,
        borderRadius: 18,
        marginTop: 9,
        borderWidth: 0.5
    },
    Request: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    Account: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 180,
        height: 45,
        marginLeft: 5,
        backgroundColor: WHITE_COLOR_CODE,
        elevation: 2,
        borderRadius: 10
    },
    MsgRequest: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 45,
        marginLeft: 5,
        backgroundColor: WHITE_COLOR_CODE,
        elevation: 2,
        borderRadius: 10
    },
    Messages: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 72,
    },
})
export default Styles;