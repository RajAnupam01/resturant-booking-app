import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinSchema, signinFormData } from "../../validations/authSchema"
import { Colors } from "@/constants/Color";
import { router } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = () => {


  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signinFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (data: signinFormData) => {
    try {
      console.log("Validatoin signup palyload", data)
    } catch (error) {
      console.error("submission error", error)
    }
  }


  return (
    <SafeAreaView style={{ flex:1, backgroundColor: Colors.SECONDARY }}>
      <ScrollView contentContainerStyle={{ height: "100%" }} >
        <View className=" mt-4 flex justify-center items-center">
          <Image source={require("../../assets/images/mainLogo.png")} style={{ width: 200, height: 175, marginTop: 15}} />
          <Text className="text-xl  text-white font-bold " >Welcome Back.</Text>
         </View>

        {/* Dynamic Card Form Workspace */}
        <View className="w-4/5 flex mx-auto bg-red-600  p-6 rounded-2xl mt-6 mb-8 shadow-md">

          

          {/* 2. EMAIL FIELD */}
          <Text className="text-white  font-semibold mb-1 mt-1">Email Address</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`border p-3 rounded-lg mb-1 ${errors.email ? 'border-red-500' : 'border-white'}`}
                placeholder="name@example.com"
                placeholderTextColor="#fff"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
              />
            )}
          />
          {errors.email && (
            <Text className="text-red-500 text-xs mb-3 font-medium">{errors.email.message}</Text>
          )}

        
          {/* 4. PASSWORD FIELD */}
          <Text className="text-white font-semibold mb-1 mt-1">Password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`border p-3 rounded-lg mb-1 ${errors.password ? 'border-red-500' : 'border-white'}`}
                placeholder="Minimum 8 characters"
                placeholderTextColor="#fff"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
              />
            )}
          />
          {errors.password && (
            <Text className="text-red-500 text-xs mb-3 font-medium">{errors.password.message}</Text>
          )}

          {/* SUBMIT BUTTON */}
          <TouchableOpacity
            className={`mt-4 p-4 rounded-xl items-center ${isSubmitting ? 'bg-gray-400' : 'bg-[#FFD700]'}`}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            <Text className="text-black font-bold text-base">
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

        </View>
         
        <StatusBar barStyle={"light-content"} backgroundColor={'#000000'} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signin