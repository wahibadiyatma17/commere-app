import React, { FC, useState } from 'react';
import Image from 'next/image';
import { FiTrash } from 'react-icons/fi';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { styled } from 'twin.macro';
import { CartItemType } from '@/common/types/cart';
import { currencyFormat } from '@/common/utils/helpers';
import { useCartStore } from '@/common/store/cartStore';

const CartItemCard: FC<CartItemType> = (props) => {
  const { title, price, quantity } = props;
  const [itemQty, setItemQty] = useState(quantity);

  const cartStore = useCartStore();
  let currentProduct = cartStore.productList.find((data: CartItemType) => data.title === title)!;
  let removedItemProductList = cartStore.productList.filter(
    (data: CartItemType) => data.title !== title,
  );
  const indexCurrentProduct = cartStore.productList.findIndex(
    (data: CartItemType) => data.title === title,
  );

  const onIncreaseQuantity = () => {
    setItemQty(itemQty + 1);
    currentProduct.quantity = itemQty + 1;
    removedItemProductList.splice(indexCurrentProduct, 0, currentProduct);
    cartStore.setProductList(removedItemProductList);
  };

  const onDecreaseQuantity = () => {
    if (itemQty > 1) {
      setItemQty(itemQty - 1);
      currentProduct.quantity = itemQty - 1;
      removedItemProductList.splice(indexCurrentProduct, 0, currentProduct);
      cartStore.setProductList(removedItemProductList);
    } else return;
  };

  const onRemoveProduct = () => {
    const newProductList = cartStore.productList.filter(
      (data: CartItemType) => data.title !== title,
    );
    cartStore.setProductList(newProductList);
  };

  return (
    <StyledCartItemCard tw="transition-all">
      <div tw="relative w-[4rem] h-[4rem] rounded-md">
        <Image
          src={'/img/image-empty-placeholder.png'}
          alt={'image placeholder'}
          fill
          style={{ objectFit: 'cover' }}
          tw="rounded-md"
        />
      </div>
      <div tw="flex flex-col gap-3 flex-[3]">
        <h3 tw="font-bold text-lg">{title}</h3>
        <span tw="text-base">{currencyFormat(price)}</span>
      </div>
      <div tw="h-full self-end flex-[1]">
        <div tw="flex gap-3 items-center">
          <FiTrash size={20} color={'#388067'} cursor="pointer" onClick={() => onRemoveProduct()} />
          <div tw="h-5 w-[1px] bg-gray-500" />
          <div tw="flex gap-2">
            <AiOutlineMinusCircle
              size={20}
              color={'#388067'}
              opacity={itemQty === 1 ? '0.4' : '1'}
              cursor={itemQty === 1 ? 'not-allowed' : 'pointer'}
              onClick={() => onDecreaseQuantity()}
            />
            <span tw="text-[#555555] flex justify-center font-semibold text-sm min-w-[0.75rem]">
              {itemQty}
            </span>
            <AiOutlinePlusCircle
              size={20}
              color={'#388067'}
              tw="cursor-pointer"
              onClick={() => onIncreaseQuantity()}
            />
          </div>
        </div>
      </div>
    </StyledCartItemCard>
  );
};

export default CartItemCard;

const StyledCartItemCard = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #388067;
  background-color: #ffffff;
  padding: 0.75rem;
`;
