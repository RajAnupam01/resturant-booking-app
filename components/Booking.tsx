import { useUser } from "@/context/userContext";
import React, { useState } from "react";
import {
    Alert,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Booking = () => {
    const { isGuest } = useUser();
    const [guests, setGuests] = useState(2);

    const bookingDate = "20 July 2026";
    const bookingTime = "7:00 PM";

    const handleBooking = () => {
        if (isGuest) {
            Alert.alert(
                "Sign In Required",
                "Please sign in to book a table."
            );
            return;
        }

        Alert.alert(
            "Booking Confirmed 🎉",
            `Your table for ${guests} guest(s) has been reserved on ${bookingDate} at ${bookingTime}.`
        );
    };

    return (
        <View className="bg-neutral-900 rounded-2xl p-5 mt-6">
            <Text className="text-white text-xl font-bold mb-4">
                Book a Table
            </Text>

            {/* Date */}
            <View className="mb-4">
                <Text className="text-gray-400">Date</Text>
                <View className="bg-neutral-800 rounded-xl p-3 mt-1">
                    <Text className="text-white">{bookingDate}</Text>
                </View>
            </View>

            {/* Time */}
            <View className="mb-4">
                <Text className="text-gray-400">Time</Text>
                <View className="bg-neutral-800 rounded-xl p-3 mt-1">
                    <Text className="text-white">{bookingTime}</Text>
                </View>
            </View>

            {/* Guests */}
            <View className="mb-6">
                <Text className="text-gray-400 mb-2">Guests</Text>

                <View className="flex-row items-center justify-between bg-neutral-800 rounded-xl p-3">
                    <TouchableOpacity
                        onPress={() => guests > 1 && setGuests(guests - 1)}
                        className="bg-amber-400 rounded-full w-10 h-10 items-center justify-center"
                    >
                        <Text className="text-black text-xl font-bold">−</Text>
                    </TouchableOpacity>

                    <Text className="text-white text-lg font-bold">
                        {guests}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setGuests(guests + 1)}
                        className="bg-amber-400 rounded-full w-10 h-10 items-center justify-center"
                    >
                        <Text className="text-black text-xl font-bold">+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                onPress={handleBooking}
                className="bg-amber-400 rounded-xl p-4"
            >
                <Text className="text-center text-black font-bold text-base">
                    Confirm Booking
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Booking;