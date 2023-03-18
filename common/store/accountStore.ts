import { create } from 'zustand';
import { AccountLoginType, AccountStoreDataType } from '../types/account';

const INITIAL_ACCOUNT_STORE = {
  id: '',
  password: '',
  isLoggedIn: false,
} as AccountLoginType;

export const useAccountStore = create<AccountStoreDataType>((set) => ({
  accountData: INITIAL_ACCOUNT_STORE,
  onLoggedIn: (loggedInData: AccountLoginType) =>
    set(() => ({
      accountData: loggedInData,
    })),
  onLoggedOut: () =>
    set(() => ({
      accountData: INITIAL_ACCOUNT_STORE,
    })),
}));
