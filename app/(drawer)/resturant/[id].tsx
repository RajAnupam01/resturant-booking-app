import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Restaurant } from '../../../store/data';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../../config/firebaseConfig";
import Booking from '@/components/Booking';

const RestaurantDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        const docRef = doc(db, "restaurants", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const foundData = {
            id: docSnap.id,
            ...(docSnap.data() as Omit<Restaurant, 'id'>)
          };
          setRestaurant(foundData);
        } else {
          console.log("No such document found!");
          setRestaurant(null);
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
      <ScrollView>
        <Image source={{ uri: restaurant.image }} className="w-full h-64 rounded-xl mb-4" />
        <Text className="text-3xl font-extrabold text-gray-900">{restaurant.name}</Text>
        <Text className="text-md text-gray-500 mt-2">{restaurant.address}</Text>
        <Text className="text-sm text-gray-700 mt-4">
          Available Capacity: {restaurant.seats} seats
        </Text>
        <Text className="text-sm text-gray-700 mt-1">
          Hours: {restaurant.opening} - {restaurant.closing}
        </Text>
        <Booking />
      </ScrollView>

    </SafeAreaView>
  );
};

export default RestaurantDetails;
