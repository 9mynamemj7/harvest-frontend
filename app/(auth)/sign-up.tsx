import CustomText from "@/components/global/custom-text";
import { router } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";

const SignUpScreen = () => {
  const handleHomePress = () => {
    router.back()
  }
  return (
    <SafeAreaView className="flex justify-center items-center">
      <CustomText content="Sign Up Screen" language="en" size="heading-2" />
      <Pressable onPress={handleHomePress} className="flex flex-row items-center gap-x-3">
        <CustomText language="ko" content="홈으로" />
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUpScreen;
