import { View, Text, ScrollView, TextInput, TouchableOpacity, Linking, Alert, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Color'
import { Ionicons } from '@expo/vector-icons'

const Contact = () => {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSupportEmail = () => {
    if (!subject || !message) {
      Alert.alert('Missing Info', 'Please fill out both the subject and your message.')
      return
    }

    // Explicit production email scheme
    const emailUrl = `mailto:support@tableio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    Linking.canOpenURL(emailUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(emailUrl)
        } else {
          Alert.alert('Error', 'Could not open default mail client application.')
        }
      })
      .catch((err) => console.error('Error handling email link:', err))
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.SECONDARY, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4" keyboardShouldPersistTaps="handled">

        {/* Header */}
        <View className="mt-6 mb-8">
          <Text className="text-white text-2xl font-extrabold">Help & Support</Text>
          <Text className="text-gray-400 text-xs mt-1">Facing booking issues? Reach out to our Delhi response unit.</Text>
        </View>

        {/* Direct Contact Methods Channels */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:support@tableio.com')}
            className="bg-gray-900 border border-gray-800 w-[48%] p-4 rounded-xl items-center justify-center shadow-md"
          >
            <Ionicons name="mail" size={24} color="#34d399" />
            <Text className="text-white font-bold text-xs mt-2">Email Support</Text>
            <Text className="text-gray-500 text-[10px] mt-0.5">support@tableio.com</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('tel:+911140000000')} // Mocked classic Delhi Landline template
            className="bg-gray-900 border border-gray-800 w-[48%] p-4 rounded-xl items-center justify-center shadow-md"
          >
            <Ionicons name="call" size={24} color="#34d399" />
            <Text className="text-white font-bold text-xs mt-2">Call Center</Text>
            <Text className="text-gray-500 text-[10px] mt-0.5">011-4000-0000</Text>
          </TouchableOpacity>
        </View>

        {/* Interactive Message Ticket Form */}
        <View className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6">
          <Text className="text-white font-bold text-base mb-4">Send a Ticket</Text>

          {/* Subject Field Input */}
          <Text className="text-gray-400 text-xs font-semibold mb-1.5">Subject</Text>
          <TextInput
            placeholder="e.g., Booking modification, Payment error..."
            placeholderTextColor="#4b5563"
            value={subject}
            onChangeText={setSubject}
            className="bg-gray-950 text-white rounded-lg px-3 py-2.5 text-sm border border-gray-850 mb-4"
          />

          {/* Message Field Input */}
          <Text className="text-gray-400 text-xs font-semibold mb-1.5">Your Message</Text>
          <TextInput
            placeholder="Describe your issue in detail (Include Restaurant Name / Order ID if applicable)..."
            placeholderTextColor="#4b5563"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            className="bg-gray-950 text-white rounded-lg px-3 py-2.5 text-sm border border-gray-850 mb-5 h-32"
          />

          {/* Action Button */}
          <TouchableOpacity
            onPress={handleSupportEmail}
            className="bg-emerald-500 py-3 rounded-xl items-center justify-center shadow-md active:bg-emerald-600"
          >
            <Text className="text-gray-950 font-bold text-sm">Launch Support Mail</Text>
          </TouchableOpacity>
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={'#000000'} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Contact