import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

// Tabs
const TAB_CONFIG = [
  {
    name: "index",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    name: "bookmarks",
    icon: "bookmark-outline",
    activeIcon: "bookmark",
  },
  {
    name: "create",
    icon: "add-circle-outline",
    activeIcon: "add-circle",
  },
  {
    name: "notifications",
    icon: "notifications-outline",
    activeIcon: "notifications",
  },
  {
    name: "profile",
    icon: "person-outline",
    activeIcon: "person",
  },
] as const;

// Tab bar styling constants
const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 85 : 60;
const TAB_ICON_SIZE = 24;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopWidth: 1,
          borderTopColor: COLORS.surfaceLight,
          position: "absolute",
          elevation: 8,
          shadowColor: COLORS.white,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          height: TAB_BAR_HEIGHT,
          paddingBottom: Platform.OS === "ios" ? 25 : 8,
          paddingTop: 8,
          paddingHorizontal: 16,
        },
        tabBarIconStyle: {
          marginTop: Platform.OS === "android" ? 4 : 0,
        },
      }}
    >
      {TAB_CONFIG.map(({ name, icon, activeIcon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? activeIcon : icon}
                size={TAB_ICON_SIZE}
                color={color}
                style={{
                  transform: [{ scale: focused ? 1.1 : 1 }],
                }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}