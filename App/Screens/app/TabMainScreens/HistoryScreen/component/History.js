import React from 'react';
import { KeyboardAvoidingView, Text, Image, View, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import CommonStyles from '../../../../../Utils/CommonStyles';
import Styles from './Styles';
import {
    FONT_FAMILY_REGULAR, FONT_FAMILY_RETINA, LOGO_TEXT_COLOR, TEXT_COLOR_CODE, INPUT_BORDER_COLOR, INPUT_TEXT_COLOR
} from '../../../../../Utils/Constants';
import Language from '../../../../../Components/Language';
import { IconX, ICON_TYPE } from '../../../../../Components/Icons';

const History = (props) => {
    return (
        <KeyboardAvoidingView style={CommonStyles.Container}>
            <View style={Styles.TopContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 36, height: 36, marginTop: 9 }} resizeMode="contain"
                        source={require('../../../../../Assets/Logo.png')} />
                    <Text style={{ color: LOGO_TEXT_COLOR, fontFamily: FONT_FAMILY_RETINA, fontSize: 27, marginLeft: 5, marginTop: 9 }}>History</Text>
                </View>
                <TouchableOpacity onPress={() => props.SearchPoPup()}
                    style={{ alignItems: 'center', paddingRight: 9 }}>
                    <IconX origin={ICON_TYPE.MATERIAL_COMMUNITY_ICONS} name="selection-search"
                        size={27} color={LOGO_TEXT_COLOR} />
                    <Text style={{ fontSize: 9, color: LOGO_TEXT_COLOR }}>Search History</Text>
                </TouchableOpacity>
            </View>
            <ScrollView ref={props.scrollRef}> 
                {props.search &&
                    <View style={Styles.Search}>
                        <TextInput
                            placeholder="Search History.."
                            placeholderTextColor={INPUT_TEXT_COLOR}
                            style={{ width: '90%' }}
                        />
                        <TouchableOpacity style={{ margin: 9, borderLeftWidth: 0.5 }}>
                            <IconX origin={ICON_TYPE.FEATHER} name="mic" size={18} color={LOGO_TEXT_COLOR} />
                        </TouchableOpacity>
                    </View>
                }

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default History;