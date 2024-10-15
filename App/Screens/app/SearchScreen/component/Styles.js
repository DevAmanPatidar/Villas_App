import { StyleSheet } from 'react-native';
import { COMMON_INPUT_COLOR, INPUT_BORDER_COLOR } from '../../../../Utils/Constants';

const Styles=StyleSheet.create({
   search:{
    marginLeft:27,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COMMON_INPUT_COLOR,
    borderRadius: 18,
    marginTop: 10,
    width: '85%',
    borderWidth: 2,
    borderColor: INPUT_BORDER_COLOR,
}
})
export default Styles;