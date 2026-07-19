import "react-native-gesture-handler";
import { Colors } from "@/constants/Color";
import { router } from "expo-router";
import { Image, Animated, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@/context/userContext";
import { useEffect } from "react";

export default function Index() {
  const { authUser, loading, isGuest, continueAsGuest } = useUser();
  useEffect(() => {
    if (loading) return;

    if (authUser || isGuest) {
      router.replace("/(drawer)/(tabs)/home");
    }
  }, [authUser, isGuest, loading]);

  if (loading || authUser || isGuest) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.SECONDARY,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/mainLogo.png")}
          style={{
            width: 200,
            height: 200, // or let the aspect ratio determine the height
            resizeMode: "contain",
          }}
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY }}>
      <ScrollView contentContainerStyle={{ height: "100%" }} >
        <View className=" mt-4 flex justify-center items-center" >
          <Image source={require("../assets/images/mainLogo.png")} style={{ width: 200, height: 175, marginTop: 15 }} />
          <View className="w-3/4 mt-6 " >
            <TouchableOpacity className="p-2 my-2 bg-[#FFD700] text-black rounded-lg" onPress={() => router.push
              ("/(auth)/sign-up")} >
              <Text className="text-lg font-semibold text-center" >Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" mt-4 p-2 my-2 bg-black border border-[#FFD700] rounded-lg" onPress={() => router.push("/(auth)/sign-in")} >
              <Text className="text-lg text-[#FFD700] font-semibold text-center" >Sign In</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-8 w-3/4  ">
            <Text className="text-center text-base font-semibold my-4 text-white">
              <View className="border-b-2 border-[#FFD700] p-2 mb-1 w-[45%]" /> or{" "}
              <View className="border-b-2 border-[#FFD700] p-2 mb-1 w-[45%]" />
            </Text>
            <TouchableOpacity
              onPress={() => {
                continueAsGuest();
                router.replace("/(drawer)/(tabs)/home");
              }}
              className="w-full items-center mt-8"
            >
              <Text className="text-center text-white font-semibold">
                Skip for Now?{"  "}
                <Text className="text-[#FFD700]">
                  Try Guest Mode
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <Image source={require("../assets/images/bottomLogo.png")} className="w-[400px] h-[200px] resize-contain" />
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={'#000000'} />
      </ScrollView>
    </SafeAreaView>
  );
}
