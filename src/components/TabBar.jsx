import { View, Platform, Image, Pressable } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text} from '@react-navigation/elements';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import colors from "../constants/colors.json"
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

import homeimg from "../assets/home.png";
import settingsimg from "../assets/gear.png";
import plusimg from "../assets/plus.png";

export default function TabBar({ state, descriptors, navigation }) {
  const { buildHref } = useLinkBuilder();

  const icons = {
    "Dashboard": homeimg,
    "Settings": settingsimg,
    "Add": plusimg
  }

  const titles = {
    "Dashboard": "Home",
    "Settings": "Settings"
  }


  return (
    <View style={styles.tabBar}>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const icon = icons[label]
        const title = titles[label]

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        const scale = useSharedValue(0)

        useEffect(()=>{
          scale.value = withSpring(isFocused ? 1:0, {duration: 300})
        },[scale, isFocused])

        const animatedIconStyle = useAnimatedStyle(() => {
          const top = interpolate(scale.value, [0,1], [0,9])
          
          return {
            top
          }
        })

        const animatedTextStyle = useAnimatedStyle(() => {
          const val = interpolate(scale.value, [0,1], [1,0])
          
          return {
            opacity: val
          }
        })

        return (
          <Pressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >

            <Animated.Image source={icon} style={[animatedIconStyle,{width: label!="Add" && 30 || 50, height: label!="Add" && 30 || 50}]} />
              <Animated.Text style={[animatedTextStyle, { color: isFocused ? colors.primary : colors.text, fontSize: 12 }]}>
                {title || null}
              </Animated.Text>
              
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        backgroundColor: "white",
        marginHorizontal: 50,
        borderRadius: 50,
        padding: 15,
        paddingBottom: 0,
        shadowOpacity:0.3,
        elevation: 2,
        shadowRadius: 10
    },

    tabItem: {
        flex: 1,
        alignItems: "center"
    },

    logButton: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 0,
      }
});