import {
  // ImageBackground,
  SafeAreaView,
  Image,
  View,
} from "react-native";

import CustomButton from "@/components/global/custom-button";
import CustomText from "@/components/global/custom-text";
import image from "@/assets/images/system-error-image.png";

export default function NotFoundScreen() {
  const handleUpdatePress = () => {
    alert('앱 업데이트 터치!')
  }
  return (
    <SafeAreaView>
      <View className="w-full h-full justify-center items-center gap-y-8">
        <View className="mt-[-10rem]"><Image source={image} /></View>
        <View className="items-center">
          <CustomText content="client system error" language="en" className="my-4" />
          <CustomText content="버전이 너무 낮습니다" language="en" className="font-bold" />
          <CustomText content="앱 스토어에서 앱을 업데이트 해주세요" language="en" className="font-bold" />
        </View>
        <View >
          <CustomButton title="앱 업데이트 하러가기" onPress={handleUpdatePress} />
        </View>
      </View>
      {/* <ImageBackground
        source={image}
        resizeMode="contain"
        className="flex justify-center items-center w-full h-full"
      >
      </ImageBackground> */}
    </SafeAreaView>
  );
}
