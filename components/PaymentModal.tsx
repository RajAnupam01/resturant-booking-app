import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount: string;
}

const PaymentModal = ({ visible, onClose, onConfirm, amount }: PaymentModalProps) => {
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleExpiryChange = (text: string) => {
    // Remove any non-numeric characters
    let cleanText = text.replace(/[^0-9]/g, '');

    // Add the slash automatically
    if (cleanText.length >= 2) {
      cleanText = cleanText.substring(0, 2) + '/' + cleanText.substring(2, 4);
    }

    setExpiry(cleanText);
  };

  const handlePay = () => {
    // Simple simulation logic
    if (card.length === 12 && expiry.length === 5) {
      onConfirm();
    } else {
      Alert.alert("Invalid Details", "Please enter valid card info to pay.");
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white p-6 rounded-t-3xl h-[65%]">
          <TouchableOpacity onPress={onClose} className="mr-2" >
            <Text className="text-right text-gray-500">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-500 p-4 rounded-md mt-4 mb-4">
            <Text className="text-center ">Pay With ➤ link</Text>
          </TouchableOpacity>

          <Text className="text-center font-semibold my-4 text-gray-500 text-sm">
            <View className="border border-gray-500 w-[36%]" /> or pay using{" "}
            <View className="border border-gray-500 w-[36%]" />
          </Text>

          <Text className="text-sm text-gray-500 mb-1">Card Information</Text>
          <View className="flex-row border items-center justify-between p-2">
            <TextInput
              placeholder="Card Number"
              placeholderTextColor="#666"
              className="bg-white text-black"
              keyboardType="numeric"
              value={card}
              onChangeText={setCard}
              maxLength={12}
            />
            <Image source={require("../assets/images/card.png")} style={{ width: 90, height: 22 }} />
          </View>

          <View className="flex-row border items-center justify-between p-2 mt-4 mb-4">
            <TextInput
              placeholder="MM/YY"
              placeholderTextColor="#666"
              className="bg-white text-black"
              onChangeText={handleExpiryChange} // Use the new handler
              value={expiry}
              maxLength={5}
              keyboardType="numeric" // Added this to ensure numeric keypad
            />
            <Image source={require("../assets/images/db.png")} style={{ width: 40, height: 20 }} />
          </View>


          <View className="border p-2">
            <Text className="text-sm font-bold">Save your info for secure 1-click checkout with Link</Text>
            <Text className="text-sm">Pay faster at Example, Inc. and thousands of businesses.</Text>
          </View>

          <TouchableOpacity onPress={handlePay} className="bg-blue-500 p-4 rounded-md mt-4 flex items-center ">
            <Text className="text-center text-white font-bold">Pay ₹{amount} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;