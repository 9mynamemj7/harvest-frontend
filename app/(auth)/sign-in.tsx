import CustomText from "@/components/global/custom-text";
import { SafeAreaView } from "react-native";

const SignInScreen = () => {
  return (
    <SafeAreaView className="flex justify-center items-center">
      <CustomText content="Sign In Screen" language="en" size="heading-2" />
    </SafeAreaView>
  );
};

export default SignInScreen;
