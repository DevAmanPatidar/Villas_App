import React, { Fragment } from "react";
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Platform,
} from "react-native";
import {
    WHITE_COLOR_CODE, COMMON_COLOR_CODE, COMMON_INPUT_COLOR, TEXT_COLOR_CODE, STYLED_COLOR_CODE, INPUT_TEXT_COLOR, LOGO_TEXT_COLOR, COMMON_HEADER_COLOR,
    FONT_FAMILY_RETINA, FONT_FAMILY_BOLD,
    FONT_FAMILY_LIGHT, FONT_FAMILY_MEDIUM, FONT_FAMILY_REGULAR, COMMON_BUTTON_COLOR, BLACK_COLOR_CODE
} from '../../Utils/Constants';
import { useNavigation } from "@react-navigation/native";
import { ICON_TYPE, IconX } from '../Icons';

const Header = (props) => {
    const navigation = useNavigation();
    const { HeaderView, HeaderMiddleView, container, MainHeadTxt } = styles;
    const {
        Lebel,
        rightImg,
        leftImg,
        onPress,
        mncontainer,
        MainHeadStyle,
        HeaderMiddleTxt,
        headerMiddleTextWithImage,
        headerMiddleTextWithImageStyle,
        onPressHeaderMiddleTextWithImage, rightImgStyle, leftImgStyle
    } = props;
    const OnpressBack = () => {
        navigation.goBack(null);
    };
    return (
        <View style={[container, mncontainer]}>
            <StatusBar
                backgroundColor={COMMON_COLOR_CODE}
                barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
            />
            <View style={HeaderView}>
                <TouchableOpacity activeOpacity={1} onPress={() => OnpressBack()}>
                   <IconX origin={ICON_TYPE.ENTYPO} name="arrow-long-left" size={36} color={COMMON_BUTTON_COLOR}/>
                </TouchableOpacity>
            </View>
            <View style={[HeaderMiddleView, HeaderMiddleTxt]}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[MainHeadTxt, MainHeadStyle]}>{Lebel}</Text>
                    {headerMiddleTextWithImage && (
                        <TouchableOpacity activeOpacity={1}
                            onPress={() => onPressHeaderMiddleTextWithImage()}
                        >
                            <Image
                                style={[headerMiddleTextWithImageStyle]}
                                source={headerMiddleTextWithImage}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={HeaderView}>
                {rightImg && (
                    <TouchableOpacity activeOpacity={1}>
                        <Image style={rightImgStyle} resizeMode='contain'
                            source={rightImg} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
Header.defaultProps = {
    Lebel: "CommonName",
    rightImg: null,
    leftImg: "",
    headerMiddleTextWithImage: null,
};
const styles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: "row",
        backgroundColor: WHITE_COLOR_CODE,
        elevation: 2,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
    },
    HeaderView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    HeaderMiddleView: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    MainHeadTxt: {
        fontFamily: FONT_FAMILY_MEDIUM,
        fontSize: 20,
        color: BLACK_COLOR_CODE,
    },
});
export default Header;
