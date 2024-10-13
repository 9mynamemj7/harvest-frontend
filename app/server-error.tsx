import {
  SafeAreaView,
  Image,
  View,
} from "react-native";

import CustomButton from "@/components/global/custom-button";
import CustomText from "@/components/global/custom-text";
import image from "@/assets/images/server-error-image.png";

export default function ServerErrorScreen() {
  const handleButtonPress = () => {
    alert('개발자 문의하기 터치!')
  }
  return (
    <SafeAreaView>
      <View className="w-full h-full justify-center items-center gap-y-8">
        <View className="mt-[-10rem]"><Image source={image} /></View>
        <View className="items-center">
          <CustomText content="server error" language="en" className="my-4" />
          <CustomText content="앱 서버에 문제가 생긴거 같습니다" language="en" className="font-bold" />
          <CustomText content="다시 접속 시도하시거나 " language="en" className="font-bold" />
          <CustomText content="개발자에게 문의해 주세요" language="en" className="font-bold" />
        </View>
        <View >
          <CustomButton title="개발자 문의하기" onPress={handleButtonPress} />
        </View>
      </View>
    </SafeAreaView>
  );
}
