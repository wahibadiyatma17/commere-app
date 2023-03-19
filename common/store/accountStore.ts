import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AccountLoginType, AccountStoreDataType } from '../types/account';

const INITIAL_ACCOUNT_STORE = {
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  phoneNumber: undefined,
  address: undefined,
  password: undefined,
  isLoggedIn: false,
  isProfileCompleted: false,
} as AccountLoginType;

export const useAccountStore = create<any>(
  persist(
    (set) => ({
      ...INITIAL_ACCOUNT_STORE,

      onLoggedIn: (loggedInData: Pick<AccountLoginType, 'email' | 'password' | 'isLoggedIn'>) =>
        set(() => ({
          email: loggedInData.email,
          password: loggedInData.password,
          isLoggedIn: loggedInData.isLoggedIn,
        })),
      onEditProfile: (editProfileData: Omit<AccountLoginType, 'password' | 'isLoggedIn'>) =>
        set(() => ({
          email: editProfileData.email,
          firstName: editProfileData.firstName,
          lastName: editProfileData.lastName,
          phoneNumber: editProfileData.phoneNumber,
          address: editProfileData.address,
        })),
      onLoggedOut: () =>
        set(() => ({
          ...INITIAL_ACCOUNT_STORE,
        })),
      onProfileCompleted: () =>
        set((b: boolean) => ({
          isProfileCompleted: b,
        })),
    }),
    {
      name: 'account-information',
      getStorage: () => localStorage,
    },
  ),
);
