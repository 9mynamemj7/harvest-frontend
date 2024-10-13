import {
  SafeAreaView,
  Image,
  View,
} from "react-native";

import CustomButton from "@/components/global/custom-button";
import CustomText from "@/components/global/custom-text";
import image from "@/assets/images/network-error-image.png";

export default function NetworkErrorScreen() {
  const handleButtonPress = () => {
    alert('다시 접속 시도하기 터치!')
  }
  return (
    <SafeAreaView>
      <View className="w-full h-full justify-center items-center gap-y-8">
        <View className="mt-[-10rem]"><Image source={image} /></View>
        <View className="items-center">
          <CustomText content="network error" language="en" className="my-4" />
          <CustomText content="인터넷 연결에 문제가 있습니다" language="en" className="font-bold" />
          <CustomText content="인터넷 연결 후 접속해 주세요." language="en" className="font-bold" />
        </View>
        <View >
          <CustomButton title="다시 접속 시도하기" onPress={handleButtonPress} />
        </View>
      </View>
    </SafeAreaView>
  );
}
