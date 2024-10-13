import { View } from "react-native";
import CustomText from "@/components/global/custom-text";
import AppLayout from "@/components/ui/app-layout";
import ScheduleInfo from "./_components/schedule-info";
import CustomCardContainer from "@/components/global/card/card-container";
import CustomButton from "@/components/global/custom-button";

const ScheduleBaseScreen = () => {
  return (
    <AppLayout>
      <CustomCardContainer>
        <View className="mx-4">
          <ScheduleInfo
            title="농가체험 서비스 제목"
          />
          <CustomButton title="체험관련 문의하기" type="text" className="py-4 border-brand-200 border-[1px]" />
        </View>
      </CustomCardContainer>
    </AppLayout>
  );
};

export default ScheduleBaseScreen;
