import React from 'react';
import {View} from 'react-native';
import Navigation from './App/Navigation';

const App=()=>{
  return(
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  )
}
export default App;

// import 'react-native-gesture-handler';

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import LanguageSelectionScreen from './Pages/LanguageSelectionScreen';
// import ContentScreen from './Pages/ContentScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LanguageSelectionScreen">
//         <Stack.Screen
//           name="LanguageSelectionScreen"
//           component={LanguageSelectionScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ContentScreen"
//           component={ContentScreen}
//           options={{
//             title: 'Content Screen', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;