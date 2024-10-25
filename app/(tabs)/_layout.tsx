import React from 'react'
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { Tabs } from 'expo-router/tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Svg, { Circle, Path } from 'react-native-svg';
import { StyleSheet } from 'react-native';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function TabLayout() {
  // const tabBarHeight = useBottomTabBarHeight();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'light',
        headerShown: false,
        tabBarStyle: { borderTopWidth: 1, borderTopColor: '#F4F4F6', },
        tabBarLabelStyle: { fontWeight: 700, fontSize: 11, paddingTop: 0 },
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <Path d="M21.8228 7.97334L15.8324 3.78214C14.1996 2.63814 11.6932 2.70054 10.1228 3.91734L4.91238 7.98374C3.87238 8.79494 3.05078 10.4589 3.05078 11.7693V18.9453C3.05078 21.5973 5.20358 23.7605 7.85558 23.7605H19.0668C21.7188 23.7605 23.8716 21.6077 23.8716 18.9557V11.9045C23.8716 10.5005 22.9668 8.77414 21.8228 7.97334ZM14.2412 19.6005C14.2412 20.0269 13.8876 20.3805 13.4612 20.3805C13.0348 20.3805 12.6812 20.0269 12.6812 19.6005V16.4805C12.6812 16.0541 13.0348 15.7005 13.4612 15.7005C13.8876 15.7005 14.2412 16.0541 14.2412 16.4805V19.6005Z" fill="#242450" />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <Circle cx="12.7382" cy="13.1176" r="9.3481" stroke="#9EA3AE" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M19.2397 20.1055L22.9047 23.7609" stroke="#9EA3AE" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <Svg width="25" height="26" viewBox="0 0 25 26" fill="none">
              <Path d="M18.7203 12.1027V16.2627C18.7203 16.5331 18.7099 16.7931 18.6787 17.0427C18.4395 19.8507 16.7859 21.2443 13.7387 21.2443H13.3227C13.0627 21.2443 12.8131 21.3691 12.6571 21.5771L11.4091 23.2411C10.8579 23.9795 9.96347 23.9795 9.41227 23.2411L8.16426 21.5771C8.02906 21.4003 7.72748 21.2443 7.49868 21.2443H7.08268C3.76508 21.2443 2.10107 20.4227 2.10107 16.2627V12.1027C2.10107 9.0555 3.50508 7.4019 6.30268 7.1627C6.55228 7.1315 6.81228 7.12109 7.08268 7.12109H13.7387C17.0563 7.12109 18.7203 8.7851 18.7203 12.1027Z" stroke="#9EA3AE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M22.8803 7.94255V12.1025C22.8803 15.1601 21.4763 16.8033 18.6787 17.0425C18.7099 16.7929 18.7203 16.5329 18.7203 16.2625V12.1025C18.7203 8.78495 17.0563 7.12094 13.7387 7.12094H7.08273C6.81233 7.12094 6.55233 7.13135 6.30273 7.16255C6.54193 4.36495 8.19553 2.96094 11.2427 2.96094H17.8987C21.2163 2.96094 22.8803 4.62495 22.8803 7.94255Z" stroke="#9EA3AE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M14.0563 14.6606H14.0657" stroke="#9EA3AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M10.4162 14.6606H10.4256" stroke="#9EA3AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M6.77655 14.6606H6.78591" stroke="#9EA3AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="guest"
        options={{
          title: 'Guest',
          tabBarIcon: ({ color, focused }) => (
            <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <Path d="M12.9898 23.7609C18.7336 23.7609 23.3898 19.1047 23.3898 13.3609C23.3898 7.61718 18.7336 2.96094 12.9898 2.96094C7.24608 2.96094 2.58984 7.61718 2.58984 13.3609C2.58984 19.1047 7.24608 23.7609 12.9898 23.7609Z" stroke="#9EA3AE" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M13.0213 17.7593C15.4509 17.7593 17.4205 15.7898 17.4205 13.3601C17.4205 10.9305 15.4509 8.96094 13.0213 8.96094C10.5917 8.96094 8.62207 10.9305 8.62207 13.3601C8.62207 15.7898 10.5917 17.7593 13.0213 17.7593Z" stroke="#9EA3AE" stroke-width="1.56" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <Path d="M13.0408 13.3609C15.9127 13.3609 18.2408 11.0328 18.2408 8.16094C18.2408 5.28906 15.9127 2.96094 13.0408 2.96094C10.1689 2.96094 7.84082 5.28906 7.84082 8.16094C7.84082 11.0328 10.1689 13.3609 13.0408 13.3609Z" stroke="#82808F" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M21.9746 23.7605C21.9746 19.7357 17.9706 16.4805 13.041 16.4805C8.11142 16.4805 4.10742 19.7357 4.10742 23.7605" stroke="#82808F" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 700,
    fontSize: 11,
  }
})