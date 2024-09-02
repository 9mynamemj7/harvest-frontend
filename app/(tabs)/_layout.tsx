import { Tabs } from "expo-router";
import { MainTabLists } from "@/constants";
import GlobalTabIcon from "@/components/global/tab-icon";

const MainTabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00523E",
      }}
    >
      {MainTabLists.map((tab) => (
        <Tabs.Screen
          key={tab.title}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarStyle: {
              paddingTop: 8,
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
