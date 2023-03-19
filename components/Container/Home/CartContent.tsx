import React, { FC, useState } from 'react';
import { BsFillPatchCheckFill, BsCartX } from 'react-icons/bs';
import 'twin.macro';

import { BaseActiveTabProps } from '@/common/types/home';
import { useCartStore } from '@/common/store/cartStore';
import { CartItemType } from '@/common/types/cart';

import CartItemCard from './components/CartItemCard';
import CheckoutCartModal from './components/CheckoutCartModal';

const CartContent: FC<BaseActiveTabProps> = (props) => {
  const { submitRef } = props;
  const [showCheckoutCartModal, setShowCheckoutCartModal] = useState<boolean>(false);
  const cartStore = useCartStore();

  return (
    <>
      <div tw="flex flex-col gap-4 w-full">
        {cartStore.productList.length === 0 ? (
          cartStore.isCartPaid ? (
            <div tw="flex flex-col w-full h-full justify-center items-center py-10">
              <BsFillPatchCheckFill size={64} color={'#388067'} tw="mb-3" />
              <h3 tw="font-semibold text-lg text-[#555555]">Pemesanan Berhasil</h3>
              <span tw="text-sm text-[#555555]">Tunggu hingga produk dikirim ke tempat anda</span>
            </div>
          ) : (
            <div tw="flex flex-col w-full h-full justify-center items-center py-10">
              <BsCartX size={64} color={'#CC0000'} tw="mb-3" />
              <span tw="font-semibold text-lg text-[#555555]">Keranjang belanjaanmu kosong. </span>
              <span tw="text-sm text-[#555555]">
                Silakan tambahakan produk ke keranjang belanja
              </span>
            </div>
          )
        ) : (
          cartStore.productList.map((data: CartItemType, idx: number) => (
            <CartItemCard key={idx} {...data} />
          ))
        )}
      </div>
      <button tw="hidden" ref={submitRef} onClick={() => setShowCheckoutCartModal(true)} />
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
