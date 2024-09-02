import CustomButton from "@/components/global/custom-button";
import CustomText from "@/components/global/custom-text";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native";

export default function NotFoundScreen() {
  return (
    <SafeAreaView>
      <CustomText content="Opps! Not Found" language="en" />
      <Link href={"/(tabs)/home"}>
        <CustomButton title="홈으로" />
      </Link>
    </SafeAreaView>
  );
}
