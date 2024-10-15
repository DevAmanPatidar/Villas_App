import { StyleSheet } from 'react-native';
import {
    COMMON_BUTTON_COLOR, COMMON_INPUT_COLOR, COMMON_COLOR_CODE,
    FONT_FAMILY_REGULAR, LOGO_TEXT_COLOR,WHITE_COLOR_CODE
} from '../../../../../Utils/Constants';

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
    Category: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COMMON_INPUT_COLOR,
        flexDirection: 'row',
        height: 54,
        marginTop: 9,
    },
    Items: {
        backgroundColor: COMMON_COLOR_CODE,
        marginLeft: 9,
        marginRight: 9,
        marginTop: 2,
        marginBottom:9
    },
    TypeText: {
        fontSize: 18,
        marginLeft: 9,
        color: LOGO_TEXT_COLOR,
    },
    Products: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 9,
        paddingBottom: 9,
        paddingTop: 9,
    },
    OfferText: {
        justifyContent: 'center',
        height: 45,
        borderWidth: 0.5,
        marginLeft: 18,
        backgroundColor: COMMON_COLOR_CODE,
        marginRight: 18,
    },
    Text: {
        fontSize: 18,
        marginLeft: 9,
        color: COMMON_BUTTON_COLOR,
        fontWeight: 'bold'
    },
    CatgTypes: {
        borderBottomWidth: 1,
        marginBottom: 5,
        marginTop: 5,
        paddingBottom: 5,
        borderColor: WHITE_COLOR_CODE
    }
})
export default Styles;