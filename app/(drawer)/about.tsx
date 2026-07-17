import { View, Text, ScrollView, ImageBackground, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Color";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      >
        {/* Hero */}
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
          }}
          className="h-52 rounded-3xl overflow-hidden items-center justify-center mb-6"
        >
          <View className="absolute inset-0 bg-black/70 items-center justify-center px-6">
            <Text className="text-emerald-400 text-4xl font-extrabold tracking-wide">
              TableIO
            </Text>

            <Text className="text-gray-300 text-sm text-center mt-3 leading-6">
              Making restaurant reservations effortless with real-time booking,
              seamless discovery, and memorable dining experiences.
            </Text>
          </View>
        </ImageBackground>

        {/* Mission */}
        <View className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5 mb-5">
          <Text className="text-white text-xl font-bold mb-3">
            Our Mission
          </Text>

          <Text className="text-gray-400 text-sm leading-6">
            TableIO helps diners discover great restaurants and reserve tables
            instantly without the frustration of long waiting times. Whether
            you're planning a casual lunch or celebrating a special occasion,
            our platform makes finding and booking the perfect table simple,
            fast, and reliable.
          </Text>
        </View>

        {/* Why Choose Us */}
        <View className="bg-neutral-900 border border-neutral-800 rounded-3xl p-5">
          <Text className="text-white text-xl font-bold mb-5">
            Why Choose TableIO?
          </Text>

          <View className="flex-row mb-5">
            <Ionicons name="flash" size={20} color="#34d399" />
            <View className="flex-1 ml-3">
              <Text className="text-white font-bold text-sm">
                Instant Reservations
              </Text>

              <Text className="text-gray-400 text-sm leading-6 mt-1">
                Live table availability lets you book your preferred table
                without unnecessary waiting.
              </Text>
            </View>
          </View>

          <View className="flex-row mb-5">
            <Ionicons name="options" size={20} color="#34d399" />

            <View className="flex-1 ml-3">
              <Text className="text-white font-bold text-sm">
                Smart Discovery
              </Text>

              <Text className="text-gray-400 text-sm leading-6 mt-1">
                Explore restaurants by cuisine, location, offers, and seating
                preferences with an intuitive browsing experience.
              </Text>
            </View>
          </View>

          <View className="flex-row">
            <Ionicons name="gift" size={20} color="#34d399" />

            <View className="flex-1 ml-3">
              <Text className="text-white font-bold text-sm">
                Exclusive Benefits
              </Text>

              <Text className="text-gray-400 text-sm leading-6 mt-1">
                Enjoy special promotions, exclusive restaurant deals, and a
                hassle-free booking experience with zero hidden charges.
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="items-center mt-8">
          <Text className="text-gray-500 text-xs">
            Version 1.0.0 • Production Build
          </Text>

          <Text className="text-gray-600 text-xs mt-1">
            © 2026 TableIO Technologies
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;