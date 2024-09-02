import { View } from "react-native";
import CustomText from "@/components/global/custom-text";

const ProfileBaseScreen = () => {
  return (
    <View className="flex justify-center items-center w-screen h-screen">
      <CustomText
        size="heading-2"
        language="en"
        content="Profile Screen"
        className="text-brand-700"
      />
    </View>
  );
};

export default ProfileBaseScreen;
