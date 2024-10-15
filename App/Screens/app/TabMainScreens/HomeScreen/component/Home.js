import React, { useState, useRef } from 'react';
import {
  KeyboardAvoidingView, Text, Image, View, TouchableOpacity, ScrollView, FlatList, SectionList, Animated,
  TextInput, useWindowDimensions,
} from 'react-native';
import CommonStyles from '../../../../../Utils/CommonStyles';
import {
  FONT_FAMILY_REGULAR, FONT_FAMILY_RETINA, LOGO_TEXT_COLOR,
  COMMON_COLOR_CODE, WHITE_COLOR_CODE, COMMON_HEADER_COLOR,
  COMMON_BUTTON_COLOR, FONT_FAMILY_EXT_LIGHT, INPUT_TEXT_COLOR, COMMON_INPUT_COLOR, STYLED_COLOR_CODE, FONT_FAMILY_BOLD
} from '../../../../../Utils/Constants';
import Styles from './Styles';
import Language from '../../../../../Components/Language';
import Button from '../../../../../Components/Button';
import Input from '../../../../../Components/Input';
import { IconX, ICON_TYPE } from '../../../../../Components/Icons';
import { Category, Vegetables, Fruits, Offer } from '../../../../../Components/Category';

const images = new Array(10).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');
const Home = (props) => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  function TopItem({ item }) {
    return (
      <TouchableOpacity style={{ justifyContent: 'center', marginLeft: 9, marginRight: 9, width: 54, }}>
        <Image source={item.photo} style={{ width: 45, height: 45 }} />
        <Text numberOfLines={1} >{item.category}</Text>
      </TouchableOpacity>
    );
  }
  function Products({ item }) {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TouchableOpacity style={Styles.ProductView}>
          <Image style={{ width: 100, height: 100, }} resizeMode="contain"
            source={item.veg_photo1} />
          <Text>{item.vegetable1}</Text>
          <Text>10% Discount and more..</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.ProductView}>
          <Image style={{ width: 100, height: 100 }} resizeMode="contain"
            source={item.veg_photo2} />
          <Text>{item.vegetable2}</Text>
          <Text>10% Discount and more..</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function FruitProduct({ item }) {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <TouchableOpacity style={Styles.FruitView}>
          <Image style={{ width: 100, height: 100 }} resizeMode="contain"
            source={item.fru_photo1} />
          <Text>{item.fruit1}</Text>
          <Text>5% Discount and more..</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.FruitView}>
          <Image style={{ width: 100, height: 100 }} resizeMode="contain"
            source={item.fru_photo2} />
          <Text>{item.fruit2}</Text>
          <Text>5% Discount and more..</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView style={CommonStyles.Container}>
      <View style={Styles.TopContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ width: 36, height: 36, marginTop: 9 }} resizeMode="contain"
            source={require('../../../../../Assets/Logo.png')} />
          <Text style={{ color: LOGO_TEXT_COLOR, fontFamily: FONT_FAMILY_RETINA, fontSize: 27, marginLeft: 5, marginTop: 9 }}>{Language.villa}</Text>
        </View>
        <TouchableOpacity onPress={() => props.SearchPoPup()}
          style={{ alignItems: 'center', paddingRight: 9 }}>
          <IconX origin={ICON_TYPE.MATERIAL_COMMUNITY_ICONS} name="text-search"
            size={27} color={LOGO_TEXT_COLOR} />
          <Text style={{ fontSize: 9, color: LOGO_TEXT_COLOR }}>Search Item</Text>
        </TouchableOpacity>
      </View>
      <ScrollView ref={props.scrollRef}>
        {props.search &&
          <View style={Styles.Search}>
            <TextInput
              placeholder="Search Item.."
              placeholderTextColor={INPUT_TEXT_COLOR}
              style={{ width: '90%' }}
            />
            <TouchableOpacity style={{ margin: 9, borderLeftWidth: 0.5 }}>
              <IconX origin={ICON_TYPE.FEATHER} name="mic" size={18} color={LOGO_TEXT_COLOR} />
            </TouchableOpacity>
          </View>
        }
        <View style={{ backgroundColor: COMMON_COLOR_CODE, height: 72, justifyContent: 'center', marginTop: 9 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Category}
            renderItem={TopItem}
            keyExtractor={item => item.id}

          />
        </View>
        <View style={{ height: 200, marginVertical: 9, }}>

          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }])}
            scrollEventThrottle={1} >
            {Offer.map((slider) => {
              return (
                <TouchableOpacity key={slider => slider.id}>
                  <Image source={slider.offer}
                    resizeMode="contain" style={{ width: windowWidth, height: 180, }} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={Styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1)
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp",
              });
              return (
                <Animated.Image
                  key={imageIndex}
                  style={[Styles.normalDot, { width, }]}
                />
              );
            })}
          </View>
        </View>
        <View style={Styles.OfferText}>
          <Text style={Styles.Text}>Special Deals</Text>
        </View>
        <View>
          <FlatList
            data={Vegetables}
            renderItem={Products}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{ height: 200, marginVertical: 9 }}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }])}
            scrollEventThrottle={1} >
            {Offer.map((slider) => {
              return (
                <TouchableOpacity key={slider => slider.id}>
                  <Image source={slider.offer}
                    resizeMode="contain" style={{ width: windowWidth, height: 180 }} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={Styles.OfferText}>
          <Text style={Styles.Text}>Fruits Specials</Text>
        </View>
        <View style={{ backgroundColor: WHITE_COLOR_CODE }}>
          <FlatList
            data={Fruits}
            renderItem={FruitProduct}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default Home;

