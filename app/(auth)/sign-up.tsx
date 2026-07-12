import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema, signupFormData } from "../../validations/authSchema"
import { router } from "expo-router";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword, } from "firebase/auth"
import {auth} from "../../config/firebaseConfig"
import { doc, getFirestore, setDoc } from "firebase/firestore";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    }
  })

  const db = getFirestore()

  const onSubmit = async (data: signupFormData) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      const user = userCredentials.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: data.name,
        email: data.email,
        phone: data.phone,
        createdAt: new Date().toISOString(),
      })
      router.replace("/(drawer)/(tabs)/home")
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      } else {
        console.error("Submission error:", error);
        alert(error.message || "Something went wrong. Please try again.");
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#090A0A' }}>
      <StatusBar barStyle="light-content" backgroundColor="#090A0A" />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Branding Section */}
        <View className="items-center mb-2">

          <Text className="text-2xl text-white font-bold mt-1">Let's get started</Text>
          <Text className="text-gray-400 text-sm mt-1 font-medium">Create an account to start booking tables</Text>
        </View>

        {/* Dynamic Card Form Workspace */}
        <View className="w-[88%] mx-auto bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-xl mt-4">

          {/* 1. NAME FIELD */}
          <Text className="text-gray-300 font-medium mb-1.5 text-sm">Full Name</Text>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`bg-black/40 border p-3.5 rounded-xl text-white mb-1 text-base ${errors.name ? 'border-red-500/70' : 'border-gray-800 focus:border-gray-600'
                  }`}
                placeholder="John Doe"
                placeholderTextColor="#64748B"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="words"
              />
            )}
          />
          {errors.name && (
            <Text className="text-red-400 text-xs mb-2.5 pl-1 font-medium">{errors.name.message}</Text>
          )}

          {/* 2. EMAIL FIELD */}
          <Text className="text-gray-300 font-medium mb-1.5 text-sm mt-1.5">Email Address</Text>
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
            <Text className="text-red-400 text-xs mb-2.5 pl-1 font-medium">{errors.email.message}</Text>
          )}

          {/* 3. PHONE FIELD */}
          <Text className="text-gray-300 font-medium mb-1.5 text-sm mt-1.5">Phone Number</Text>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`bg-black/40 border p-3.5 rounded-xl text-white mb-1 text-base ${errors.phone ? 'border-red-500/70' : 'border-gray-800 focus:border-gray-600'
                  }`}
                placeholder="+1 234 567 890"
                placeholderTextColor="#64748B"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
              />
            )}
          />
          {errors.phone && (
            <Text className="text-red-400 text-xs mb-2.5 pl-1 font-medium">{errors.phone.message}</Text>
          )}

          {/* 4. PASSWORD FIELD */}
          <Text className="text-gray-300 font-medium mb-1.5 text-sm mt-1.5">Password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`bg-black/40 border p-3.5 rounded-xl text-white mb-1 text-base ${errors.password ? 'border-red-500/70' : 'border-gray-800 focus:border-gray-600'
                  }`}
                placeholder="Minimum 8 characters"
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
            <Text className="text-red-400 text-xs mb-2.5 pl-1 font-medium">{errors.password.message}</Text>
          )}

          {/* SUBMIT BUTTON */}
          <TouchableOpacity
            className={`mt-5 p-4 rounded-xl items-center flex-row justify-center shadow-lg active:opacity-90 ${isSubmitting ? 'bg-gray-800' : 'bg-amber-400'
              }`}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <ActivityIndicator size="small" color="#ffffff" className="mr-2" />
            )}
            <Text className={`font-bold text-base ${isSubmitting ? 'text-gray-500' : 'text-black'}`}>
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

        </View>

        {/* BOTTOM REDIRECT INTERACTION */}
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-400 text-sm">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-in" as any)}>
            <Text className="text-amber-400 font-bold text-sm underline pl-0.5">Sign In</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup
