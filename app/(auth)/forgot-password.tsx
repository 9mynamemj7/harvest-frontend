import CustomText from "@/components/global/custom-text";
import { SafeAreaView } from "react-native";

const ForgotPassword = () => {
  return (
    <SafeAreaView className="flex justify-center items-center">
      <CustomText content="Forgot Password" language="en" size="heading-2" />
    </SafeAreaView>
  );
};

export default ForgotPassword;
