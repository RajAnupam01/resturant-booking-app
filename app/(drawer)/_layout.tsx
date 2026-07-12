import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, Text, View, Share, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useUser } from '@/context/userContext';

function CustomDrawerContent(props: any) {

  const { logout,profile} = useUser()

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this awesome food app!',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRate = () => {
    Alert.alert('Rate Us', 'Redirecting to App Store / Play Store...');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout', onPress: async () => {
          await logout();
          router.replace("/");
        },
      },
    ]);
  };

  return (
    <View className="flex-1">
      {/* Scrollable area containing your navigation screens */}
      <DrawerContentScrollView {...props}>
        {/* Header/Profile Section */}
        <View className="p-5 border-b border-gray-100 mb-2.5 bg-gray-50">
          <Text className="text-lg font-bold text-gray-800">Hello, Foodie!</Text>
          <Text className="text-sm text-gray-500 mt-1">{profile?.email}</Text>
        </View>

        {/* Dynamic Navigation list */}
        <DrawerItemList {...props} />

        {/* Persistent Footer Section for Share, Rate, Logout */}
        <View className="p-5 border-t border-gray-100 bg-white">
          <Pressable className="flex-row items-center py-3" onPress={handleShare}>
            <Ionicons name="share-social-outline" size={20} color="#333" />
            <Text className="text-[15px] ml-4 text-gray-800">Share App</Text>
          </Pressable>

          <Pressable className="flex-row items-center py-3" onPress={handleRate}>
            <Ionicons name="star-outline" size={20} color="#333" />
            <Text className="text-[15px] ml-4 text-gray-800">Rate Us</Text>
          </Pressable>

          <View className="h-[1px] bg-gray-100 my-2" />

          <Pressable className="flex-row items-center py-3 mt-1" onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#ff4444" />
            <Text className="text-[15px] ml-4 text-red-500 font-semibold">Logout</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerLeft: () => (
          // Adjusted style to use Tailwind utility classes
          <Pressable
            onPress={() => router.back()}
            className="ml-[15px]"
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'Overview',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="resturant/[id]"
        options={{
          drawerItemStyle: { display: 'none' },
          title: 'Restaurant Details',
          headerShown: true
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: 'About',
          title: 'About',
          headerShown: true,
          drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="contact"
        options={{
          drawerLabel: 'Contact',
          title: 'Contact',
          headerShown: true,
          drawerIcon: ({ color, size }) => <Ionicons name="mail-outline" size={size} color={color} />
        }}
      />
    </Drawer>
  );
}