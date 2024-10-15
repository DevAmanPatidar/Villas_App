import { StyleSheet } from 'react-native';
import { COMMON_COLOR_CODE, WHITE_COLOR_CODE, OTHER_BUTTON_COLOR ,COMMON_INPUT_COLOR} from '../../../../Utils/Constants';

const Styles = StyleSheet.create({
    TopContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: WHITE_COLOR_CODE,
        height: 54,
        alignItems: 'center'
    },
    MiddleContainer: {
        flex: 1,
        alignItems: 'center'
    },
    Inputs: {
        borderBottomWidth: 0.8,
        borderBottomColor: COMMON_COLOR_CODE,
        width: "85%",
        marginTop: 18,
    },
    Buttons: {
        backgroundColor: OTHER_BUTTON_COLOR,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '87%',
        height: 54,
        marginTop: 18,
        borderRadius: 5,
        flexDirection: 'row'
    },
    ViewerStng: {
        marginTop:18,
        borderRadius: 5,
        width: '87%',
        justifyContent:'center',
        height: 54,
        borderBottomWidth: 0.5,
        borderBottomColor: COMMON_COLOR_CODE,
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
    Button: {
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