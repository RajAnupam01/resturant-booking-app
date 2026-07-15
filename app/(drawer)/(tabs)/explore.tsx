import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Color'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

// Local mock data representing Delhi's iconic food zones
const DELHI_HUBS = [
  { id: 'cp', name: 'Connaught Place', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', tag: 'Heart of Delhi' },
  { id: 'hkv', name: 'Hauz Khas Village', image: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=400', tag: 'Cafes & Lake Views' },
  { id: 'gk', name: 'Greater Kailash', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400', tag: 'Upscale Dining' },
  { id: 'cyber', name: 'CyberHub', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400', tag: 'Corporate Hangouts' },
]

// The primary Metro Lines with their official colors for visual matching
const METRO_LINES = [
  { id: 'yellow', name: 'Yellow Line', color: '#FFD700', stations: 'Rajiv Chowk, GTB Nagar, Saket' },
  { id: 'blue', name: 'Blue Line', color: '#007FFF', stations: 'Rajouri Garden, Karol Bagh, Noida Sec 18' },
  { id: 'magenta', name: 'Magenta Line', color: '#FF007F', stations: 'IIT Delhi, Nehru Place, Kalkaji' },
  { id: 'pink', name: 'Pink Line', color: '#FFB6C1', stations: 'South Campus, Lajpat Nagar, NSP' },
]

const Explore = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLine, setSelectedLine] = useState<string | null>(null);



  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        
        {/* Screen Header */}
        <View className="mt-4 mb-6">
          <Text className="text-white text-2xl font-extrabold">Explore Delhi NCR</Text>
          <Text className="text-gray-400 text-xs mt-1">Discover tables across your favorite Delhi spots</Text>
        </View>

        {/* Delhi-style Search Input */}
        <View className="flex-row items-center bg-gray-900 border border-gray-800 rounded-xl px-3 py-2.5 mb-6">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search CP, Champa Gali, CyberHub..."
            placeholderTextColor="gray"
            className="flex-1 ml-2 text-white text-sm"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color="gray" />
            </TouchableOpacity>
          )}
        </View>

        {/* Section: Food Hubs */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-3">Famous Food Hubs</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DELHI_HUBS.map((hub) => (
              <TouchableOpacity
                key={hub.id}
                className="w-40 mr-4 rounded-xl overflow-hidden bg-gray-900 border border-gray-800"
              >
                <Image source={{ uri: hub.image }} className="w-full h-24 object-cover" />
                <View className="p-2.5">
                  <Text className="text-white font-bold text-xs" numberOfLines={1}>
                    {hub.name}
                  </Text>
                  <Text className="text-emerald-400 text-[10px] mt-0.5">{hub.tag}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Section: Search by Metro Line */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-white text-lg font-bold">Search by Metro Line</Text>
            <View className="bg-blue-500/10 px-2 py-0.5 rounded">
              <Text className="text-blue-400 text-[10px]">DMRC Enabled</Text>
            </View>
          </View>
          
          <Text className="text-gray-400 text-xs mb-3">Avoid Delhi traffic—book tables steps away from the station:</Text>

          {METRO_LINES.map((line) => {
            const isSelected = selectedLine === line.id;
            return (
              <TouchableOpacity
                key={line.id}
                className={`flex-row items-center p-3 rounded-xl mb-3 border ${
                  isSelected ? 'bg-gray-800 border-gray-700' : 'bg-gray-900 border-gray-800'
                }`}
              >
                {/* Metro Line Indicator Tag */}
                <View 
                  style={{ backgroundColor: line.color }} 
                  className="w-3.5 h-3.5 rounded-full mr-3 items-center justify-center" 
                />
                
                <View className="flex-1">
                  <Text className="text-white font-semibold text-sm">{line.name}</Text>
                  <Text className="text-gray-400 text-xs mt-0.5" numberOfLines={1}>
                    {line.stations}
                  </Text>
                </View>
                
                <Ionicons 
                  name={isSelected ? "chevron-down" : "chevron-forward"} 
                  size={18} 
                  color="gray" 
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Quick Quick-links for Delhi Foodies */}
        <View className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-8">
          <Text className="text-white font-bold text-sm mb-2">💡 Delhi Dining Tip</Text>
          <Text className="text-gray-400 text-xs leading-5">
            CP (Connaught Place) and CyberHub get incredibly packed on Friday & Saturday nights. We recommend pre-booking your table at least 4 hours in advance!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore