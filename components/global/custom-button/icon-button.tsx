import { useState } from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";

type IconButtonProps = {
  icon: any;
  className?: string;
};

const IconButton = ({ icon, className }: IconButtonProps) => {
  const [isPressing, setIsPressing] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        setIsPressing(true);
      }}
      onPressOut={() => {
        setIsPressing(false);
      }}
    >
      <View
        className={`p-4 rounded-full ${
          isPressing
            ? "bg-brand-700 border border-brand-700"
            : "border border-brand-200"
        }`}
      >
        <Image source={icon} className={`w-5 h-5`} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IconButton;
