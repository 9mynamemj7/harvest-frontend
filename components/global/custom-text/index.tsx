import { View, Text } from "react-native";

type TextSize =
  | "caption"
  | "base"
  | "body"
  | "subtitle-2"
  | "subtitle-1"
  | "heading-5"
  | "heading-4"
  | "heading-3"
  | "heading-2"
  | "heading-1";

type TextColorType = "primary" | "secondary" | "tertiary" | "accent";

const TextColor = {
  primary: "text-neutral-1200",
  secondary: "text-neutral-1000",
  tertiary: "text-neutral-800",
  accent: "text-brand-700",
};

const TypoStyle = {
  caption: "text-sm",
  base: "text-base",
  body: "text-[16px]",
  "subtitle-2": "text-[16px] font-bold",
  "subtitle-1": "text-xl font-bold",
  "heading-5": "text-2xl font-bold",
  "heading-4": "text-3xl font-bold",
  "heading-3": "text-4xl font-bold",
  "heading-2": "text-5xl font-bold",
  "heading-1": "text-6xl font-bold",
};

const TextLanguage = {
  ko: "font-noto-sans-kr",
  en: "font-Inter",
};

type CustomTextProps = {
  content: string;
  color?: TextColorType;
  size?: TextSize;
  language: "ko" | "en";
  className?: string;
  numberOfLines?: number;
};

const CustomText = ({
  content,
  color = "primary",
  size = "base",
  language,
  className,
  numberOfLines
}: CustomTextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      className={`leading-[120%] tracking-tight ${TextLanguage[language]} ${TypoStyle[size]} ${TextColor[color]} ${className}`}
    >
      {content}
    </Text>
  );
};

export default CustomText;
