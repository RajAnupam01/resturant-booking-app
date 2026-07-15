import React from 'react'
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Color';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY,
      tabBarInactiveTintColor: Colors.dark.text,
      tabBarStyle: {
        backgroundColor: Colors.SECONDARY,
        paddingBottom: 14,
        height: 75
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "bold"
      }
    }} >
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
        )
      }} />
      <Tabs.Screen name="history" options={{
        title: "History",
        tabBarIcon: ({ color }) => (
          <Ionicons name="time" size={24} color={color} />
        )
      }} />
      <Tabs.Screen name="explore" options={{
        title: "Explore",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="travel-explore" size={24} color={color} />
        )
      }} />
    </Tabs>
  )
}

export default TabsLayout