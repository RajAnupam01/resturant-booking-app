import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSupportEmail = () => {
    if (!subject || !message) {
      Alert.alert(
        "Missing Information",
        "Please enter both a subject and message."
      );
      return;
    }

    const emailUrl = `mailto:support@tableio.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    Linking.openURL(emailUrl);
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      >
        {/* Header */}

        <View className="mb-6">
          <Text className="text-white text-3xl font-extrabold">
            Help & Support
          </Text>

          <Text className="text-gray-400 text-sm mt-2 leading-6">
            Need assistance with reservations, payments, or bookings? We're
            always happy to help.
          </Text>
        </View>

        {/* Contact Options */}

        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            className="bg-neutral-900 border border-neutral-800 rounded-3xl w-[48%] p-5 items-center"
            onPress={() => Linking.openURL("mailto:support@tableio.com")}
          >
            <Ionicons name="mail" size={28} color="#34d399" />

            <Text className="text-white font-bold text-sm mt-3">
              Email Support
            </Text>

            <Text className="text-gray-400 text-xs mt-1">
              support@tableio.com
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-neutral-900 border border-neutral-800 rounded-3xl w-[48%] p-5 items-center"
            onPress={() => Linking.openURL("tel:+911140000000")}
          >
            <Ionicons name="call" size={28} color="#34d399" />

            <Text className="text-white font-bold text-sm mt-3">
              Call Support
            </Text>

            <Text className="text-gray-400 text-xs mt-1">
              011-4000-0000
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ticket */}

        <View className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5">
          <Text className="text-white text-xl font-bold mb-5">
            Send a Support Ticket
          </Text>

          <Text className="text-gray-300 text-sm font-semibold mb-2">
            Subject
          </Text>

          <TextInput
            value={subject}
            onChangeText={setSubject}
            placeholder="Booking issue, refund, payment..."
            placeholderTextColor="#6b7280"
            className="bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-4 text-base text-white mb-5"
          />

          <Text className="text-gray-300 text-sm font-semibold mb-2">
            Message
          </Text>

          <TextInput
            value={message}
            onChangeText={setMessage}
            multiline
            textAlignVertical="top"
            placeholder="Tell us how we can help..."
            placeholderTextColor="#6b7280"
            className="bg-neutral-950 border border-neutral-800 rounded-2xl px-4 py-4 h-40 text-base text-white mb-6"
          />

          <TouchableOpacity
            onPress={handleSupportEmail}
            className="bg-emerald-500 rounded-2xl py-4 items-center"
          >
            <Text className="text-black text-base font-bold">
              Send Email
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;