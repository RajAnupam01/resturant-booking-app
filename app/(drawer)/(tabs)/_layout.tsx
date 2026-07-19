import React from 'react'
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Color';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabsLayout = () => {
  const insets = useSafeAreaInsets(); // Get dynamic device padding
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY,
      tabBarInactiveTintColor: Colors.dark.text,
      tabBarStyle: {
        backgroundColor: Colors.SECONDARY,
        height: 60 + insets.bottom, 
        paddingBottom: insets.bottom,

      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 5,
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