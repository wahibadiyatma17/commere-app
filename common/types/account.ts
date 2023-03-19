export type AccountLoginType = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
  email?: string;
  password?: string;
  isLoggedIn: boolean;
  isProfileCompleted?: boolean;
};

export type AccountStoreDataType = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
  email?: string;
  password?: string;
  isLoggedIn: boolean;
  isProfileCompleted?: boolean;
  onProfileCompleted: (b: boolean) => void;
  onLoggedIn: (data: Pick<AccountLoginType, 'email' | 'password' | 'isLoggedIn'>) => void;
  onEditProfile: (data: Omit<AccountLoginType, 'password' | 'isLoggedIn'>) => void;
  onLoggedOut: () => void;
};
