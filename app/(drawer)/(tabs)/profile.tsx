import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from '@/context/userContext';

const Profile = () => {
  const { isGuest } = useUser();
  
  if (isGuest) {
    return (
      <View>
        <Text>Please sign in to access your profile.</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Setting</Text>
    </View>
  )
}

export default Profile