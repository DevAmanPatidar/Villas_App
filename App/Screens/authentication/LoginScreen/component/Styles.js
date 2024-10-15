import { StyleSheet } from 'react-native';
import { WHITE_COLOR_CODE } from '../../../../Utils/Constants';

const Styles = StyleSheet.create({
    forgot: {
        width: '85%',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    choices: {
        marginTop: 15,
        width: '65%',
        height: 50,
        justifyContent: 'space-around', flexDirection: 'row'
    },
    choose: {
        backgroundColor: WHITE_COLOR_CODE,
        width: '48%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    Modal: {
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth:0.2,
        width: 120,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SecondFlex: {
        flex: 4,
        justifyContent: 'space-between'
    },
    LastColumn: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 5
    }
})
export default Styles;