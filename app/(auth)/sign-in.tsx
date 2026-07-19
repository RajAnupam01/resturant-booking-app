import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signinSchema, signinFormData } from "../../validations/authSchema"
import { router } from "expo-router";
import {  ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";

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
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.replace("/(drawer)/(tabs)/home")
    } catch (error: any) {
      let errorMessage = "Something went wrong. Please try again.";

      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = "Invalid email or password.";
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = "Too many failed attempts. Please try again later.";
      }
      console.error("Login error:", error);
      alert(errorMessage);
    }
  }

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#090A0A' }}>
      <StatusBar barStyle="light-content" backgroundColor="#090A0A" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Branding Section */}
        <View className="items-center mb-4">
          <Text className="text-2xl text-white font-bold mt-2">Welcome Back</Text>
          <Text className="text-gray-400 text-sm mt-1 font-medium">Sign in to continue your dining experience</Text>
        </View>

        {/* Dynamic Card Form Workspace */}
        <View className="w-[88%] mx-auto bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-xl">

          {/* 1. EMAIL FIELD */}
          <Text className="text-gray-300 font-medium mb-2 text-sm">Email Address</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`bg-black/40 border p-3.5 rounded-xl text-white mb-1 text-base ${errors.email ? 'border-red-500/70' : 'border-gray-800 focus:border-gray-600'
                  }`}
                placeholder="name@example.com"
                placeholderTextColor="#64748B"
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
            <Text className="text-red-400 text-xs mb-3 pl-1 font-medium">{errors.email.message}</Text>
          )}

          {/* 2. PASSWORD FIELD */}
          <View className="mt-2">
            <Text className="text-gray-300 font-medium mb-2 text-sm">Password</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`bg-black/40 border p-3.5 rounded-xl text-white mb-1 text-base ${errors.password ? 'border-red-500/70' : 'border-gray-800 focus:border-gray-600'
                    }`}
                  placeholder="Enter your password"
                  placeholderTextColor="#64748B"
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
              <Text className="text-red-400 text-xs mb-3 pl-1 font-medium">{errors.password.message}</Text>
            )}
          </View>


          {/* SUBMIT BUTTON */}
          <TouchableOpacity
            className={`mt-4 p-4 rounded-xl items-center flex-row justify-center shadow-lg active:opacity-90 ${isSubmitting ? 'bg-gray-800' : 'bg-amber-400'
              }`}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#ffffff" className="mr-2" />
            ) : null}
            <Text className={`font-bold text-base ${isSubmitting ? 'text-gray-500' : 'text-black'}`}>
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Text>
          </TouchableOpacity>

        </View>

        {/* BOTTOM REDIRECT INTERACTION */}
        <View className="flex-row justify-center items-center mt-8 mb-6">
          <Text className="text-gray-400 text-sm">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-up" as any)}>
            <Text className="text-amber-400 font-bold text-sm underline pl-0.5">Sign Up</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Signin