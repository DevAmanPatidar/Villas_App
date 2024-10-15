import React, { Fragment, useState, useEffect } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import {
    COMMON_COLOR_CODE, COMMON_BUTTON_COLOR, COMMON_INPUT_COLOR, INPUT_TEXT_COLOR,
    UNDERLINE_COLOR_CODE, THEME_COLOR_CODE_LIGHT, INPUT_BORDER_COLOR,
    FONT_FAMILY_RETINA, FONT_FAMILY_BOLD,
    FONT_FAMILY_LIGHT, FONT_FAMILY_MEDIUM, FONT_FAMILY_REGULAR, BLACK_COLOR_CODE
}
    from '../../Utils/Constants';
import { IconX, ICON_TYPE } from '../Icons';


const Input = (props) => {
    const inputRef = React.useRef(null)
    const [selected, setSelected] = useState(false);
    const [textLengths, settextLengths] = useState('150');
    const [isFocused, setIsfocused] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    const {
        autoCapitalize, autoFocus, keyboardType, multiline,
        placeholder, returnKeyType, secureTextEntry, value, maxLength,
        onChangeText, children, selectionColor, textInputStyle, type, secureType,
        placeholderTextColor, InputHeading, containerStyle, InputType,
        leftInputImge, rightInputImage, isTyping, rightInputImageStyle,
        textAlign, textLength, showErr, textInputWithImage,iconName
    } = props;
    const {
        container, textInput, labelStyle
    } = style;
    const _handleFocus = () => {
        setSelected(true);
        setIsfocused(false)
    }
    const _handleBlur = () => {
        setSelected(false);
        value === '' && setIsfocused(true);
    }
    const onPressEye = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        inputRef.current.setNativeProps({
            style: { fontFamily: Platform.OS === 'android' ? FONT_FAMILY_RETINA : undefined }
        })
    }, [showPassword]);
    return (
        <Fragment>
            <View style={[container, containerStyle]}>
                {textInputWithImage &&
                    <IconX origin={leftInputImge} name={iconName} size={27} 
                    style={{marginLeft:3}} color={COMMON_BUTTON_COLOR}/>
                }
                <TextInput
                    ref={_ref => {
                        inputRef.current = _ref;
                    }}
                    onChangeText={(text) => onChangeText(text)}
                    autoCapitalize={autoCapitalize}
                    autoFocus={autoFocus}
                    keyboardType={keyboardType}
                    multiline={multiline}
                    placeholder={InputType == null ? placeholder : null}
                    returnKeyType={returnKeyType}
                    secureTextEntry={secureType === 'secureText' ? showPassword : secureTextEntry}
                    value={value}
                    placeholderTextColor={placeholderTextColor}
                    selectionColor={"#a5a5a5"}
                    style={[textInput, textInputStyle, { fontFamily: FONT_FAMILY_REGULAR, }]}
                    onFocus={_handleFocus}
                    maxLength={maxLength}
                    onBlur={_handleBlur}
                    textAlign={textAlign}
                />

                {
                    secureType === 'secureText' &&
                    <TouchableOpacity activeOpacity={1} style={{ width: 20, right: 20, }}
                        onPress={() => onPressEye()}>
                        <IconX
                            origin={ICON_TYPE.FONT_AWESOME}
                            name={
                                showPassword ?
                                    "eye"
                                    :
                                    "eye-slash"
                            } color={THEME_COLOR_CODE_LIGHT} size={20}
                        />
                    </TouchableOpacity>
                }
            </View>
        </Fragment>
    );
};
Input.defaultProps = {
    placeholder: "name",
    secureTextEntry: false,
    placeholderTextColor: BLACK_COLOR_CODE,
    keyboardType: "default",
    value: "",
    InputHeading: "Email",
    InputType: null,
    onChangeText: () => { },
    secureType: "",
    textAlign: 'left',
    textInputWithImage: false,
    iconName:""

};
const style = StyleSheet.create({
    container: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        marginTop: 10,
        width: '85%',
        borderWidth: 1,
        borderColor: INPUT_BORDER_COLOR,
    },
    textInput: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        width: '95%',
        fontSize: 14,
        marginLeft: 5
    }
})
export default Input;