import React, { FC, useRef } from 'react';
import 'twin.macro';

import { BaseModalProps } from '@/common/types/modal';
import { PopUpModal } from '@/components/Modals';
import { useForm, FormProvider } from 'react-hook-form';
import { ControlledTextInput } from '@/components/Froms/Text';
import { ControlledTextArea } from '@/components/Froms/TextArea';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

type CompleteProfileModalProps = BaseModalProps;

const CompleteProfileModal: FC<CompleteProfileModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const methods = useForm();
  const submitRef = useRef<any>(null);
  const { handleSubmit, control } = methods;

  const onSubmit = () => {
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
                placeholder="Masukkan nama depan"
                control={control}
                rules={{ required: true }}
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">Nama Belakang</label>
              <ControlledTextInput
                type={'text'}
                name="lastname"
                placeholder="Masukkan nama belakang"
                control={control}
                rules={{ required: true }}
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">Email</label>
              <ControlledTextInput
                type={'email'}
                name="email"
                placeholder="Masukkan email"
                control={control}
                rules={{ required: true }}
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">No. Telepon</label>
              <ControlledTextInput
                type={'number'}
                name="phone_number"
                placeholder="Masukkan nomor telepon"
                control={control}
                rules={{ required: true }}
              />
            </div>
            <div tw="flex flex-col gap-1">
              <label tw="text-[#555555] text-sm">Alamat Lengkap</label>
              <ControlledTextArea
                type={'text'}
                name="address"
                placeholder="Masukkan alamat lengkap"
                control={control}
                rules={{ required: true }}
              />
            </div>
            <button ref={submitRef} tw="hidden" />
          </form>
        </FormProvider>
      </PopUpModal.Body>
      <PopUpModal.Footer>
        <div tw="w-full h-full  flex gap-4 items-center">
          <PrimaryButton size="md" onClick={() => onClose()}>
            Simpan
          </PrimaryButton>
          <PrimaryButton variant="outline" size="md" onClick={() => onClose()}>
            Batal
          </PrimaryButton>
        </div>
      </PopUpModal.Footer>
    </PopUpModal>
  );
};

export default CompleteProfileModal;
