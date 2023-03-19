import React, { FC, useRef } from 'react';
import 'twin.macro';

import { BaseModalProps } from '@/common/types/modal';
import { PopUpModal } from '@/components/Modals';
import { useForm, FormProvider } from 'react-hook-form';
import { ControlledTextInput } from '@/components/Froms/Text';
import { ControlledTextArea } from '@/components/Froms/TextArea';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import { useAccountStore } from '@/common/store/accountStore';
import toast from 'react-hot-toast';
import {
  getEmailValidationErrorMsg,
  getPhoneNumberValidationErrorMsg,
} from '@/common/utils/form/ValidationFrom';

type CompleteProfileModalProps = BaseModalProps;

const CompleteProfileModal: FC<CompleteProfileModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const methods = useForm();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = methods;
  const accountStore = useAccountStore();

  const onSubmit = (data: any) => {
    const dataEditProfile = {
      firstName: data.firstname,
      lastName: data.lastname,
      email: data.email,
      phoneNumber: data.phone_number,
      address: data.address,
    };
    accountStore.onEditProfile(dataEditProfile);
    accountStore.onProfileCompleted(true);
    toast.success('Perubahan profile berhasil disimpan!');
    onClose();
  };

  return (
    <PopUpModal isOpen={isOpen} onClose={() => onClose()}>
      <PopUpModal.Title>
        <h2 tw="text-xl font-bold text-center">Data Diri Anda</h2>
      </PopUpModal.Title>
      <PopUpModal.Body>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} tw="w-full flex flex-col gap-5" id="hook-form">
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">Nama Depan</label>
              <ControlledTextInput
                type={'text'}
                name="firstname"
                defaultValue={accountStore.firstName}
                placeholder="Masukkan nama depan"
                control={control}
                rules={{ required: true }}
                error={errors.firstname && 'Nama depan wajib diisi'}
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">Nama Belakang</label>
              <ControlledTextInput
                type={'text'}
                name="lastname"
                defaultValue={accountStore.lastName}
                placeholder="Masukkan nama belakang"
                control={control}
                rules={{ required: false }}
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">Email</label>
              <ControlledTextInput
                type={'email'}
                name="email"
                defaultValue={accountStore.email}
                placeholder="Masukkan email"
                control={control}
                rules={{ required: true }}
                error={errors.email && getEmailValidationErrorMsg(String(errors.email.type))}
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">No. Telepon</label>
              <ControlledTextInput
                type={'number'}
                name="phone_number"
                defaultValue={accountStore.phoneNumber}
                placeholder="Masukkan nomor telepon"
                control={control}
                prefix={'+62'}
                rules={{
                  required: true,
                  minLength: 10,
                  maxLength: 13,
                  validate: (value) => {
                    return value.charAt(0) !== String(0);
                  },
                }}
                error={
                  errors.phone_number &&
                  getPhoneNumberValidationErrorMsg(String(errors.phone_number.type))
                }
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">Alamat Lengkap</label>
              <ControlledTextArea
                type={'text'}
                name="address"
                defaultValue={accountStore.address}
                placeholder="Masukkan alamat lengkap"
                control={control}
                rules={{ required: true }}
                error={errors.address && 'Alamat wajib diisi'}
              />
            </div>
          </form>
        </FormProvider>
      </PopUpModal.Body>
      <PopUpModal.Footer>
        <div tw="w-full h-full  flex gap-4 items-center">
          <PrimaryButton size="md" form={'hook-form'} type={'submit'}>
            Simpan
          </PrimaryButton>
        </div>
      </PopUpModal.Footer>
    </PopUpModal>
  );
};

export default CompleteProfileModal;
