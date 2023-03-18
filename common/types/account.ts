export type AccountLoginType = {
  id: string;
  password: string;
  isLoggedIn: boolean;
};

export type AccountStoreDataType = {
  accountData: AccountLoginType;
  onLoggedIn: (data: AccountLoginType) => void;
  onLoggedOut: () => void;
};
