import { Href, router } from "expo-router";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";

import CustomText from "@/components/global/custom-text";
import image from '@/assets/images/mypage-background-image.png';
import { ProfileMenuList } from "@/constants";
import MenuItem from "@/app/(tabs)/profile/components/menu-item";

const ProfileBaseScreen = () => {
  const handleItemPress = (name: string) => {
    let route: Href<string | object> = "/(tabs)/profile";
    if (name == "change-password") route = "/(auth)/change-password";
    if (name == "schedule") route = "/(tabs)/profile/history/history-screen";
    if (name == "question-list") route = "/(qna)/question-list";
    if (name == "faq") route = "/(qna)/faq";
    if (name == "terms") route = "/(qna)/terms";
    router.push(route)
  }
  return (
    <SafeAreaView className="flex items-center w-screen h-screen">
      <ImageBackground
        source={image}
        resizeMode="cover"
        className="w-full h-[30%] flex justify-center items-center mb-12"
      >
        <View className="w-32 h-32 border-brand-400 border-solid border-[0.2rem] rounded-full justify-center items-center">
          <Image source={image} resizeMode="cover" className="w-[7.3rem] h-[7.3rem] rounded-full" />
        </View>
      </ImageBackground>
      <ScrollView className="w-[80%]">
        {ProfileMenuList.map((item, index, self) => 
          <Pressable key={item.name+index} onPress={() => handleItemPress(item.name)}>
            <MenuItem border={self.length == index + 1 ? "none" : "light"}>
              <Image className="w-6 h-6" source={item.icon} />
              <CustomText content={item.label} language="ko" />
            </MenuItem>
          </Pressable>
        )}
        <View className="mt-20 items-center font-thin">
          <Text className="text-xs">앱 버전 0.1.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileBaseScreen;
