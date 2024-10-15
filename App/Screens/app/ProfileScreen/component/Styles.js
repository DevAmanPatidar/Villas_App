import { StyleSheet } from 'react-native';
import { COMMON_INPUT_COLOR, OTHER_BUTTON_COLOR, COMMON_COLOR_CODE } from '../../../../Utils/Constants';

const Styles = StyleSheet.create({
    TopContainer: {
        marginLeft: 9,
        marginRight: 9,
        marginTop: 9,
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountInfo: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 18,
        width: 250,
        justifyContent: 'space-around',
    },
    Edit: {
        alignItems: 'center',
        marginTop: 9,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    Button: {
        backgroundColor: OTHER_BUTTON_COLOR,
        borderWidth: 0.5,
        width: '79%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
        borderRadius: 9
    },
    ManageAcc: {
        backgroundColor: OTHER_BUTTON_COLOR,
        borderBottomWidth: 0.5,
        width: '90%',
        height: 54,
        alignItems: 'center',
        marginBottom: 2,
        marginTop: 9,
        flexDirection: 'row'
    },
    Buttons: {
        backgroundColor: OTHER_BUTTON_COLOR,
        width: '90%',
        alignItems: 'center',
        height: 54,
        marginBottom: 2,
        marginTop: 9,
        flexDirection: 'row'
    },
    Input: {
        backgroundColor: COMMON_INPUT_COLOR,
        borderBottomColor: COMMON_COLOR_CODE,
        width: "90%",
        alignItems: 'center',
        marginTop: 9,
        borderRadius: 10,
        flexDirection: 'row'
    },
    Logout: {
        flex: 1,
        marginTop: 18,
        width: '81%'
    }
})
export default Styles;