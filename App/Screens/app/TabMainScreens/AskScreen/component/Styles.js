import { StyleSheet } from 'react-native';
import { COMMON_INPUT_COLOR } from '../../../../../Utils/Constants';

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
})
export default Styles;