import React, { Fragment } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import {
    WHITE_COLOR_CODE, THEME_COLOR_CODE_DARK, COMMON_BUTTON_COLOR,
    FONT_FAMILY_RETINA, FONT_FAMILY_BOLD,
    FONT_FAMILY_LIGHT, FONT_FAMILY_MEDIUM, FONT_FAMILY_REGULAR
} from '../../Utils/Constants';
const Button = (props) => {
    const {
        buttonText, style, buttonLabelStyle, onPress, LeftBtnImage, RightBtnImage
    } = props;
    const {
        button, buttonLabel
    } = styles;
    return (
        <Fragment>
            <TouchableOpacity activeOpacity={1}
                onPress={onPress}
                style={[button ,style, { flexDirection: 'row', alignSelf: 'center' }]}>
                <Image
                    source={LeftBtnImage}
                />
                <Text style={[buttonLabel, buttonLabelStyle]}>
                    {buttonText}
                </Text>
                <Image
                    source={RightBtnImage}
                />
            </TouchableOpacity>
        </Fragment>
    );
}
Button.Button = {
    buttonText: "Submit",
};
export default Button;
const styles = StyleSheet.create({
    button: {
        height: 45,
        borderRadius: 25,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        backgroundColor: COMMON_BUTTON_COLOR,
    },
    buttonLabel: {
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
    },
})