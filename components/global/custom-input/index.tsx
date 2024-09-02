import { TextInput, KeyboardAvoidingView, View, Image } from "react-native";
import CustomText from "../custom-text";

type CustomInputProps = {
  icon?: any;
  label?: string;
  placeholder?: string;
  className?: string;
  onChangeText?: (text: string) => void;
};

const CustomInput = ({
  icon,
  label,
  placeholder = "This is Custom Input Text",
  className,
  onChangeText,
}: CustomInputProps) => {
  return (
    <KeyboardAvoidingView className="flex flex-col gap-1">
      {label && (
        <CustomText
          content={label}
          language="ko"
          className="text-neutral-800"
        />
      )}
      <View
        className={`flex flex-row justify-start items-center gap-2 px-3 py-2 border border-brand-200 rounded-s min-w-[358px] ${className}`}
      >
        {icon && <Image source={icon} className="w-4 h-4" />}
        <TextInput
          placeholder={placeholder}
          className="placeholder:text-neutral-800"
          onChangeText={onChangeText}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;
