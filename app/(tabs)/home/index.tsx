import { ScrollView, Text, View } from "react-native";
import React from "react";
import CustomInput from "@/components/global/custom-input";
import { SearchIcon } from "@/constants/icons";
import AppLayout from "@/components/ui/app-layout";
import NotLoginView from "./components/not-login";
import IsLoginView from "./components/is-login";
import FarmListView from "./components/farm-list";
import useAuthStore from "@/store/auth";
import Advertisement from "./components/advertisement";
import Popular from "./components/popular";
import CustomText from "@/components/global/custom-text";

const HomeScreen = () => {
  const { auth } = useAuthStore();
  return (
    <AppLayout>
      <View className="mt-4 mb-4 relative">
        {auth ? <IsLoginView /> : <NotLoginView />}
      </View>
      <View className="pb-4">
        {/* <CustomInput icon={SearchIcon} label="" placeholder="검색기능이 있을까?" /> */}
        <Advertisement />
        <View className="my-7">
          <CustomText className="mb-4" size="subtitle-2" content="인기 반려나무" language="ko" />
          <Popular />
        </View>
        <View className="my-7">
          <CustomText className="mb-4" size="subtitle-2" content="인기 반려나무" language="ko" />
          <FarmListView />
        </View>
      </View>
    </AppLayout>
  );
};

export default HomeScreen;
