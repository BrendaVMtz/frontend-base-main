/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { persist } from "zustand/middleware";
// import { profileRequest, registerRequest } from "../api/auth";
// import { createUser } from "../interface/user";

export interface Profile {
  _id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

type State = {
  token: string;
  profile: any;
  isAuth: boolean;
  // errors: any;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  // register: (user: createUser) => void;
  logout: () => void;
  // cleanErrors: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: null,
      isAuth: false,
      // errors: null,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: true
          // isAuth: !!token,
        })),
        setProfile: (profile: any) => set(state => ({
          profile
        }) ),
      // register: async (user: createUser) => {
      //   try {
      //     const resRegister = await registerRequest(user);
      //     set(() => ({
      //       token: resRegister.data.token,
      //       isAuth: true,
      //     }));
      //   } catch (error) {
      //     set(() => ({ errors: error.response.data }));
      //   }
      // },
      // getProfile: async () => {
      //   const resProfile = await profileRequest();
      //   set(() => ({
      //     profile: resProfile.data,
      //   }));
      // },
      logout: () => set(() => ({ token: '', profile: null, isAuth: false })),
      // cleanErrors: () => set(() => ({ errors: null })),
    }),
    {
      name: "auth",
    }
  )
);
