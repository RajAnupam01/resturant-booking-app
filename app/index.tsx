import { Colors } from "@/constants/Color";
import { router } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY }}>

      <ScrollView contentContainerStyle={{ height: "100%" }} >
        <View className=" mt-8 flex justify-center items-center" >
          <Image source={require("../assets/images/dish.png")} style={{ width: 250, height: 250, marginTop:15 }} />
          <View className="w-3/4 mt-16 " >
            <TouchableOpacity className="p-2 my-2 bg-[#FFD700] text-black rounded-lg" onPress={() => router.push("/(auth)/sign-up")} >
              <Text className="text-xl font-semibold text-center" >Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" mt-8 p-2 my-2 bg-[#004B87] border border-[#FFD700] rounded-lg" onPress={() => router.push("/home")} >
              <Text className="text-xl text-[#FFD700] font-semibold text-center" >Guest User</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-16 w-3/4  ">
            <Text className="text-center text-base font-semibold my-4 text-white">
              <View className="border-b-2 border-[#FFD700] p-2 mb-1 w-40" /> or{" "}
              <View className="border-b-2 border-[#FFD700] p-2 mb-1 w-40" />
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(auth)/sign-in")}
              className="w-full items-center"
            >
              <Text className="text-center text-white font-semibold">
                Already a User ?{"  "}
                <Text className="underline text-[#FFD700]">
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={'#004B87'} />
      </ScrollView>
    </SafeAreaView>
  );
}
