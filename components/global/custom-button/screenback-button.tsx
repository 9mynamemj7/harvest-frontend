import { Pressable, Image } from "react-native"
import { router } from "expo-router"

import CustomText from "../custom-text"
import { ScreenBack } from "@/constants/icons";


const ScreenbackButton = () => {
  const handleHomePress = () => {
    router.back()
  }
  return (
    <Pressable onPress={handleHomePress} className="flex flex-row items-center gap-x-3">
      <Image source={ScreenBack} className="w-8 h-6 m-2 rounded-xl" />
      <CustomText language="ko" content="뒤로가기" />
    </Pressable>
  )
}

export default ScreenbackButton