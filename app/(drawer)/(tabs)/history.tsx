import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import { useUser } from "@/context/userContext";
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import {db} from "../../../config/firebaseConfig"
import Swipeable from "react-native-gesture-handler/Swipeable";
import Foundation from '@expo/vector-icons/Foundation';

type Booking = {
  id: string;
  restaurantName: string
  date: string;
  timeSlot: string;
  guests: number;
  amountPaid: number;
  paymentStatus: string;
};

const History = () => {
  const { isGuest, profile } = useUser();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    if (!profile) {
      setLoading(false);
      return;
    }
    fetchBookings();
  }, [profile]);

  const handleRefresh = async () => {
    await fetchBookings(true);
  };

  const fetchBookings = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      }

      const q = query(
        collection(db, "bookings"),
        where("userEmail", "==", profile?.email)
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Booking[];
      setBookings(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      if (isRefresh) {
        setRefreshing(false);
      }
    }
  };

  const deleteBooking = async (bookingId: string) => {
    try {
      await deleteDoc(doc(db, "bookings", bookingId));
      setBookings((prev) =>
        prev.filter((booking) => booking.id != bookingId)
      )
      Alert.alert(
        "Booking Cancelled",
        "Your booking has been cancelled successfully.\n\nAny eligible refund will be credited to your original payment method shortly.",
        [{ text: "OK" }]
      );
    } catch (error) {
      console.log(error)
    }
  }

  const renderRightActions = (bookingId: string) => {
    return (
      <TouchableOpacity
        className=" justify-center items-center w-24 rounded-xl mb-4"
        onPress={() => {
          Alert.alert(
            "Delete Booking",
            "Are you sure you want to delete this booking?",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "Delete",
                style: "destructive",
                onPress: () => deleteBooking(bookingId)
              }
            ]
          )
        }}
      >
        <Foundation name="archive" size={24} color="white" />
      </TouchableOpacity>
    )
  }

  if (isGuest) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-950 p-6">
        <Text className="text-white text-lg text-center">Please sign in to view your booking history.</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-neutral-950">
        <ActivityIndicator size="large" color="#fbbf24" />
      </View>
    );
  }

  return (
    <FlatList
      className="bg-neutral-950"
      contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
      data={bookings}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <Text className="text-gray-500 text-center mt-20">No bookings found.</Text>
      }
      refreshing={refreshing}
      onRefresh={handleRefresh}
      renderItem={({ item }) => (
        <Swipeable
          renderRightActions={() => renderRightActions(item.id)}
        >
          <View className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 mb-4 shadow-sm">

            {/* Header Section */}
            <View className="flex-row justify-between items-start mb-3">
              <Text className="text-amber-400 text-xl font-bold flex-1" numberOfLines={1}>
                {item.restaurantName}
              </Text>
              <View className="bg-green-500/10 px-3 py-1 rounded-full">
                <Text className="text-green-400 text-xs font-bold uppercase tracking-wider">
                  {item.paymentStatus}
                </Text>
              </View>
            </View>

            {/* Details Grid */}
            <View className="flex-row justify-between border-t border-neutral-800 pt-3 mt-1">
              <View>
                <Text className="text-gray-400 text-xs uppercase tracking-widest mb-1">Date</Text>
                <Text className="text-white font-medium">📅 {item.date}</Text>
              </View>
              <View>
                <Text className="text-gray-400 text-xs uppercase tracking-widest mb-1">Time</Text>
                <Text className="text-white font-medium">🕒 {item.timeSlot}</Text>
              </View>
            </View>

            <View className="flex-row justify-between mt-4">
              <View>
                <Text className="text-gray-400 text-xs uppercase tracking-widest mb-1">Guests</Text>
                <Text className="text-white font-semibold">👥 {item.guests} People</Text>
              </View>
              <View className="items-end">
                <Text className="text-gray-400 text-xs uppercase tracking-widest mb-1">Total</Text>
                <Text className="text-white font-bold text-lg">₹{item.amountPaid}</Text>
              </View>
            </View>

          </View>
        </Swipeable>

      )}
    />
  );
};

export default History;