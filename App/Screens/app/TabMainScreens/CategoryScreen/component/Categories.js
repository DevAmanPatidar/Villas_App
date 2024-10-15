import React from 'react';
import {
    KeyboardAvoidingView, Text, Image, View, TouchableOpacity, ScrollView, TextInput, FlatList,
} from 'react-native';
import CommonStyles from '../../../../../Utils/CommonStyles';
import Styles from './Styles';
import {
    FONT_FAMILY_REGULAR, FONT_FAMILY_RETINA, LOGO_TEXT_COLOR, TEXT_COLOR_CODE, INPUT_TEXT_COLOR,
    COMMON_COLOR_CODE, WHITE_COLOR_CODE, SILVER_COLOR_CODE, THEME_COLOR_CODE_DARK, COMMON_HEADER_COLOR, COMMON_BUTTON_COLOR, INPUT_BORDER_COLOR, COMMON_INPUT_COLOR, THEME_COLOR_CODE_LIGHT
} from '../../../../../Utils/Constants';
import Language from '../../../../../Components/Language';
import Button from '../../../../../Components/Button';
import { IconX, ICON_TYPE } from '../../../../../Components/Icons';
import { CategoryTypes, Category, FruitCategory } from '../../../../../Components/Category';

const Categories = (props) => {
    function Types({ item, index }) {
        return (
            <View style={Styles.Items}>
                <TouchableOpacity style={Styles.CatgTypes}>
                    <Text style={Styles.TypeText}>{item.subCatTitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function Categories({ item, index }) {
        return (
            <View>
                <TouchableOpacity onPress={() => props.VegtblCatgrPoPup(index)}
                    style={Styles.Category}>
                    <View style={Styles.Products}>
                        <Image style={{ width: 45, height: 45 }}
                            source={item.photo} />
                        <Text style={{ fontSize: 18, marginLeft: 9, marginTop: 5 }}>{item.category}</Text>
                    </View>
                    {index == props.VegtblCatgr ?
                        <IconX origin={ICON_TYPE.ANT_DESIGN} name="upcircleo" style={{ paddingRight: 9 }} />
                        :
                        <IconX origin={ICON_TYPE.ANT_DESIGN} name="downcircleo" style={{ paddingRight: 9 }} />
                    }

                </TouchableOpacity>
                {index == props.VegtblCatgr ?
                    <View style={Styles.Items}>
                        <FlatList
                            data={item.subCategoryData}
                            renderItem={Types}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    :
                    null

                }
            </View>
        );
    }
    function FruitTypes({ item, index }) {
        return (
            <View style={Styles.Items}>
                <TouchableOpacity style={Styles.CatgTypes}>
                    <Text style={Styles.TypeText}>{item.subCatTitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function FruitCategories({ item, index }) {
        return (
            <View>
                <TouchableOpacity onPress={() => props.FruitCatgrPoPup(index)}
                    style={Styles.Category}>
                    <View style={Styles.Products}>
                        <Image style={{ width: 45, height: 45 }}
                            source={item.photo} />
                        <Text style={{ fontSize: 18, marginLeft: 9, marginTop: 5 }}>{item.category}</Text>
                    </View>
                    {index == props.fruitCatgr ?
                        <IconX origin={ICON_TYPE.ANT_DESIGN} name="upcircleo" style={{ paddingRight: 9 }} />
                        :
                        <IconX origin={ICON_TYPE.ANT_DESIGN} name="downcircleo" style={{ paddingRight: 9 }} />
                    }

                </TouchableOpacity>
                {/* {alert( props.VegtblCatgr)} */}
                {index == props.fruitCatgr ?
                    <View style={Styles.Items}>
                        <FlatList
                            data={item.subCategoryData}
                            renderItem={FruitTypes}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    :
                    null

                }
            </View>
        );
    }
    return (
        <KeyboardAvoidingView style={CommonStyles.Container}>
            <View style={Styles.TopContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 36, height: 36, marginTop: 9 }} resizeMode="contain"
                        source={require('../../../../../Assets/Logo.png')} />
                    <Text style={{
                        color: LOGO_TEXT_COLOR, fontFamily: FONT_FAMILY_RETINA, fontSize: 27,
                        marginLeft: 5, marginTop: 9
                    }}>Category</Text>
                </View>
                <TouchableOpacity onPress={() => props.SearchPoPup()}
                    style={{ alignItems: 'center', paddingRight: 9 }}>
                    <IconX origin={ICON_TYPE.MATERIAL_COMMUNITY_ICONS} name="selection-search"
                        size={27} color={LOGO_TEXT_COLOR} />
                    <Text style={{ fontSize: 9, color: LOGO_TEXT_COLOR, }}>Search Category</Text>
                </TouchableOpacity>
            </View>
            <ScrollView ref={props.scrollRef}>
                {props.search &&
                    <View style={Styles.Search}>
                        <TextInput
                            placeholder="Search Category.."
                            placeholderTextColor={INPUT_TEXT_COLOR}
                            style={{ width: '90%' }}
                        />
                        <TouchableOpacity style={{ margin: 9, borderLeftWidth: 0.5 }}>
                            <IconX origin={ICON_TYPE.FEATHER} name="mic" size={18} color={LOGO_TEXT_COLOR} />
                        </TouchableOpacity>
                    </View>
                }
                <View style={{ flex: 1, marginTop: 9 }}>
                    <Text style={Styles.Text}>Vegetable Categories</Text>
                    <FlatList
                        data={Category}
                        renderItem={Categories}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flex: 1, marginTop: 24 }}>
                    <Text style={Styles.Text}>Fruit Categories</Text>
                    <FlatList
                        data={FruitCategory}
                        renderItem={FruitCategories}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Categories;