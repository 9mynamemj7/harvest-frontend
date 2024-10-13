import { Image, Text, TouchableOpacity, View } from "react-native";

type ButtonStyleType = "primary" | "text" | "icon";

const ButtonStyle = {
  primary: "bg-brand-700",
  text: "bg-transparent",
  icon: "bg-brand-700",
};

const getTextColor = (type: ButtonStyleType) => {
  return type === "primary" ? "text-neutral-100" : "text-neutral-1200";
};

type CustomButtonProps = {
  children?: React.ReactNode;
  title?: string;
  leftIcon?: any;
  rightIcon?: any;
  type?: ButtonStyleType;
  className?: string;
  onPress?: () => void;
};

const CustomButton = ({
  title,
  leftIcon,
  rightIcon,
  onPress,
  type = "primary",
  className,
  children,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={`px-2.5 py-2 flex justify-center items-center gap-1 flex-row rounded-s ${ButtonStyle[type]} ${className}`}
      onPress={onPress}
    >
      {leftIcon && (
        <Image
          source={leftIcon}
          className="w-4 h-4"
          tintColor={`${type === "text" ? "#1F1F1F" : "#fff"}`}
        />
      )}
      <Text className={`${getTextColor(type)}`}>{title}</Text>
      {children}
      {rightIcon && (
        <Image
          source={rightIcon}
          className="w-4 h-4"
          tintColor={`${type === "text" ? "#1F1F1F" : "#fff"}`}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
