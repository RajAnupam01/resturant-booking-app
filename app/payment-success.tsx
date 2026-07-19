import { View, Text } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentSuccess() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
      // or router.replace("/(tabs)");
      // whichever is your home page
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-black justify-center items-center px-8">

      <Ionicons
        name="checkmark-circle"
        size={120}
        color="#22c55e"
      />

      <Text className="text-3xl font-bold text-white mt-6">
        Payment Successful
      </Text>

      <Text className="text-gray-400 text-center mt-3">
        Your table has been booked successfully.
      </Text>

      <Text className="text-gray-500 mt-10">
        Redirecting to home...
      </Text>

    </View>
  );
}