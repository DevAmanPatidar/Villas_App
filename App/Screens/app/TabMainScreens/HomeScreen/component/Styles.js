import { StyleSheet } from 'react-native';
import {
  FONT_FAMILY_REGULAR,  LOGO_TEXT_COLOR, 
  COMMON_INPUT_COLOR,WHITE_COLOR_CODE
} from '../../../../../Utils/Constants';

const Styles = StyleSheet.create({
  TopContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR_CODE,
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
  normalDot: {
    height: 9,
    width: 9,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ProductView:{
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    margin: 5,
    borderColor: LOGO_TEXT_COLOR,
    paddingBottom: 9,
    paddingTop: 9
  },
  FruitView:{
    alignItems: 'center',
    flex: 1,
    borderColor: LOGO_TEXT_COLOR,
    borderWidth: 0.5,
    margin: 5,
    paddingBottom: 9,
    paddingTop: 9
  },
  OfferText:{
    justifyContent: 'center',
    height: 45,
    borderWidth: 0.5,
    marginLeft: 18,
    marginRight: 18,
  },
  Text:{
    fontSize: 18,
    color: LOGO_TEXT_COLOR,
    textAlign: 'center',
    fontFamily:FONT_FAMILY_REGULAR
  }
})
export default Styles;