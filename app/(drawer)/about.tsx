import { View, Text, ScrollView, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from "../../constants/Color"
import { Ionicons } from '@expo/vector-icons'

const About = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">

        {/* Header */}
        <View className="mt-4 mb-8">
          
        </View>

        {/* Brand Banner */}
        {/* Brand Banner */}
        <View className="w-full items-center mb-6">
          <ImageBackground
            className="h-40 w-full items-center justify-center overflow-hidden rounded-xl"
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500' }}
          >
            {/* Fixed: Changed <div> to <View> */}
            <View className="absolute inset-0 bg-black/70 items-center justify-center p-4">
              <Text className="text-emerald-400 text-3xl font-black tracking-wider">TableIO</Text>
              <Text className="text-gray-300 text-xs mt-1 text-center">
                Redefining the dining experience across Delhi NCR
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* Our Mission */}
        <View className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4">
          <Text className="text-white font-bold text-base mb-2">Our Mission</Text>
          <Text className="text-gray-400 text-xs leading-5">
            TableIO was built to bridge the gap between Delhi's food lovers and its finest culinary hubs. We clear out the friction of long waiting lines in crowded spaces like Connaught Place, Khan Market, and CyberHub, letting you secure your table instantly.
          </Text>
        </View>

        {/* Key Features Core Info */}
        <View className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6">
          <Text className="text-white font-bold text-base mb-3">Why Choose Us?</Text>

          <View className="flex-row items-start mb-3">
            <Ionicons name="flash" size={16} color="#34d399" className="mt-0.5" />
            <Text className="text-gray-400 text-xs ml-2 flex-1">
              <Text className="text-white font-semibold">Instant Reservations:</Text> Real-time table status updates directly from live host stands.
            </Text>
          </View>

          <View className="flex-row items-start mb-3">
            <Ionicons name="options" size={16} color="#34d399" className="mt-0.5" />
            <Text className="text-gray-400 text-xs ml-2 flex-1">
              <Text className="text-white font-semibold">Smart Filtering:</Text> Search seamless layouts grouped strictly by your favorite Delhi Metro zones.
            </Text>
          </View>

          <View className="flex-row items-start">
            <Ionicons name="gift" size={16} color="#34d399" className="mt-0.5" />
            <Text className="text-gray-400 text-xs ml-2 flex-1">
              <Text className="text-white font-semibold">Exclusive Offers:</Text> Zero hidden fees along with curated community dining perks.
            </Text>
          </View>
        </View>

        {/* Application Metadata Footer */}
        <View className="items-center justify-center my-6">
          <Text className="text-gray-600 text-[11px]">Version 1.0.0 (Production Build)</Text>
          <Text className="text-gray-600 text-[10px] mt-0.5">© 2026 TableIO Technologies Inc.</Text>
        </View>

        <StatusBar barStyle={"light-content"} backgroundColor={'#000000'} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default About