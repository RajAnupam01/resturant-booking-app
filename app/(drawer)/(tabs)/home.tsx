import { View, Text, Image, ScrollView, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Color';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { DrawerActions } from '@react-navigation/native';
import { Restaurant } from "../../../store/data"
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "../../../config/firebaseConfig"

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [recentlyViewed, setRecentlyViewed] = useState<Restaurant[]>([]);
  const router = useRouter();
  const navigation = useNavigation();

  const getRestaurants = async () => {
    try {
      const q = query(collection(db, "restaurants"));
      const querySnapshot = await getDocs(q);
      const fetchedRestaurants = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Restaurant, 'id'>)
      }));
      setRestaurant(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    } 
  };

  const loadRecentlyViewed = async()=>{
    try {
      const storedHistory = await AsyncStorage.getItem('recently_viewed')
      if(storedHistory){
        setRecentlyViewed(JSON.parse(storedHistory))
      }
    } catch (error) {
      console.log("Error loading History",error)
    }
  }

  useEffect(() => {
    getRestaurants();
    loadRecentlyViewed();
  }, []);

  const handleRestaurantClick = async (item: Restaurant) => {
    try {
      const filtered = recentlyViewed.filter(res => res.id !== item.id);
      const updatedHistory = [item, ...filtered].slice(0, 5);
      setRecentlyViewed(updatedHistory); 
      await AsyncStorage.setItem('recently_viewed', JSON.stringify(updatedHistory));
    } catch (error) {
      console.log("Error saving History", error);
    }
    
    router.push({
      pathname: '/resturant/[id]',
      params: { id: item.id }
    });
  };

  const renderRestaurantItem = ({ item }: { item: any }) => {
    if (loading) {
      return (
        <View className="bg-gray-800 rounded-lg mb-4 mt-4 mr-4 ml-4 overflow-hidden w-64 h-64 opacity-40">
          <View className="w-full h-44 bg-gray-700" />
          <View className="p-3">
            <View className="h-5 bg-gray-700 rounded w-3/4 mb-2" />
            <View className="h-3 bg-gray-700 rounded w-1/2 mb-2" />
            <View className="h-3 bg-gray-700 rounded w-5/6" />
          </View>
        </View>
      );
    }

    const restaurantItem = item as Restaurant;

    return (
      <TouchableOpacity
        className="bg-white rounded-lg mb-4 mt-4 mr-4 ml-4 overflow-hidden shadow-md android:elevation-3 w-64"
        onPress={() => handleRestaurantClick(restaurantItem)}
      >
        <Image
          source={{ uri: restaurantItem.image }}
          className="w-full h-44 object-cover"
        />

        <View className="p-3">
          <Text className="text-lg font-bold text-gray-900 mb-1">
            {restaurantItem.name}
          </Text>
          <Text className="text-sm text-gray-600 mb-1" numberOfLines={1}>
            {restaurantItem.address}
          </Text>
          <Text className="text-xs text-gray-400">
            Seats: {restaurantItem.seats} | Timing: {restaurantItem.opening} - {restaurantItem.closing}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRecentlyViewedItem = ({ item }: { item: Restaurant }) => {
    return (
      <TouchableOpacity
  
        className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex-row p-2 w-72 mr-4 mb-4 items-center"
        onPress={() => handleRestaurantClick(item)}
      >
        <Image
          source={{ uri: item.image }}
          className="w-20 h-20 rounded-lg object-cover"
        />

        <View className="flex-1 ml-3 justify-center">
          <Text className="text-white text-base font-bold mb-0.5" numberOfLines={1}>
            {item.name}
          </Text>
          <Text className="text-gray-400 text-xs mb-1" numberOfLines={1}>
            {item.address}
          </Text>
          <View className="bg-emerald-500/10 self-start px-2 py-0.5 rounded">
            <Text className="text-emerald-400 text-[10px] font-medium">
              ★ Quick View
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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

        <View className="w-full px-4 items-center">
          <ImageBackground
            className="h-52 w-full items-center justify-center overflow-hidden rounded-xl"
            source={require("../../../assets/images/food.jpg")}>
            <View className="absolute inset-0 bg-black/60 items-center justify-center">
              <Text className="text-white text-4xl font-extrabold">Welcome To TableIO</Text>
            </View>
          </ImageBackground>
        </View>

        <View className="p-4">
          <Text className="text-white text-3xl font-semibold">Our Resturant's</Text>
        </View>

        <FlatList
          data={loading ? [1, 2, 3] : restaurant}
          renderItem={renderRestaurantItem}
          horizontal
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 0 }}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          keyExtractor={(item, index) => loading ? `skeleton-${index}` : item.id}
        />

        {recentlyViewed.length > 0 &&
          <>
            <View className="p-4">
              <Text className="text-white text-3xl font-semibold">Recently Viewed</Text>
            </View>
            <FlatList
              data={recentlyViewed}
              renderItem={renderRecentlyViewedItem}
              horizontal
              contentContainerStyle={{ paddingLeft: 24, paddingRight: 0 }}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
              keyExtractor={(item) => `recent-${item.id}`}
            />
          </>
        }

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;