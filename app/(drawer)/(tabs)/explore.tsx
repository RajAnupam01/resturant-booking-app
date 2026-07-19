import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";

const DELHI_HUBS = [
  {
    id: "cp",
    name: "Connaught Place",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600",
    tag: "Heart of Delhi",
  },
  {
    id: "hkv",
    name: "Hauz Khas Village",
    image:
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=600",
    tag: "Cafes & Lake Views",
  },
  {
    id: "gk",
    name: "Greater Kailash",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    tag: "Upscale Dining",
  },
  {
    id: "cyber",
    name: "CyberHub",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
    tag: "Corporate Hangouts",
  },
];

const METRO_LINES = [
  {
    id: "yellow",
    name: "Yellow Line",
    color: "#FFD700",
    stations: "Rajiv Chowk • GTB Nagar • Saket",
  },
  {
    id: "blue",
    name: "Blue Line",
    color: "#007FFF",
    stations: "Rajouri Garden • Karol Bagh • Noida Sec 18",
  },
  {
    id: "magenta",
    name: "Magenta Line",
    color: "#FF007F",
    stations: "IIT Delhi • Nehru Place • Kalkaji",
  },
  {
    id: "pink",
    name: "Pink Line",
    color: "#FFB6C1",
    stations: "South Campus • Lajpat Nagar • NSP",
  },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLine, setSelectedLine] = useState<string | null>(null);

  return (
    <SafeAreaView  edges={["top"]}
      style={{ backgroundColor: Colors.SECONDARY, flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >

        {/* Header */}
        <View className="mb-7">
          <Text className="text-white text-3xl font-extrabold">
            Explore Delhi NCR
          </Text>

          <Text className="text-gray-400 text-sm mt-2 leading-6">
            Discover restaurants, food hubs, and dining experiences near you.
          </Text>
        </View>


        {/* Search */}
        <View className="flex-row items-center bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-4 mb-8">

          <Ionicons
            name="search"
            size={22}
            color="#9ca3af"
          />

          <TextInput
            placeholder="Search CP, CyberHub, Hauz Khas..."
            placeholderTextColor="#6b7280"
            className="flex-1 ml-3 text-base text-white"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchQuery("")}
            >
              <Ionicons
                name="close-circle"
                size={20}
                color="#6b7280"
              />
            </TouchableOpacity>
          )}

        </View>



        {/* Food Hubs */}
        <View className="mb-8">

          <Text className="text-white text-xl font-bold mb-4">
            Famous Food Hubs
          </Text>


          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >

            {DELHI_HUBS.map((hub) => (

              <TouchableOpacity
                key={hub.id}
                className="
                w-56
                mr-4
                bg-neutral-900
                border
                border-neutral-800
                rounded-3xl
                overflow-hidden
                "
              >

                <Image
                  source={{ uri: hub.image }}
                  className="w-full h-36"
                />


                <View className="p-4">

                  <Text
                    className="text-white text-base font-bold"
                    numberOfLines={1}
                  >
                    {hub.name}
                  </Text>


                  <Text className="text-emerald-400 text-sm mt-1">
                    {hub.tag}
                  </Text>

                </View>


              </TouchableOpacity>

            ))}

          </ScrollView>

        </View>




        {/* Metro */}
        <View className="mb-8">


          <View className="flex-row justify-between items-center mb-4">

            <Text className="text-white text-xl font-bold">
              Search by Metro Line
            </Text>


            <View className="bg-blue-500/10 px-3 py-1 rounded-full">

              <Text className="text-blue-400 text-xs font-semibold">
                DMRC Enabled
              </Text>

            </View>


          </View>


          <Text className="text-gray-400 text-sm leading-6 mb-5">
            Book restaurants close to metro stations and avoid Delhi traffic.
          </Text>



          {METRO_LINES.map((line)=>{

            const active =
              selectedLine === line.id;


            return (

              <TouchableOpacity
                key={line.id}
                onPress={() =>
                  setSelectedLine(
                    active ? null : line.id
                  )
                }
                className={`
                flex-row
                items-center
                p-5
                rounded-3xl
                mb-4
                border
                ${
                  active
                  ?
                  "bg-neutral-800 border-emerald-500"
                  :
                  "bg-neutral-900 border-neutral-800"
                }
                `}
              >


                <View
                  style={{
                    backgroundColor: line.color
                  }}
                  className="
                  w-5
                  h-5
                  rounded-full
                  mr-4
                  "
                />



                <View className="flex-1">

                  <Text className="text-white text-base font-bold">

                    {line.name}

                  </Text>


                  <Text className="text-gray-400 text-sm mt-1">

                    {line.stations}

                  </Text>


                </View>


                <Ionicons
                  name={
                    active
                    ?
                    "chevron-down"
                    :
                    "chevron-forward"
                  }
                  size={20}
                  color="#9ca3af"
                />

              </TouchableOpacity>

            )

          })}


        </View>



        {/* Tip Card */}

        <View className="
          bg-neutral-900
          border
          border-neutral-800
          rounded-3xl
          p-5
        ">

          <Text className="text-white text-lg font-bold mb-3">
            💡 Delhi Dining Tip
          </Text>


          <Text className="text-gray-400 text-sm leading-6">

            Connaught Place and CyberHub become extremely busy during
            weekends. Reserve your table early to enjoy a stress-free
            dining experience.

          </Text>


        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;