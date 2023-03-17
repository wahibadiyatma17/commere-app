import MobileOnlyLayout from '@/components/Layout';
import React, { FC } from 'react';
import 'twin.macro';

const Login: FC = () => {
  return (
    <MobileOnlyLayout navigationProps={{ title: 'Login' }}>
      <div tw="flex flex-col w-full items-center justify-center gap-6">
        <div tw="flex flex-col items-center gap-2">
          <h1 tw="font-semibold text-lg">Selamat datang kembali !</h1>
          <span tw="text-gray-400">Silakan masukkan data berikut untuk Login</span>
        </div>
      </div>
    </MobileOnlyLayout>
  );
};

export default Login;
