import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { db } from "@/config/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useUser } from "@/context/userContext";
import PaymentModal from "@/components/PaymentModal";

const CheckoutScreen = () => {
    const router = useRouter();
    const { profile } = useUser();
    const params = useLocalSearchParams();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false)

    // Destructure passed parameters
    const { restaurantId, restaurantName, guests, date, timeSlot, tablePrice } = params;


    const guestCount = parseInt(guests as string, 10) || 1;
    const pricePerTable = parseFloat(tablePrice as string) || 10.00;
    const bookingFee = 15.00;
    const totalCostNumeric = (guestCount * pricePerTable) + bookingFee;
    const totalCost = totalCostNumeric.toFixed(2);

    const handlePaymentAndConfirm = async () => {
        try {
            setIsProcessing(true);

            const bookingData = {
                restaurantId,
                restaurantName,
                userId: profile?.uid || "Anonymous",
                userName: profile?.name || "Guest",
                userEmail: profile?.email || "",
                userPhone: profile?.phone || "",
                guests: parseInt(guests as string) || 1,
                date,
                timeSlot,
                paymentStatus: "paid",
                amountPaid: parseFloat(totalCost),
                createdAt: serverTimestamp()
            };

            await addDoc(collection(db, "bookings"), bookingData);

            Alert.alert(
                "Booking Confirmed 🎉",
                "Your payment was successful and your table is booked!",
                [
                    {
                        text: "Awesome",
                        onPress: () => {
                            router.back(); 
                        },
                    },
                ]
            );

        } catch (error) {
            console.error("Error during checkout: ", error);
            Alert.alert("Checkout Failed", "Could not complete the transaction. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <View className="flex-1 bg-neutral-950 p-6 justify-between">
            <View className="mt-8">
                <Text className="text-white text-3xl font-extrabold mb-6">Billing Section</Text>

                {/* Summary Card */}
                <View className="bg-neutral-900 rounded-2xl p-5 border border-neutral-800 mb-6">
                    <Text className="text-amber-400 font-bold text-lg mb-4">{restaurantName}</Text>

                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-400">Date</Text>
                        <Text className="text-white font-medium">{date}</Text>
                    </View>
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-400">Time</Text>
                        <Text className="text-white font-medium">{timeSlot}</Text>
                    </View>
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-400">Guests</Text>
                        <Text className="text-white font-medium">{guests} Person(s)</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Table Price</Text>
                        <Text className="text-white font-medium">₹ {tablePrice} per person</Text>
                    </View>
                </View>

                {/* Pricing Summary */}
                <View className="bg-neutral-900 rounded-2xl p-5 border border-neutral-800">
                    <Text className="text-white font-bold text-lg mb-4">Pricing Details</Text>
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-400">Reservation Fee</Text>
                        <Text className="text-white">₹ {bookingFee.toFixed(2)}</Text>
                    </View>
                    <View className="h-[1px] bg-neutral-800 my-2" />
                    <View className="flex-row justify-between">
                        <Text className="text-white font-bold">Total Due</Text>
                        <Text className="text-amber-400 font-bold">₹ {totalCost}</Text>
                    </View>
                </View>
            </View>

            {/* Bottom Pay Button */}
            <TouchableOpacity
                disabled={isProcessing}
                onPress={() => setIsModalVisible(true)}
                className="bg-amber-400 rounded-xl p-4 mb-24"
            >
                {isProcessing ? (
                    <ActivityIndicator color="#000" />
                ) : (
                    <Text className="text-center text-black font-extrabold text-lg">
                        Pay ${totalCost} & Confirm
                    </Text>
                )}
            </TouchableOpacity>

            <PaymentModal
                visible={isModalVisible}
                amount={totalCost}
                onClose={() => setIsModalVisible(false)}
                onConfirm={() => {
                    setIsModalVisible(false);
                    handlePaymentAndConfirm();
                }}
            />
        </View>
    );
};

export default CheckoutScreen;