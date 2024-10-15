import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import {
  WHITE_COLOR_CODE, COMMON_COLOR_CODE, OTHER_BUTTON_COLOR,
  BLACK_COLOR_CODE,TEXT_COLOR_CODE
} from '../../../Utils/Constants';
import { IconX, ICON_TYPE } from '../../../Components/Icons';

function MyTabBar({ state, descriptors, navigation, props }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{
      flexDirection: 'row', backgroundColor: COMMON_COLOR_CODE,
    }}>
      { state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <View key={index} style={{
            flex: 1,
            height: 60,
          }}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {
                label === 'HomeScreen' ?
                  isFocused ?
                    <View>
                      <Image
                        style={{ height: 27, width: 27, alignSelf: "center",  }}
                        source={require('../../../Assets/HOME.png')} />
                      <Text>Home</Text>
                    </View>
                    :
                    <View>
                      <Image
                        style={{ height: 27, width: 27, alignSelf: "center",  }}
                        source={require('../../../Assets/Home.png')} />
                      <Text>Home</Text>
                    </View>

                  : label === 'CategoryScreen' ?
                    isFocused ?
                      <View>
                        <Image
                          style={{ height: 27, width: 27, alignSelf: "center",  }}
                          source={require('../../../Assets/CATEGORY.png')} />
                        <Text>Categories</Text>
                      </View>
                      :
                      <View>
                        <Image
                          style={{ height: 27, width: 27, alignSelf: "center",  }}
                          source={require('../../../Assets/Category.png')} />
                        <Text>Categories</Text>
                      </View>
                    : label === 'ProfileScreen' ?
                      isFocused ?
                        <View >
                          <Image
                            style={{ height: 27, width: 27, alignSelf: "center",  }}
                            source={require('../../../Assets/PROFILE.png')} />
                          <Text>Profile</Text>
                        </View>
                        :
                        <View >
                          <Image
                            style={{ height: 27, width: 27, alignSelf: "center",  }}
                            source={require('../../../Assets/Profile.png')} />
                          <Text>Profile</Text>
                        </View>

                      : label === 'AskScreen' ?
                        isFocused ?
                          <View >
                            <Image
                              style={{ height: 27, width: 27, alignSelf: "center",  }}
                              source={require('../../../Assets/ASK.png')} />
                            <Text>Ask Here</Text>
                          </View>
                          :
                          <View >
                            <Image
                              style={{ height: 27, width: 27, alignSelf: "center",}}
                              source={require('../../../Assets/Ask.png')} />
                            <Text>Ask Here</Text>
                          </View>
                        : label === 'HistoryScreen' ?
                          isFocused ?
                            <View>
                              <Image
                                style={{ height: 27, width: 27, alignSelf: "center",  }}
                                source={require('../../../Assets/HISTORY.png')} />
                              <Text>History</Text>
                            </View>
                            :
                            <View>
                              <Image
                                style={{ height: 27, width: 27, alignSelf: "center",  }}
                                source={require('../../../Assets/History.png')} />

                              <Text>History</Text>

                            </View>
                          : null
              }
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
export default MyTabBar;