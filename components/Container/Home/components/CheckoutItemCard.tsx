import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from 'twin.macro';
import { CartItemType } from '@/common/types/cart';
import { currencyFormat } from '@/common/utils/helpers';

const CheckoutItemCard: FC<CartItemType> = (props) => {
  const { title, price, quantity } = props;
  return (
    <StyledCheckoutItemCard tw="transition-all">
      <div tw="relative w-[3.5rem] h-[3.5rem] rounded-md">
        <Image
          src={'/img/image-empty-placeholder.png'}
          alt={'image placeholder'}
          fill
          style={{ objectFit: 'cover' }}
          tw="rounded-md"
        />
      </div>
      <div tw="flex flex-col gap-1 flex-[3]">
        <h3 tw="font-bold text-base">{title}</h3>
        <div tw="flex items-center gap-2">
          <span tw="text-xs">{quantity} x</span>
          <span tw="text-xs">{currencyFormat(price)}</span>
        </div>
      </div>
      <div tw="h-full self-center flex-[1]">
        <h4 tw="font-bold text-[#555555] text-sm">{currencyFormat(price * quantity)}</h4>
      </div>
    </StyledCheckoutItemCard>
  );
};

export default CheckoutItemCard;

const StyledCheckoutItemCard = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  background-color: #ffffff;
  padding: 0.75rem;
`;
