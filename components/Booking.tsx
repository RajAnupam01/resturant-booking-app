import { useUser } from "@/context/userContext";
import React, { useState } from "react";
import { Calendar } from 'react-native-calendars';
import {
    Alert,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface BookingProps {
    restaurantId: string;
    restaurantName: string;
    availableSeats: number;
    availableSlots: string[];
}

const Booking = ({ restaurantId, restaurantName, availableSeats, availableSlots }: BookingProps) => {
    const { isGuest } = useUser();

    // 1. Core State Architecture Setup
    const [people, setPeople] = useState(2);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [slot, setSlot] = useState<string | null>(null);

    // 2. Dynamic Form Validation and Submission Logic
    const handleBooking = () => {
        if (isGuest) {
            Alert.alert(
                "Sign In Required",
                "Please sign in to book a table."
            );
            return;
        }

        // Safety block: prevent confirming if a time slot hasn't been chosen yet
        if (!slot) {
            Alert.alert(
                "Time Slot Required",
                "Please pick a preferred time slot before confirming your table."
            );
            return;
        }

        // Output confirmation using the live state data values selected by the user
        Alert.alert(
            "Booking Confirmed 🎉",
            `Your table for ${people} guest(s) at ${restaurantName} has been reserved on ${date} at ${slot}.`
        );
    };

    // 3. Simple Bounding Helper for Calendar Limits
    const getFutureCutOffDates = () => {
        const today = new Date();
        today.setDate(today.getDate() + 6);
        return today.toISOString().split('T')[0];
    };

    return (
        <View className="bg-neutral-900 rounded-2xl p-5 mt-6">
            <Text className="text-white text-xl font-bold mb-4">
                Book a Table
            </Text>

            {/* Date Picker Selection Component */}
            <Calendar
                minDate={new Date().toISOString().split('T')[0]}
                maxDate={getFutureCutOffDates()}
                markedDates={{
                    [date]: { selected: true, selectedColor: '#fbbf24', selectedTextColor: '#000000' }
                }}
                onDayPress={(day) => {
                    setDate(day.dateString); // Updates state to 'YYYY-MM-DD' layout string
                }}
                theme={{
                    backgroundColor: '#171717',
                    calendarBackground: '#262626',
                    dayTextColor: '#ffffff',
                    todayTextColor: '#fbbf24',
                    arrowColor: '#fbbf24',
                    monthTextColor: '#ffffff',
                    textDisabledColor: '#404040',
                }}
            />

            {/* Time Slot Selection 2x4 Layout Block */}
            <View className="mb-4 mt-4">
                <Text className="text-gray-400 mb-2">Select Time Slot</Text>

                <View className="flex-row flex-wrap justify-between">
                    {availableSlots && availableSlots.map((timeOption) => {
                        const isSelected = timeOption === slot;

                        return (
                            <TouchableOpacity
                                key={timeOption}
                                onPress={() => setSlot(timeOption)}
                                className={`w-[23%] mb-2 py-3 rounded-xl border items-center justify-center ${
                                    isSelected
                                        ? "bg-amber-400 border-amber-400"
                                        : "bg-neutral-800 border-neutral-700"
                                }`}
                            >
                                <Text className={`font-semibold text-sm ${isSelected ? "text-black" : "text-white"}`}>
                                    {timeOption}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>

            {/* Guests Counter Component */}
            <View className="mb-6">
                <Text className="text-gray-400 mb-2">Guests</Text>

                <View className="flex-row items-center justify-between bg-neutral-800 rounded-xl p-3">
                    <TouchableOpacity
                        onPress={() => people > 1 && setPeople(people - 1)}
                        className="bg-amber-400 rounded-full w-10 h-10 items-center justify-center"
                    >
                        <Text className="text-black text-xl font-bold">−</Text>
                    </TouchableOpacity>

                    <Text className="text-white text-lg font-bold">
                        {people}
                    </Text>

                    <TouchableOpacity
                        onPress={() => setPeople(people + 1)}
                        className="bg-amber-400 rounded-full w-10 h-10 items-center justify-center"
                    >
                        <Text className="text-black text-xl font-bold">+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Action Trigger Button */}
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