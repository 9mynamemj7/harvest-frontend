import {
  Crops,
  CropsOutlined,
  FarmFilled,
  FarmOutlined,
  ProfileFilled,
  ProfileOutlined,
  ScheduleFilled,
  ScheduleOutlined,
} from "./icons";

type MainTab = {
  name: string;
  title: string;
  label: string;
  focusedIcon: any;
  unfocusedIcon: any;
};

export const MainTabLists: MainTab[] = [
  {
    name: "home",
    title: "홈",
    label: "홈",
    focusedIcon: Crops,
    unfocusedIcon: CropsOutlined,
  },
  {
    name: "farm",
    title: "농가",
    label: "농가",
    focusedIcon: FarmFilled,
    unfocusedIcon: FarmOutlined,
  },
  {
    name: "schedule",
    title: "예약일정",
    label: "예약일정",
    focusedIcon: ScheduleFilled,
    unfocusedIcon: ScheduleOutlined,
  },
  {
    name: "profile",
    title: "내 정보",
    label: "내 정보",
    focusedIcon: ProfileFilled,
    unfocusedIcon: ProfileOutlined,
  },
];
