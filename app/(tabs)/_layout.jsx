import React from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, name, focused, color }) => {
  return (
    <View className={"items-center justify-center gap-1"}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, width: 24, height: 24 }}
      />
      <Text className={`${focused ? 'font-psemibold':'font-pregular'} text-xm`} style={{color:color}}>
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
       tabBarShowLabel: false,
       tabBarActiveTintColor:"#FFA001",
       tabBarInactiveTintColor:"#CDCDE0",
       tabBarStyle:{
        backgroundColor:"#161622",
        borderTopWidth:1,
        borderTopColor:"#232533",
        height:84
       }

       }}>
      <Tabs.Screen 
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              name="Home"
              focused={focused}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              name="Bookmark"
              focused={focused}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              name="Create"
              focused={focused}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              name="Profile"
              focused={focused}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
