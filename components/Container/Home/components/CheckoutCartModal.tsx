import React, { FC } from 'react';
import 'twin.macro';

import { BaseModalProps } from '@/common/types/modal';
import { PopUpModal } from '@/components/Modals';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import CheckoutItemCard from './CheckoutItemCard';

type CheckoutCartModal = BaseModalProps;

const CheckoutCartModal: FC<CheckoutCartModal> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <PopUpModal isOpen={isOpen} onClose={() => onClose()}>
      <PopUpModal.Title>
        <h2 tw="text-xl font-bold text-center">Ringkasan Pembelian</h2>
      </PopUpModal.Title>
      <PopUpModal.Body>
        <div tw="flex flex-col rounded-md border-[1px] border-solid  w-full h-full">
          <CheckoutItemCard />
          <CheckoutItemCard />
        </div>
      </PopUpModal.Body>
      <PopUpModal.Footer>
        <div tw="w-full h-full  flex gap-4 items-center">
          <PrimaryButton size="md" onClick={() => onClose()}>
            Bayar
          </PrimaryButton>
        </div>
      </PopUpModal.Footer>
    </PopUpModal>
  );
};

export default CheckoutCartModal;
