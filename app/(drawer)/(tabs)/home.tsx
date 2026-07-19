import { View, Text, Image, ScrollView, ImageBackground, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Color';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerActions } from '@react-navigation/native';
import { Restaurant, Discount, Cuisine } from "../../../store/data"
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "@/config/firebaseConfig";
import { useUser } from '@/context/userContext';

const Home = () => {
  const { authUser } = useUser();
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const [discount, setDiscount] = useState<Discount[]>([])
  const [cuisine, setCuisine] = useState<Cuisine[]>([])
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

  const getDiscount = async () => {
    try {
      const q = query(collection(db, "discounts"));
      const querySnapshot = await getDocs(q);
      const fetchedDiscounts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Discount, 'id'>)
      }))
      setDiscount(fetchedDiscounts)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const getCuisine = async () => {
    try {
      const q = query(collection(db, "cuisines"));
      const querySnapshot = await getDocs(q);
      const fetchedCuisines = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Cuisine, 'id'>)
      }))
      setCuisine(fetchedCuisines)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const loadRecentlyViewed = async () => {
    try {
      const storedHistory = await AsyncStorage.getItem(`recently_viewed_${authUser?.uid}`)
      if (storedHistory) {
        setRecentlyViewed(JSON.parse(storedHistory))
      }
    } catch (error) {
      console.log("Error loading History", error)
    }
  }
  const clearRecentlyViewed = async () => {
    Alert.alert(
      "Clear History",
      "Are you sure you want to remove all recently viewed restaurants?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          style: "destructive",
          onPress: async () => {
            try {
              setRecentlyViewed([]);

              await AsyncStorage.removeItem(
                `recently_viewed_${authUser?.uid}`
              );
            } catch (error) {
              console.log("Error clearing history", error);
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    const initFetch = async () => {
      setLoading(true);
      await Promise.all([getRestaurants(), getDiscount(), getCuisine(), loadRecentlyViewed()]);
      setLoading(false);
    };
    initFetch();
  }, []);

  const handleRestaurantClick = async (item: Restaurant) => {
    router.push({
      pathname: '/resturant/[id]',
      params: { id: item.id }
    });
    try {
      const filtered = recentlyViewed.filter(res => res.id !== item.id);
      const updatedHistory = [item, ...filtered].slice(0, 5);
      setRecentlyViewed(updatedHistory);
      await AsyncStorage.setItem(
        `recently_viewed_${authUser?.uid}`,
        JSON.stringify(updatedHistory)
      );
    } catch (error) {
      console.log("Error saving History", error);
    }
  };

  const renderRestaurantItem = ({ item }: { item: any }) => {
    if (loading) {
      return (
        <View className="bg-gray-800 rounded-xl mr-4 overflow-hidden w-64 h-64 opacity-40">
          <View className="w-full h-40 bg-gray-700" />
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
        className="bg-white rounded-xl mr-4 overflow-hidden shadow-md android:elevation-3 w-64"
        onPress={() => handleRestaurantClick(restaurantItem)}
      >
        <Image
          source={{ uri: restaurantItem.image }}
          className="w-full h-40 object-cover"
        />
        <View className="p-3">
          <Text className="text-base font-bold text-gray-900 mb-1" numberOfLines={1}>
            {restaurantItem.name}
          </Text>
          <Text className="text-xs text-gray-600 mb-1" numberOfLines={1}>
            {restaurantItem.address}
          </Text>
          <Text className="text-[11px] text-gray-400">
            Seats: {restaurantItem.seats} | Timing: {restaurantItem.opening} - {restaurantItem.closing}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderDiscountItem = ({ item }: { item: Discount }) => {
    return (
      <View className="w-72 h-40 mr-4 rounded-xl overflow-hidden bg-gray-900 shadow-md">
        <Image
          source={{ uri: item.image }}
          className="w-full h-full object-cover"
        />
      </View>
    );
  };

  const renderCuisineItem = ({ item }: { item: Cuisine }) => {
    return (
      <View className="w-36 mr-4 items-center">
        <View className="w-36 h-36 rounded-full overflow-hidden bg-gray-900 shadow-md">
          <Image
            source={{ uri: item.image }}
            className="w-full h-full object-cover"
          />
        </View>
        <Text
          className="text-white text-sm font-medium mt-2 text-center w-full"
          numberOfLines={1}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView  edges={["top"]} style={{ backgroundColor: Colors.SECONDARY, flex: 1 }} >
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >

        <View style={{ backgroundColor: Colors.SECONDARY }} className="pb-3 z-50">
          <View className="flex items-center mt-3">
            <View className="border border-gray-700 bg-gray-900 flex-row px-3 py-2 w-11/12 rounded-xl shadow-lg justify-between items-center">
              <Ionicons name="reorder-three" size={34} color="white" onPress={() =>
                navigation.dispatch(DrawerActions.toggleDrawer())
              } />
              <Octicons name="bell-fill" size={24} color="white" />
            </View>
          </View>
        </View>


        <View className="w-full px-4 items-center mb-2">
          <ImageBackground
            className="h-48 w-full items-center justify-center overflow-hidden rounded-xl"
            source={require("../../../assets/images/food.jpg")}>
            <View className="absolute inset-0 bg-black/60 items-center justify-center">
              <Text className="text-white text-3xl font-extrabold">Welcome To TableIO</Text>
            </View>
          </ImageBackground>
        </View>


        {discount.length > 0 && (
          <>
            <View className="p-4 pt-4">
              <Text className="text-white text-xl font-bold">Special Offers</Text>
            </View>
            <FlatList
              data={discount}
              renderItem={renderDiscountItem}
              horizontal
              pagingEnabled={false}
              snapToInterval={304} // 288px (w-72) + 16px (mr-4)
              decelerationRate="fast"
              contentContainerStyle={{ paddingLeft: 16, paddingRight: 0 }}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
              keyExtractor={(item) => `discount-${item.id}`}
            />
          </>
        )}


        <View className="p-4 pt-4">
          <Text className="text-white text-xl font-bold">Our Restaurants</Text>
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


        {cuisine.length > 0 && (
          <>
            <View className="p-4 pt-4">
              <Text className="text-white text-xl font-bold">Available Cuisines</Text>
            </View>
            <FlatList
              data={cuisine}
              renderItem={renderCuisineItem}
              horizontal
              pagingEnabled={false}
              snapToInterval={160} // 144px (w-36) + 16px (mr-4)
              decelerationRate="fast"
              contentContainerStyle={{ paddingLeft: 16, paddingRight: 0 }}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
              keyExtractor={(item) => `cuisine-${item.id}`}
            />
          </>
        )}


        {authUser && restaurant.length > 0 && recentlyViewed.length > 0 && (
          <>
            <View className="p-4 mt-4 pt-4 flex-row justify-between items-center">
              <Text className="text-white text-xl font-bold">
                Recently Viewed
              </Text>

              <TouchableOpacity onPress={clearRecentlyViewed}>
                <Text className="text-red-400 text-sm font-semibold">
                  Clear All
                </Text>
              </TouchableOpacity>
            </View>
            {recentlyViewed.map((item) => (
              <TouchableOpacity
                key={`recent-${item.id}`}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex-row p-2 w-full mb-3 items-center"
                onPress={() => handleRestaurantClick(item)}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <View className="flex-1 ml-3 justify-center">
                  <Text className="text-white text-sm font-bold mb-0.5" numberOfLines={1}>
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
            ))}
          </>
        )}


      </ScrollView>
    </SafeAreaView >
  );
};

export default Home;