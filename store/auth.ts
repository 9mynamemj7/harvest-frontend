import { create } from 'zustand' // create로 zustand를 불러옵니다.

type AuthStoreProps = {
  auth: boolean;
  reverseAuthStore: () => void;
  setAuthFalse: () => void;
  setAuthTrue: () => void;
}

const useAuthStore = create<AuthStoreProps>((set) => ({
  auth: false,
  reverseAuthStore: () => set((state) => ({ auth: !state.auth })),
  setAuthFalse: () => set({ auth: false }),
  setAuthTrue: () => set({ auth: true })
}))

export default useAuthStore