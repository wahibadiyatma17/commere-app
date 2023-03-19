import React, { FC, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useRouter } from 'next/router';
import 'twin.macro';

import MobileOnlyLayout from '@/components/Layout';
import { ControlledTextInput } from '@/components/Froms/Text';
import {
  getEmailValidationErrorMsg,
  getPasswordValidationErrorMsg,
} from '@/common/utils/form/ValidationFrom';
import { useAccountStore } from '@/common/store/accountStore';
import { AccountLoginType } from '@/common/types/account';
import { toast } from 'react-hot-toast';

const Login: FC = () => {
  const methods = useForm();
  const router = useRouter();
  const submitRef = useRef<any>(null);
  const accountStore = useAccountStore();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = methods;

  const [isShowPassowrd, setIsShowPassword] = useState<boolean>(false);

  const onSubmit = () => {
    submitRef?.current?.click();
  };

  const onClick = (data: any) => {
    const loggedInData = {
      email: data.email,
      password: data.password,
      isLoggedIn: true,
    } as AccountLoginType;
    accountStore.onLoggedIn(loggedInData);
    toast.success('Login berhasil!');
    router.push('/');
  };

  return (
    <MobileOnlyLayout
      navigationProps={{ title: 'Login' }}
      buttonFooterprops={{ onClick: () => onSubmit() }}
    >
      <div tw="flex flex-col w-full items-center justify-center gap-6">
        <div tw="flex flex-col items-center gap-2">
          <h1 tw="font-semibold text-lg">Selamat datang kembali !</h1>
          <span tw="text-gray-400">Silakan masukkan data berikut untuk Login</span>
        </div>
        <div tw="w-full">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onClick)} tw="space-y-4 pr-7 w-full" id="hook-form">
              <ControlledTextInput
                type={'email'}
                name="email"
                placeholder="Masukkan email"
                control={control}
                rules={{ required: true, minLength: 3, maxLength: 30 }}
                error={errors.email && getEmailValidationErrorMsg(String(errors.email.type))}
              />
              <ControlledTextInput
                type={isShowPassowrd ? 'text' : 'password'}
                name="password"
                placeholder="Masukkan password"
                control={control}
                rules={{
                  required: true,
                  minLength: 3,
                  maxLength: 10,
                  validate: (value) => {
                    return /[A-Z]/.test(value);
                  },
                }}
                error={
                  errors.password && getPasswordValidationErrorMsg(String(errors.password.type))
                }
                suffix={
                  isShowPassowrd ? (
                    <AiOutlineEye size={24} onClick={() => setIsShowPassword(false)} />
                  ) : (
                    <AiOutlineEyeInvisible size={24} onClick={() => setIsShowPassword(true)} />
                  )
                }
              />
              <button ref={submitRef} tw="hidden" type="submit" />
            </form>
          </FormProvider>
        </div>
      </div>
    </MobileOnlyLayout>
  );
};

export default Login;
