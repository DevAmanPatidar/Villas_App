import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../Components/Logo';
import LoginScreen from '../Screens/authentication/LoginScreen';
import SignupScreen from '../Screens/authentication/SignupScreen';
import ForgotPassScreen from '../Screens/authentication/ForgotPassScreen';
import VerificationScreen from '../Screens/authentication/VerificationScreen';
import MyTabBar from '../Screens/app/TabMainScreens';
import HomeScreen from '../Screens/app/TabMainScreens/HomeScreen';
import CategoryScreen from '../Screens/app/TabMainScreens/CategoryScreen';
import ProfileScreen from '../Screens/app/TabMainScreens/ProfileScreen';
import AskScreen from '../Screens/app/TabMainScreens/AskScreen';
import HistoryScreen from '../Screens/app/TabMainScreens/HistoryScreen';
import EditProfileScreen from '../Screens/authentication/EditProfileScreen';
import SearchScreen from '../Screens/app/SearchScreen';
import AccPrivacyScreen from '../Screens/authentication/AccPrivacyScreen';
import AccSecurityScreen from '../Screens/authentication/AccSecurityScreen';
import ChangePassScreen from '../Screens/authentication/ChangePassScreen';
import DataUsageScreen from '../Screens/authentication/DataUsageScreen';
import NotificationScreen from '../Screens/authentication/NotificationScreen';
import HelpScreen from '../Screens/authentication/HelpScreen';
import AboutScreen from '../Screens/authentication/AboutScreen';
import SupportScreen from '../Screens/authentication/SupportScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}
      lazy={true}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CategoryScreen" component={CategoryScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="AskScreen" component={AskScreen} />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
    </Tab.Navigator>

  )
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabMainScreen" component={TabNavigator} options={{ headerShown: false }} />
        {/* AuthenticationScreens */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccPrivacyScreen" component={AccPrivacyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccSecurityScreen" component={AccSecurityScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePassScreen" component={ChangePassScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DataUsageScreen" component={DataUsageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} options={{ headerShown: false }} />

        {/* appScreens */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation;