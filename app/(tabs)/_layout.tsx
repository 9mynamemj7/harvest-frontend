import { Tabs } from "expo-router";
import { MainTabLists } from "@/constants";
import GlobalTabIcon from "@/components/global/tab-icon";
import { Platform } from "react-native";

const MainTabsLayout = () => {
  const tabBarHeight = Platform.select({
    ios: 100,   // iOS 전용 높이
    android: 70, // Android 전용 높이
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#10523E",
      }}
    >
      {MainTabLists.map((tab) => (
        <Tabs.Screen
          key={tab.title}
          name={tab.name}
          options={{
            headerShown: false,
            title: tab.title,
            tabBarStyle: {
              position: 'absolute',
              height: tabBarHeight,
            },
            tabBarIcon: ({ color, focused }) => (
              <GlobalTabIcon
                tintColor={color}
                focused={focused}
                unfocusedIcon={tab.unfocusedIcon}
                focusedIcon={tab.focusedIcon}
                label={tab.label}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default MainTabsLayout;
