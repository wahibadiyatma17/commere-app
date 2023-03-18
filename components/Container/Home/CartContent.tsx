import React, { FC, useState } from 'react';
import 'twin.macro';

import { BaseActiveTabProps } from '@/common/types/home';
import CartItemCard from './components/CartItemCard';
import CheckoutCartModal from './components/CheckoutCartModal';

const CartContent: FC<BaseActiveTabProps> = (props) => {
  const { submitRef } = props;
  const [showCheckoutCartModal, setShowCheckoutCartModal] = useState<boolean>(false);

  return (
    <>
      <div tw="flex flex-col gap-4 w-full">
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <button tw="hidden" ref={submitRef} onClick={() => setShowCheckoutCartModal(true)} />
      </div>
      {showCheckoutCartModal && (
        <CheckoutCartModal
          isOpen={showCheckoutCartModal}
          onClose={() => setShowCheckoutCartModal(false)}
        />
      )}
    </>
  );
};

export default CartContent;
