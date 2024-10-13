import {View} from 'react-native';

const borderStyle = {
  none: 'border-b-0',
  light: 'border-b-[2px]',
  bold: 'border-b-4',
}
type MenuItemBorderType = "none" | "light" | "bold";
type MenuItemProps = {
  children: React.ReactNode;
  border?: MenuItemBorderType;
}
const MenuItem = ({
  children,
  border="light",
}: MenuItemProps) => {
  return (
    <View className={`flex flex-row gap-x-4 w-full items-center px-4 py-4 ${borderStyle[border]} border-[#c0cdc9]`}>
      {children}
    </View>
  )
}

export default MenuItem