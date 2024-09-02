import { View, Text, Image } from "react-native";

type GlobalTabIconProps = {
  label: string;
  focusedIcon: any;
  unfocusedIcon: any;
  tintColor: string;
  focused: boolean;
};

const GlobalTabIcon = ({
  label,
  focusedIcon,
  unfocusedIcon,
  tintColor,
  focused,
}: GlobalTabIconProps) => {
  return (
    <View className="flex justify-center items-center">
      <Image
        source={focused ? focusedIcon : unfocusedIcon}
        resizeMode="contain"
        className="w-8 h-8"
        tintColor={tintColor}
      />
      <Text
        style={{
          color: tintColor,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default GlobalTabIcon;
