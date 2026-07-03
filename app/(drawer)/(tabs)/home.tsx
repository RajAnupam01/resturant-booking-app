import { View, Text, Image, ScrollView, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Color';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

import { DELHI_RESTAURANT_DATA, Restaurant } from "../../../store/data"
import { router } from 'expo-router';

const Home = () => {
  const navigation = useNavigation();

  const renderResturantItem = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity
      className="bg-white rounded-lg mb-4 mt-4 mr-4 ml-4 overflow-hidden shadow-md android:elevation-3 w-64"
      onPress={() => {
        router.push({
          pathname: '/resturant/[id]',
          params: { id: item.id }
        });
      }}
    >
      <Image
        source={{ uri: item.imageUrl }}
        className="w-full h-44 object-cover"
      />

      <View className="p-3">
        <Text className="text-lg font-bold text-gray-900 mb-1">
          {item.name}
        </Text>

        <Text className="text-sm text-gray-600 mb-1" numberOfLines={1}>
          {item.address}
        </Text>

        <Text className="text-xs text-gray-400">
          Seats: {item.seats} | Timing: {item.openingTime} - {item.closingTime}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, flex: 1 }} >


      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
      >

        <View style={{ backgroundColor: Colors.SECONDARY }} className="pb-4 z-50">

          <View className="flex items-center mt-4">
            <View className="border border-gray-700 bg-gray-900 flex-row px-3 py-2 w-11/12 rounded-lg shadow-lg justify-between items-center">
              <Ionicons name="reorder-three" size={34} color="white" onPress={() =>
                navigation.dispatch(DrawerActions.toggleDrawer())
              } />
              <Octicons name="bell-fill" size={24} color="white" />
            </View>
          </View>
        </View>
        <View className="w-full px-4  items-center">
          <ImageBackground
            className="h-52 w-full items-center justify-center overflow-hidden rounded-xl"
            source={require("../../../assets/images/food.jpg")}>
            <View className="absolute inset-0 bg-black/60 items-center justify-center">
              <Text className="text-white text-4xl font-extrabold">Welcome To TableIO</Text>
            </View>
          </ImageBackground>
        </View>
        <View className="p-4">
          <Text className="text-white text-3xl font-semibold">Special Discount</Text>
        </View>

        {
          DELHI_RESTAURANT_DATA.length > 0 ?
            <FlatList
              data={DELHI_RESTAURANT_DATA}
              renderItem={renderResturantItem}
              keyExtractor={(item) => `list1-${item.id}`}
              horizontal
              contentContainerStyle={{ paddingLeft: 16, paddingRight: 0 }}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
            />
            : <ActivityIndicator animating color={"#000000"} />
        }
         <View className="p-4">
          <Text className="text-white text-3xl font-semibold">Our Resturant's</Text>
        </View>

        {
          DELHI_RESTAURANT_DATA.length > 0 ?
            <FlatList
              data={DELHI_RESTAURANT_DATA}
              renderItem={renderResturantItem}
              keyExtractor={(item) => `list2-${item.id}`}
              horizontal
              contentContainerStyle={{ paddingLeft: 16, paddingRight: 0 }}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
            />
            : <ActivityIndicator animating color={"#000000"} />
        }
       

        {
          DELHI_RESTAURANT_DATA.length > 0 ?
            <FlatList
              data={DELHI_RESTAURANT_DATA}
              renderItem={renderResturantItem}
              keyExtractor={(item) => `list3-${item.id}`}
              horizontal
              contentContainerStyle={{ paddingLeft: 16, paddingRight: 0 }}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
            />
            : <ActivityIndicator animating color={"#000000"} />
        }
        <View className="flex justify-center items-center">
          <Image source={require("../../../assets/images/bottomLogo.png")} className="w-[400px] h-[200px] resize-contain" />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home