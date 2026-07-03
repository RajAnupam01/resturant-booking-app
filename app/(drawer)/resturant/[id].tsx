import { View, Text, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DELHI_RESTAURANT_DATA, Restaurant } from '../../../store/data';

const RestaurantDetails = () => {
  const { id } = useLocalSearchParams();
  
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        setIsLoading(true); 

        await new Promise((resolve) => setTimeout(resolve, 1500));

        const foundData = DELHI_RESTAURANT_DATA.find((item) => item.id === id);
        
        if (foundData) {
          setRestaurant(foundData);
        }
      } catch (error) {
        console.error("Error fetching backend data:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchRestaurantData();
  }, [id]);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#000000" />
        <Text className="text-gray-500 mt-4 font-medium">Fetching details...</Text>
      </SafeAreaView>
    );
  }

  if (!restaurant) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg text-gray-600">Restaurant not found or has been removed.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <Image source={{ uri: restaurant.imageUrl }} className="w-full h-64 rounded-xl mb-4" />
      <Text className="text-3xl font-extrabold text-gray-900">{restaurant.name}</Text>
      <Text className="text-md text-gray-500 mt-2">{restaurant.address}</Text>
      <Text className="text-sm text-gray-700 mt-4">
        Available Capacity: {restaurant.seats} seats
      </Text>
    </SafeAreaView>
  );
};

export default RestaurantDetails;


// import { View, Text, Image } from 'react-native';
// import React from 'react';
// import { useLocalSearchParams } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { DELHI_RESTAURANT_DATA } from '../../../store/data';

// const RestaurantDetails = () => {
//   const { id } = useLocalSearchParams();

//   const restaurant = DELHI_RESTAURANT_DATA.find((item) => item.id === id);

//   if (!restaurant) {
//     return (
//       <SafeAreaView className="flex-1 justify-center items-center">
//         <Text>Restaurant info not found.</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView className="flex-1 bg-white p-4">
//       <Image source={{ uri: restaurant.imageUrl }} className="w-full h-64 rounded-xl mb-4" />
//       <Text className="text-3xl font-extrabold text-gray-900">{restaurant.name}</Text>
//       <Text className="text-md text-gray-500 mt-2">{restaurant.address}</Text>
//       <Text className="text-sm text-gray-700 mt-4">
//         Available Capacity: {restaurant.seats} seats
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default RestaurantDetails;