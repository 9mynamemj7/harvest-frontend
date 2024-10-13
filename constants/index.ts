import {
  Crops,
  CropsOutlined,
  FarmFilled,
  FarmOutlined,
  ProfileFilled,
  ProfileOutlined,
  ScheduleFilled,
  ScheduleOutlined,
  LockAlt,
  Calendar,
  InfoOutline,
  FileDoc,
  AnnounceOutline,
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

type ProfileMenuItem = {
  name: string;
  title: string;
  label: string;
  icon: any;
}
export const ProfileMenuList: Array<ProfileMenuItem> = [
  {
    name: "change-password",
    title: "비밀번호 변경하기",
    label: "비밀번호 변경하기",
    icon: LockAlt,
  },
  {
    name: "schedule",
    title: "예약일정 확인하기",
    label: "예약일정 확인하기",
    icon: Calendar,
  },
  {
    name: "question-list",
    title: "문의 내역",
    label: "문의 내역",
    icon: InfoOutline,
  },
  {
    name: "faq",
    title: "자주 물어보는 질문들",
    label: "자주 물어보는 질문들",
    icon: AnnounceOutline,
  },
  {
    name: "terms",
    title: "이용 약관",
    label: "이용 약관",
    icon: FileDoc,
  },
]

type FarmCategoryItem = {
  value: string;
  label: string;
}
export const FarmCategory: Array<FarmCategoryItem> = [
  { value: 'all', label: '전체' },
  { value: 'apple', label: '사과' },
  { value: 'pear', label: '배' },
  { value: 'grape', label: '포도' },
]